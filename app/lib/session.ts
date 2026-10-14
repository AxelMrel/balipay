import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { connection } from "next/server";
import { SESSION_COOKIE } from "./session-cookie";

const COOKIE_NAME = SESSION_COOKIE;
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

type Payload = { uid: string; exp: number };

function secret() {
  const value = process.env.SESSION_SECRET;
  if (value) return value;
  if (process.env.NODE_ENV === "production") throw new Error("SESSION_SECRET must be set in production");
  return "dev-only-insecure-session-secret";
}

const sign = (data: string) => createHmac("sha256", secret()).update(data).digest("base64url");

function seal(payload: Payload) {
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${data}.${sign(data)}`;
}

function unseal(token: string): Payload | null {
  const [data, signature] = token.split(".");
  if (!data || !signature) return null;
  const expected = Buffer.from(sign(data));
  const received = Buffer.from(signature);
  if (expected.length !== received.length || !timingSafeEqual(expected, received)) return null;
  try {
    const payload = JSON.parse(Buffer.from(data, "base64url").toString()) as Payload;
    return payload.exp > Date.now() / 1000 ? payload : null;
  } catch {
    return null;
  }
}

export async function createSession(userId: string) {
  const token = seal({ uid: userId, exp: Math.floor(Date.now() / 1000) + MAX_AGE });
  (await cookies()).set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function readSession(): Promise<{ userId: string } | null> {
  // Expiry is checked against the current time, so this must never be prerendered.
  await connection();
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  const payload = token ? unseal(token) : null;
  return payload ? { userId: payload.uid } : null;
}

export async function destroySession() {
  (await cookies()).delete(COOKIE_NAME);
}
