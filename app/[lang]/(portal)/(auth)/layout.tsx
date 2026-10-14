import Link from "next/link";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { getLocale, getT } from "@/app/lib/i18n";
import { localizedPath } from "@/app/lib/locales";

export default async function AuthLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();
  const t = await getT();

  const perks = [
    { icon: "fa-bolt", text: t("Instant exchange at the best rates") },
    { icon: "fa-shield", text: t("Bank-grade security for your assets") },
    { icon: "fa-line-chart", text: t("Track your whole portfolio in real time") },
  ];

  return (
    <main className="auth">
      <aside className="auth-hero">
        <div className="auth-orb auth-orb-1"></div>
        <div className="auth-orb auth-orb-2"></div>
        <Link href={localizedPath(locale, "/")} className="auth-logo">
          <img src="/img/logo.png" alt="BarilPay" />
        </Link>
        <div className="auth-hero-body">
          <h2>{t("The smarter way to hold, send and grow your crypto.")}</h2>
          <ul>
            {perks.map((perk) => (
              <li key={perk.icon}>
                <i className={`fa ${perk.icon}`} aria-hidden="true"></i>
                <span>{perk.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="auth-quote">
          <p>{t("“Sending money across borders used to take days. With BarilPay it takes seconds.”")}</p>
          <small>— {t("A BarilPay customer")}</small>
        </div>
      </aside>
      <section className="auth-panel">
        <div className="auth-top">
          <Link href={localizedPath(locale, "/")} className="auth-back">
            <i className="fa fa-arrow-left" aria-hidden="true"></i> {t("Back to website")}
          </Link>
          <LanguageSwitcher locale={locale} />
        </div>
        <div className="auth-card">{children}</div>
      </section>
    </main>
  );
}
