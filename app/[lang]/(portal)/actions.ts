"use server";

import { redirect } from "next/navigation";
import { destroySession, createSession } from "@/app/lib/session";
import { createUser, verifyCredentials } from "@/app/lib/users";
import { defaultLocale, hasLocale, localizedPath, type Locale } from "@/app/lib/locales";

export type ErrorCode =
  | "name_required"
  | "email_invalid"
  | "email_taken"
  | "password_short"
  | "password_weak"
  | "password_mismatch"
  | "terms_required"
  | "invalid_credentials";

export type FormState = {
  errors?: Partial<Record<"name" | "email" | "password" | "confirm" | "terms" | "form", ErrorCode>>;
  values?: { name?: string; email?: string };
} | null;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function localeOf(formData: FormData): Locale {
  const value = String(formData.get("lang") ?? "");
  return hasLocale(value) ? value : defaultLocale;
}

export async function loginAction(_prev: FormState, formData: FormData): Promise<FormState> {
  const locale = localeOf(formData);
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!EMAIL.test(email)) return { errors: { email: "email_invalid" }, values: { email } };

  const user = await verifyCredentials(email, password);
  if (!user) return { errors: { form: "invalid_credentials" }, values: { email } };

  await createSession(user.id);
  redirect(localizedPath(locale, "/dashboard"));
}

export async function registerAction(_prev: FormState, formData: FormData): Promise<FormState> {
  const locale = localeOf(formData);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirm") ?? "");
  const terms = formData.get("terms") === "on";

  const errors: NonNullable<FormState>["errors"] = {};
  if (name.length < 2) errors.name = "name_required";
  if (!EMAIL.test(email)) errors.email = "email_invalid";
  if (password.length < 8) errors.password = "password_short";
  else if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) errors.password = "password_weak";
  if (confirm !== password) errors.confirm = "password_mismatch";
  if (!terms) errors.terms = "terms_required";
  if (Object.keys(errors).length) return { errors, values: { name, email } };

  const user = await createUser({ name, email, password });
  if (!user) return { errors: { email: "email_taken" }, values: { name, email } };

  await createSession(user.id);
  redirect(localizedPath(locale, "/dashboard"));
}

export async function logoutAction(formData: FormData) {
  const locale = localeOf(formData);
  await destroySession();
  redirect(localizedPath(locale, "/login"));
}
