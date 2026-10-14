import type { Metadata } from "next";
import { AuthSwitch, LoginForm } from "@/app/components/portal/AuthForms";
import { authCopy } from "@/app/lib/auth-copy";
import { getLocale, getT } from "@/app/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t("Sign in") };
}

export default async function LoginPage() {
  const locale = await getLocale();
  const t = await getT();

  return (
    <>
      <h1>{t("Welcome back")}</h1>
      <p className="auth-sub">{t("Sign in to access your wallet and dashboard.")}</p>
      <LoginForm locale={locale} copy={authCopy(t)} />
      <AuthSwitch locale={locale} text={t("New to BarilPay?")} label={t("Create an account")} href="/register" />
    </>
  );
}
