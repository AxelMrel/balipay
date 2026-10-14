import { getT } from "@/app/lib/i18n";
import type { Metadata } from "next";
import Link from "@/app/components/LocalLink";
import CoinCalculator from "@/app/components/CoinCalculator";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t("Coins") };
}

export default async function CoinsPage() {
  const t = await getT();

  return (
    <>
      <section className="layout_padding theme_color_bg white_fonts ambess_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text_align_center">
              <div className="full">
                <h2>{t("Coins")}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding_2 coin_parches_info map_bg" style={{ background: "#f2f2f2" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-4 col-xs-12">
              <div className="center">
                <img className="img-responsive" src="/img/bit_coinpar.png" alt="#" />
              </div>
            </div>
            <div className="col-md-7 col-sm-8 col-xs-12">
              <h3 className="coin_name_parchase">{t("Bitcoin")}</h3>
              <p className="left_text margin_bottom_0">
                {t(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                )}{" "}
              </p>
              <Link className="read_more_bt" href="/market-data">
                {t("Buy Now")}{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding_2 coin_parches_info map_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-4 col-xs-12 pull-right">
              <div className="center">
                <img className="img-responsive" src="/img/ether_coinpar.png" alt="#" />
              </div>
            </div>
            <div className="col-md-7 col-sm-8 col-xs-12 pull-left">
              <h3 className="coin_name_parchase">{t("Ethereum Coin")}</h3>
              <p className="left_text margin_bottom_0">
                {t(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                )}{" "}
              </p>
              <Link className="read_more_bt" href="/market-data">
                {t("Buy Now")}{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding_2 coin_parches_info" style={{ background: "#f2f2f2" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-4 col-xs-12">
              <div className="center">
                <img className="img-responsive" src="/img/ripple_coinpar.png" alt="#" />
              </div>
            </div>
            <div className="col-md-7 col-sm-8 col-xs-12">
              <h3 className="coin_name_parchase">{t("Ripple Coin")}</h3>
              <p className="left_text margin_bottom_0">
                {t(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                )}{" "}
              </p>
              <Link className="read_more_bt" href="/market-data">
                {t("Buy Now")}{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding_2 coin_parches_info map_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-4 col-xs-12 pull-right">
              <div className="center">
                <img className="img-responsive" src="/img/light_coinpar.png" alt="#" />
              </div>
            </div>
            <div className="col-md-7 col-sm-8 col-xs-12 pull-left">
              <h3 className="coin_name_parchase">{t("Light Coin")}</h3>
              <p className="left_text margin_bottom_0">
                {t(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                )}{" "}
              </p>
              <Link className="read_more_bt" href="/market-data">
                {t("Buy Now")}{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </div>
    </>
  );
}
