import { getLocale, getT } from "../lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import LocalLink from "./LocalLink";
import MainMenu, { type MenuItem } from "./MainMenu";

const socials = ["facebook", "instagram", "twitter", "youtube-play", "linkedin"];

const rates = [
  { symbol: "BTC", price: "$ 54,220.9", change: "7.76%" },
  { symbol: "ETH", price: "$ 1,836.5", change: "8.05%" },
  { symbol: "LTC", price: "$ 199.80", change: "5.14%" },
];

export default async function SiteHeader() {
  const locale = await getLocale();
  const t = await getT();

  const menu: MenuItem[] = [
    { label: t("Home"), href: "/" },
    { label: t("About"), href: "/about" },
    { label: t("Services"), href: "/services" },
    {
      label: t("Pages"),
      href: "#",
      children: [
        { label: "- " + t("Team"), href: "/team" },
        { label: "- " + t("Wallets"), href: "/wallets" },
        { label: "- " + t("Overview"), href: "/overview" },
        { label: "- " + t("Benefits"), href: "/benefits" },
        { label: "- " + t("Digital Asset Exchanges"), href: "/digital-asset-exchanges" },
        { label: "- " + t("Testimonials"), href: "/testimonials" },
        { label: "- " + t("Crypto Market"), href: "/market-data" },
      ],
    },
    {
      label: t("Blog"),
      href: "/blog",
      children: [
        { label: "- " + t("Blog list"), href: "/blog-list" },
        { label: "- " + t("Blog grid"), href: "/blog-grid" },
        { label: "- " + t("Blog details"), href: "/blog-detail" },
      ],
    },
    { label: t("Contact"), href: "/contact" },
  ];

  return (
    <>
      <header className="header">
        <div className="header_top">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <ul className="social_icon">
                  {socials.map((s) => (
                    <li key={s}>
                      <a href="#">
                        <i className={`fa fa-${s}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <div className="full">
                  <div className="country_blog">
                    <span>{t("Country language")}</span>
                    <span>
                      <LanguageSwitcher locale={locale} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-3 left_logo_design">
                <div className="full">
                  <div className="logo">
                    <LocalLink href="/">
                      <img className="img-responsive" src="/img/logo.png" alt="BarilPay" />
                    </LocalLink>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="full">
                  <ul className="crypto_update">
                    {rates.map((r) => (
                      <li key={r.symbol}>
                        <span className="head_cy">{r.symbol}</span>
                        <span className="cont_cy">
                          {r.price}{" "}
                          <span className="update green_up">
                            <i className="fa fa-arrow-up"></i> {r.change}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main_menu_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <MainMenu
                  locale={locale}
                  items={menu}
                  cta={{ label: t("Sign up"), href: "/register" }}
                  login={{ label: t("Log in"), href: "/login" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
