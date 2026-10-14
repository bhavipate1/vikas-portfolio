import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { listSubmissions, updateSubmissionStatus, type Submission } from "@/lib/submissions";

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  try {
    return NextResponse.json({ submissions: await listSubmissions() });
  } catch (error) {
    console.error("Could not list submissions:", error);
    return NextResponse.json({ error: "Database is not configured or unavailable." }, { status: 503 });
  }
}

export async function PATCH(request: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  let body: { id?: string; status?: Submission["status"] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  if (!body.id || !body.status || !["new", "contacted", "closed"].includes(body.status)) {
    return NextResponse.json({ error: "A valid id and status are required." }, { status: 422 });
  }
  try {
    const submission = await updateSubmissionStatus(body.id, body.status);
    if (!submission) return NextResponse.json({ error: "Submission not found." }, { status: 404 });
    return NextResponse.json({ submission });
  } catch (error) {
    console.error("Could not update submission:", error);
    return NextResponse.json({ error: "Database is not configured or unavailable." }, { status: 503 });
  }
}
