import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { getLocale } from "@/app/lib/i18n";
import { locales } from "@/app/lib/locales";

export const metadata: Metadata = {
  title: { default: "BarilPay", template: "%s | BarilPay" },
  icons: { icon: "/img/fevicon.png" },
  robots: { index: false },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const stylesheets = ["/css/font-awesome.min.css", "/css/app-ui.css"];

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Separate root layout from the marketing site so the template CSS never leaks into the app.
export default async function PortalRootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={poppins.variable}>
      <head>
        {stylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} precedence="default" />
        ))}
      </head>
      <body className="portal">{children}</body>
    </html>
  );
}
