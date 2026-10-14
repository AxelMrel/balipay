import type { Metadata } from "next";
import { AuthSwitch, RegisterForm } from "@/app/components/portal/AuthForms";
import { authCopy } from "@/app/lib/auth-copy";
import { getLocale, getT } from "@/app/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t("Create an account") };
}

export default async function RegisterPage() {
  const locale = await getLocale();
  const t = await getT();

  return (
    <>
      <h1>{t("Create your account")}</h1>
      <p className="auth-sub">{t("Start in a minute — no card required.")}</p>
      <RegisterForm locale={locale} copy={authCopy(t)} />
      <AuthSwitch locale={locale} text={t("Already have an account?")} label={t("Sign in")} href="/login" />
    </>
  );
}
