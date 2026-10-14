import { getT } from "@/app/lib/i18n";
import LogoTicker from "@/app/components/LogoTicker";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t("Services") };
}

const tickerLogos = [
  "/img/ci2.png",
  "/img/ci3.png",
  "/img/ci4.png",
  "/img/ci5.png",
  "/img/ci6.png",
  "/img/ci7.png",
  "/img/ci8.png",
  "/img/ci9.png",
  "/img/ci10.png",
  "/img/ci11.png",
  "/img/ci12.png",
  "/img/ci13.png",
  "/img/ci15.png",
  "/img/ci16.png",
  "/img/ci17.png",
  "/img/ci18.png",
  "/img/ci19.png",
  "/img/ci20.png",
  "/img/ci21.png",
  "/img/ci22.png",
  "/img/ci23.png",
  "/img/ci24.png",
  "/img/ci25.png",
  "/img/ci26.png",
  "/img/ci27.png",
  "/img/ci28.png",
  "/img/ci29.png",
  "/img/ci30.png",
];

export default async function ServicesPage() {
  const t = await getT();

  return (
    <>
      <section className="layout_padding theme_color_bg white_fonts ambess_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text_align_center">
              <div className="full">
                <h2>{t("Currencyzen Services")}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="running_stock">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <LogoTicker images={tickerLogos} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="layout_padding map_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="heading_main text_align_center">
                  <h2>
                    {t("Get")} <span className="theme_color">{t("Started")}</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-12 text_align_center">
              <div className="full">
                <p className="large_2">
                  {t("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium")} <br />
                  {t("doloremque laudantium, totam rem aperiam, eaque ipsa quae..")}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="full icons text_align_center">
                <img src="/img/icon1_.png" width="75" alt="#" />
              </div>
              <div className="full text_align_center">
                <h4>{t("BETTER THAN A CREDIT CARD")}</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="full icons text_align_center">
                <img src="/img/icon3_.png" width="75" alt="#" />
              </div>
              <div className="full text_align_center">
                <h4>{t("SAFE & SECURE")}</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="full icons text_align_center">
                <img src="/img/icon2_.png" width="75" alt="#" />
              </div>
              <div className="full text_align_center">
                <h4>{t("MOBILE APP")}</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="full icons text_align_center">
                <img src="/img/icon4_.png" width="75" alt="#" />
              </div>
              <div className="full text_align_center">
                <h4>{t("BETTER THAN CASH")}</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="full icons text_align_center">
                <img src="/img/icon5_.png" width="75" alt="#" />
              </div>
              <div className="full text_align_center">
                <h4>{t("INSTANT EXCHANGE")}</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="full icons text_align_center">
                <img src="/img/icon6_.png" width="75" alt="#" />
              </div>
              <div className="full text_align_center">
                <h4>{t("FASTER SETTLEMENT")}</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="full icons text_align_center">
                <img src="/img/f2.png" width="75" alt="#" />
              </div>
              <div className="full text_align_center">
                <h4>{t("Fast Transaction")}</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="full icons text_align_center">
                <img src="/img/f3.png" width="75" alt="#" />
              </div>
              <div className="full text_align_center">
                <h4>{t("24/7 Trading")}</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="full icons text_align_center">
                <img src="/img/f1.png" width="75" alt="#" />
              </div>
              <div className="full text_align_center">
                <h4>{t("Free Consulting")}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="layout_padding dark_bg_theme dark_layer_2">
        <div className="container">
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-7">
              <div className="full margin_bottom_20">
                <div className="center">
                  <h3>{t("Looking for a First-Class Cryptocurrency Expert ?")}</h3>
                </div>
              </div>
              <div className="full opacity_5">
                <div className="center">
                  <p className="large_2">
                    {t(
                      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                    )}{" "}
                    <br />
                    <br />
                    {t(
                      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi",
                    )}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="heading_main text_align_center">
                  <h2>
                    {t("Currencyzen")} <span className="theme_color">{t("for Good")}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text_align_center">
              <div className="full">
                <p className="large_2 opacity_7">
                  {t("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium")} <br />
                  {t("doloremque laudantium, totam rem..")}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="full">
                <ul className="brand-list">
                  <li>
                    <img src="/img/brand1.png" alt="#" />
                  </li>
                  <li>
                    <img src="/img/brand2.png" alt="#" />
                  </li>
                  <li>
                    <img src="/img/brand3.png" alt="#" />
                  </li>
                  <li>
                    <img src="/img/brand4.png" alt="#" />
                  </li>
                  <li>
                    <img src="/img/brand5.png" alt="#" />
                  </li>
                  <li>
                    <img src="/img/brand6.png" alt="#" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 text_align_center">
              <div className="full">
                <p className="center">
                  <a className="read_more_bt" href="#">
                    {t("Read More")}{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
