import { NextResponse } from "next/server";
import { createSubmission } from "@/lib/submissions";

type ContactPayload = {
  topic?: string;
  name?: string;
  email?: string;
  organisation?: string;
  date?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const topic = body.topic?.trim() ?? "";
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const organisation = body.organisation?.trim() ?? "";
  const date = body.date?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and a note about the keynote are required." }, { status: 422 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  try {
    await createSubmission({ topic, name, email, organisation, date, message });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json({ error: "The form is temporarily unavailable. Please try again later." }, { status: 503 });
  }
}
