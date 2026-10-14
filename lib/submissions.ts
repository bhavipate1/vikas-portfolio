import { Pool } from "pg";
import { randomUUID } from "node:crypto";

export type SubmissionInput = {
  topic: string;
  name: string;
  email: string;
  organisation: string;
  date: string;
  message: string;
};

export type Submission = SubmissionInput & {
  id: string;
  status: "new" | "contacted" | "closed";
  createdAt: string;
};

let pool: Pool | undefined;
let schemaReady: Promise<void> | undefined;

function getPool() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not configured.");
  pool ??= new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  return pool;
}

async function ensureSchema() {
  if (!schemaReady) {
    schemaReady = getPool()
      .query(`
        CREATE TABLE IF NOT EXISTS submissions (
          id TEXT PRIMARY KEY,
          topic TEXT NOT NULL,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          organisation TEXT NOT NULL DEFAULT '',
          requested_date TEXT NOT NULL DEFAULT '',
          message TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `)
      .then(() => undefined);
  }
  return schemaReady;
}

export async function createSubmission(input: SubmissionInput) {
  await ensureSchema();
  const result = await getPool().query<Submission>(
    `INSERT INTO submissions (id, topic, name, email, organisation, requested_date, message)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING id, topic, name, email, organisation, requested_date AS "date", message,
       status, created_at AS "createdAt"`,
    [randomUUID(), input.topic, input.name, input.email, input.organisation, input.date, input.message],
  );
  return result.rows[0];
}

export async function listSubmissions() {
  await ensureSchema();
  const result = await getPool().query<Submission>(
    `SELECT id, topic, name, email, organisation, requested_date AS "date", message,
      status, created_at AS "createdAt"
     FROM submissions ORDER BY created_at DESC`,
  );
  return result.rows;
}

export async function updateSubmissionStatus(id: string, status: Submission["status"]) {
  await ensureSchema();
  const result = await getPool().query<Submission>(
    `UPDATE submissions SET status = $1
     WHERE id = $2
     RETURNING id, topic, name, email, organisation, requested_date AS "date", message,
       status, created_at AS "createdAt"`,
    [status, id],
  );
  return result.rows[0] ?? null;
}
