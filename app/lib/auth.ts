import "server-only";
import { redirect } from "next/navigation";
import { cache } from "react";
import { getLocale } from "./i18n";
import { localizedPath } from "./locales";
import { readSession } from "./session";
import { findUserById } from "./users";

// Data Access Layer: every protected read goes through here and re-verifies the session.
export const requireUser = cache(async () => {
  const session = await readSession();
  const user = session ? await findUserById(session.userId) : null;
  if (!user) redirect(localizedPath(await getLocale(), "/login"));
  return user;
});
