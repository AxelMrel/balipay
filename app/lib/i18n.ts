import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { hasLocale, type Locale } from "./locales";
import { translations } from "./translations";

export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!hasLocale(value)) notFound();
  return value;
}

export type Translate = (text: string) => string;

// English source text is the key; a missing translation falls back to the English text.
export function translator(locale: Locale): Translate {
  if (locale === "en") return (text) => text;
  return (text) => translations[text]?.[locale] ?? text;
}

export async function getT(): Promise<Translate> {
  return translator(await getLocale());
}
