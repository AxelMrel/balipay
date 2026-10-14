import "server-only";
import { randomBytes, randomUUID, scrypt, timingSafeEqual } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

// Demo store: a JSON file on disk. Swap this module for a real database later.
const FILE = path.join(process.cwd(), "data", "users.json");

export type User = { id: string; name: string; email: string; createdAt: string };
type StoredUser = User & { passwordHash: string };

const hash = (password: string, salt: string) =>
  new Promise<Buffer>((resolve, reject) =>
    scrypt(password, salt, 64, (err, key) => (err ? reject(err) : resolve(key))),
  );

async function readAll(): Promise<StoredUser[]> {
  try {
    return JSON.parse(await readFile(FILE, "utf8")) as StoredUser[];
  } catch {
    return [];
  }
}

async function writeAll(users: StoredUser[]) {
  await mkdir(path.dirname(FILE), { recursive: true });
  const tmp = `${FILE}.${process.pid}.tmp`;
  await writeFile(tmp, JSON.stringify(users, null, 2));
  await rename(tmp, FILE);
}

const publicUser = (user: StoredUser): User => ({
  id: user.id,
  name: user.name,
  email: user.email,
  createdAt: user.createdAt,
});

export async function findUserById(id: string) {
  const user = (await readAll()).find((u) => u.id === id);
  return user ? publicUser(user) : null;
}

export async function createUser(input: { name: string; email: string; password: string }) {
  const users = await readAll();
  const email = input.email.toLowerCase();
  if (users.some((u) => u.email === email)) return null;

  const salt = randomBytes(16).toString("hex");
  const key = await hash(input.password, salt);
  const user: StoredUser = {
    id: randomUUID(),
    name: input.name,
    email,
    createdAt: new Date().toISOString(),
    passwordHash: `${salt}:${key.toString("hex")}`,
  };
  await writeAll([...users, user]);
  return publicUser(user);
}

export async function verifyCredentials(emailInput: string, password: string) {
  const email = emailInput.toLowerCase();
  const user = (await readAll()).find((u) => u.email === email);
  // Hash even when the user is unknown so response time doesn't reveal which emails exist.
  const [salt, stored] = (user?.passwordHash ?? `${"0".repeat(32)}:${"0".repeat(128)}`).split(":");
  const key = await hash(password, salt);
  const expected = Buffer.from(stored, "hex");
  const valid = expected.length === key.length && timingSafeEqual(expected, key);
  return user && valid ? publicUser(user) : null;
}
