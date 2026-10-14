import Link from "next/link";
import type { ComponentProps } from "react";
import { getLocale } from "@/app/lib/i18n";
import { localizedPath } from "@/app/lib/locales";

// <Link> that prefixes internal paths with the current locale.
export default async function LocalLink({ href, ...props }: ComponentProps<typeof Link>) {
  const locale = await getLocale();
  const localized = typeof href === "string" && href.startsWith("/") ? localizedPath(locale, href) : href;
  return <Link {...props} href={localized} />;
}
