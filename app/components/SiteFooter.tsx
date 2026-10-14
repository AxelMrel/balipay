import { getT } from "../lib/i18n";
import LocalLink from "./LocalLink";

const socials = ["facebook", "twitter", "dribbble", "behance", "instagram"];

const columns = [
  {
    title: "ABOUT US",
    links: [
      { label: "Our Coin", href: "/coins" },
      { label: "About", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Our Projects", href: "/services" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "How to Buy Coin", href: "/market-data" },
      { label: "Coin Overview", href: "/market-data" },
      { label: "Blog News", href: "/blog" },
      { label: "How to Sell Coin", href: "/market-data" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { label: "How to Buy Coin", href: "/market-data" },
      { label: "Coin Overview", href: "/market-data" },
      { label: "Blog News", href: "/blog" },
      { label: "How to Sell Coin", href: "/market-data" },
    ],
  },
];

export default async function SiteFooter() {
  const t = await getT();

  return (
    <>
      <div className="section layout_padding_2 theme_color_bg subcribe">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>{t("Subscribe to Our Newsletter")}</h3>
            </div>
            <div className="col-md-6">
              <div className="form_news">
                <form>
                  <fieldset>
                    <div className="field">
                      <input type="email" placeholder={t("Enter your email address")} name="email" />
                      <button>{t("Subscribe")}</button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="layout_padding_2">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="full">
                <div className="footer_logo">
                  <img className="img-responsive" src="/img/logo.png" alt="BarilPay" width="250" />
                </div>
              </div>
              <div className="full">
                <p className="margin_bottom_0">
                  {t(
                    "Investments and employment Blockchain Technologies. Optimize your business blockchain technology and Smart Contracts.",
                  )}
                </p>
              </div>
              <div className="full">
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
            </div>
            <div className="col-md-7 offset-md-1">
              <div className="row">
                {columns.map((col) => (
                  <div className="col-md-4" key={col.title}>
                    <div className="full">
                      <h3 className="footer_heading">{t(col.title)}</h3>
                    </div>
                    <div className="full">
                      <ul className="footer_links">
                        {col.links.map((l) => (
                          <li key={l.label}>
                            <LocalLink href={l.href}>{t(l.label)}</LocalLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottom_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <p>{t("Copyright © 2026 BarilPay. All Rights Reserved.")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
