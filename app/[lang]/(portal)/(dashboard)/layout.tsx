import { Suspense } from "react";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import Sidebar from "@/app/components/portal/Sidebar";
import { requireUser } from "@/app/lib/auth";
import { getLocale, getT } from "@/app/lib/i18n";

// The dashboard is session-bound: instant-navigation validation renders it signed out, which redirects to /login.
export const instant = false;

export default function DashboardLayout({ children }: LayoutProps<"/[lang]">) {
  // The session is read at request time, so everything user-specific streams in behind this boundary.
  return (
    <Suspense fallback={<div className="dash-loading" aria-busy="true"></div>}>
      <Shell>{children}</Shell>
    </Suspense>
  );
}

async function Shell({ children }: { children: React.ReactNode }) {
  const user = await requireUser();
  const locale = await getLocale();
  const t = await getT();

  return (
    <div className="dash">
      <Sidebar
        locale={locale}
        user={{ name: user.name, email: user.email }}
        labels={{
          menu: t("Menu"),
          overview: t("Overview"),
          assets: t("My assets"),
          activity: t("Recent activity"),
          website: t("Back to website"),
          logout: t("Log out"),
        }}
      />
      <div className="dash-main">
        <header className="dash-top">
          <span className="dash-demo">
            <i className="fa fa-flask" aria-hidden="true"></i> {t("Demo data")}
          </span>
          <LanguageSwitcher locale={locale} />
        </header>
        {children}
      </div>
    </div>
  );
}
