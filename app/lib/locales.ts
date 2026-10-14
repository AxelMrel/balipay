// Pure constants, safe to import from the proxy and from Client Components.
export const locales = ["fr", "en", "it", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  it: "Italiano",
  de: "Deutsch",
};

export const localeCookie = "NEXT_LOCALE";

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

export const localizedPath = (locale: Locale, path: string) => `/${locale}${path === "/" ? "" : path}`;
