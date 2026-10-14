"use client";

import { usePathname, useRouter } from "next/navigation";
import { localeCookie, localeNames, locales, type Locale } from "@/app/lib/locales";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function change(next: string) {
    document.cookie = `${localeCookie}=${next}; path=/; max-age=31536000; samesite=lax`;
    router.push(pathname.replace(/^\/[^/]+/, `/${next}`));
  }

  return (
    <select value={locale} onChange={(e) => change(e.target.value)} aria-label="Language">
      {locales.map((l) => (
        <option key={l} value={l}>
          {localeNames[l]}
        </option>
      ))}
    </select>
  );
}
