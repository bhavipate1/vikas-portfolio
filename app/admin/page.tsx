"use client";

import { useState } from "react";

type Submission = {
  id: string;
  topic: string;
  name: string;
  email: string;
  organisation: string;
  date: string;
  message: string;
  status: "new" | "contacted" | "closed";
  createdAt: string;
};

export default function AdminPage() {
  const [email, setEmail] = useState("suranivikas@gmail.com");
  const [password, setPassword] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadSubmissions() {
    const response = await fetch("/api/admin/submissions");
    if (!response.ok) throw new Error((await response.json()).error || "Could not load submissions.");
    setSubmissions((await response.json()).submissions);
    setLoggedIn(true);
  }

  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) setError((await response.json()).error || "Login failed.");
    else await loadSubmissions();
    setLoading(false);
  }

  async function updateStatus(id: string, status: Submission["status"]) {
    const response = await fetch("/api/admin/submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (!response.ok) {
      setError((await response.json()).error || "Could not update status.");
      return;
    }
    const { submission } = await response.json();
    setSubmissions((current) => current.map((item) => (item.id === id ? submission : item)));
  }

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    setLoggedIn(false);
    setSubmissions([]);
  }

  if (!loggedIn) {
    return (
      <main className="min-h-screen bg-paper px-5 pb-20 pt-36 text-paper-foreground sm:px-8">
        <div className="mx-auto max-w-md border border-paper-border bg-paper-surface p-8">
          <p className="text-xs font-bold uppercase tracking-[3px] text-[#8a5a34]">Private area</p>
          <h1 className="mt-4 text-3xl font-semibold">Vikas admin</h1>
          <p className="mt-3 text-sm text-paper-muted">View and manage enquiries submitted through the website.</p>
          <form onSubmit={login} className="mt-8 space-y-4">
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required placeholder="Admin email" className="w-full border border-paper-border bg-paper px-4 py-3 text-sm outline-none focus:border-accent" />
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" required placeholder="Password" className="w-full border border-paper-border bg-paper px-4 py-3 text-sm outline-none focus:border-accent" />
            {error && <p className="text-sm text-red-700">{error}</p>}
            <button disabled={loading} className="w-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground disabled:opacity-60">
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-paper px-5 pb-20 pt-32 text-paper-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 border-b border-paper-border pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#8a5a34]">Private dashboard</p>
            <h1 className="mt-3 text-4xl font-semibold">Enquiries</h1>
            <p className="mt-2 text-sm text-paper-muted">{submissions.length} total submissions</p>
          </div>
          <button onClick={logout} className="border border-paper-border px-4 py-2 text-sm hover:border-accent">Sign out</button>
        </div>
        {error && <p className="mt-6 text-sm text-red-700">{error}</p>}
        <div className="mt-8 space-y-4">
          {submissions.map((submission) => (
            <article key={submission.id} className="border border-paper-border bg-paper-surface p-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div>
                  <h2 className="text-xl font-medium">{submission.name}</h2>
                  <p className="mt-1 text-sm text-paper-muted">{submission.email} {submission.organisation && `· ${submission.organisation}`}</p>
                </div>
                <select value={submission.status} onChange={(event) => updateStatus(submission.id, event.target.value as Submission["status"])} className="h-10 border border-paper-border bg-paper px-3 text-sm">
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
              <div className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
                <p><span className="text-paper-muted">Topic:</span> {submission.topic}</p>
                <p><span className="text-paper-muted">Requested date:</span> {submission.date || "Not specified"}</p>
                <p><span className="text-paper-muted">Received:</span> {new Date(submission.createdAt).toLocaleString()}</p>
              </div>
              <p className="mt-5 border-t border-paper-border pt-5 text-sm leading-relaxed">{submission.message}</p>
            </article>
          ))}
          {submissions.length === 0 && <p className="border border-paper-border p-8 text-sm text-paper-muted">No submissions yet.</p>}
        </div>
      </div>
    </main>
  );
}
