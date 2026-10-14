import { getT } from "@/app/lib/i18n";
import LogoTicker from "@/app/components/LogoTicker";
import type { Metadata } from "next";
import CoinCalculator from "@/app/components/CoinCalculator";
import BtcChart from "@/app/components/BtcChart";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t("Market Data") };
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

export default async function MarketDataPage() {
  const t = await getT();

  return (
    <>
      <section className="layout_padding theme_color_bg white_fonts ambess_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text_align_center">
              <div className="full">
                <h2>{t("Market Data")}</h2>
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
            <div className="col-md-6">
              <BtcChart />
            </div>
            <div className="col-md-6">
              <BtcChart />
            </div>
          </div>
        </div>
      </div>

      <div className="layout_padding video_bg_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="heading_main text_align_center">
                  <h2>
                    {t("Cryptocurrency")} <span className="theme_color">{t("Calculator")}</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="full margin_top_30">
                <CoinCalculator />
              </div>
            </div>
            <div className="col-md-12">
              <div className="full center margin_top_30">
                <a className="signup_bt read_more_bt" href="#">
                  {t("Buy Crypto & Sell Crypto")}{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
