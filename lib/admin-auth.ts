import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "vikas_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET;
}

export function getAdminEmail() {
  return process.env.ADMIN_EMAIL ?? "suranivikas@gmail.com";
}

function sign(value: string) {
  const secret = getSecret();
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not configured.");
  return createHmac("sha256", secret).update(value).digest("hex");
}

export function createSession(email: string) {
  const payload = `${email}:${Date.now() + SESSION_MAX_AGE * 1000}`;
  return `${payload}.${sign(payload)}`;
}

export function isValidSession(token: string | undefined) {
  if (!token) return false;
  if (!getSecret()) return false;
  const separator = token.lastIndexOf(".");
  if (separator < 1) return false;
  const payload = token.slice(0, separator);
  const signature = token.slice(separator + 1);
  const expected = sign(payload);
  if (signature.length !== expected.length) return false;
  if (!timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return false;
  const [email, expiresAt] = payload.split(":");
  return email === getAdminEmail() && Number(expiresAt) > Date.now();
}

export async function isAdmin() {
  return isValidSession((await cookies()).get(COOKIE_NAME)?.value);
}

export { COOKIE_NAME, SESSION_MAX_AGE };
