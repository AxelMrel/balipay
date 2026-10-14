import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import BootstrapScripts from "@/app/components/BootstrapScripts";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { getLocale } from "@/app/lib/i18n";
import { locales } from "@/app/lib/locales";

export const metadata: Metadata = {
  title: { default: "BarilPay", template: "%s | BarilPay" },
  description: "BarilPay",
  icons: { icon: "/img/fevicon.png" },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const stylesheets = [
  "/css/bootstrap.min.css",
  "/css/style.css",
  "/css/responsive.css",
  "/css/custom.css",
  "/css/animate.css",
  "/css/modern.css",
];

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={poppins.variable}>
      <head>
        {stylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} precedence="default" />
        ))}
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <BootstrapScripts />
      </body>
    </html>
  );
}
