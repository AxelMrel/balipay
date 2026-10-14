import { getT } from "@/app/lib/i18n";
import type { Metadata } from "next";
import CoinCalculator from "@/app/components/CoinCalculator";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t("Digital Asset Exchanges") };
}

export default async function DigitalAssetExchangesPage() {
  const t = await getT();

  return (
    <>
      <section className="layout_padding theme_color_bg white_fonts ambess_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text_align_center">
              <div className="full">
                <h2>{t("Digital Asset Exchanges")}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="layout_padding information_part1 margin_top_10">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text_align_center margin_bottom_50">
              <div className="full">
                <div className="heading_main">
                  <h3>{t("Attract Global Payments Volume")}</h3>
                </div>
              </div>
              <div className="full">
                <p className="margin_top_10 large_2">
                  {t(
                    "Built for enterprise use, BID offers banks and payment providers a reliable way to source liquidity for payments.",
                  )}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="full feature_b1 text_align_center padding-bottom_0">
                <div className="icon full">
                  <img src="/images/icon14.png" alt="#" />
                </div>
                <div className="full">
                  <h4>{t("New Volume")}</h4>
                </div>
                <div className="full">
                  <p>
                    {t(
                      "BID’s role as a digital asset for global payments enables exchanges to access new volume and liquidity.",
                    )}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="full feature_b1 text_align_center padding-bottom_0">
                <div className="icon full">
                  <img src="/images/icon15.png" alt="#" />
                </div>
                <div className="full">
                  <h4>{t("Reliable Volume")}</h4>
                </div>
                <div className="full">
                  <p>
                    {t(
                      "Payment flows through BID provide stable volume for exchanges and the associated market participants.",
                    )}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="full feature_b1 text_align_center padding-bottom_0">
                <div className="icon full">
                  <img src="/images/icon16.png" alt="#" />
                </div>
                <div className="full">
                  <h4>{t("Faster Settlement")}</h4>
                </div>
                <div className="full">
                  <p>
                    {t(
                      "BID settles over 500x faster than bitcoin and any other digital asset, which allows for near instant inter-exchange transfers.",
                    )}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="layout_padding step_section" style={{ borderTop: "solid #eee 2px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="heading_main text_align_center">
                  <h2>
                    {t("Why")} <span className="theme_color">{t("BID")}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="xrp_section">
                  <ul>
                    <li>
                      <span className="chain_blog"></span>
                      <span className="head_xrp">{t("Stable")}</span>
                      <span className="cont_xrp">
                        <p>{t("All 30 million ledgers closed without issue since inception.")}</p>
                      </span>
                    </li>
                    <li>
                      <span className="chain_blog"></span>
                      <span className="head_xrp">{t("Scalable")}</span>
                      <span className="cont_xrp">
                        <p>{t("Throughput capacity over 50,000 transactions/second.")}</p>
                      </span>
                    </li>
                    <li>
                      <span className="chain_blog"></span>
                      <span className="head_xrp">{t("Institutional")}</span>
                      <span className="cont_xrp">
                        <p>{t("Use case designed for the enterprise.")}</p>
                      </span>
                    </li>
                    <li>
                      <span className="chain_blog"></span>
                      <span className="head_xrp">{t("Preferred")}</span>
                      <span className="cont_xrp">
                        <p>{t("Technical superiority and scalability as a settlement asset.")}</p>
                      </span>
                    </li>
                    <li>
                      <span className="chain_blog"></span>
                      <span className="head_xrp">{t("Robust")}</span>
                      <span className="cont_xrp">
                        <p>{t("Open-source code base and a team of full-time engineers.")}</p>
                      </span>
                    </li>
                    <li>
                      <span className="chain_blog"></span>
                      <span className="head_xrp">{t("Decentralized")}</span>
                      <span className="cont_xrp">
                        <p>{t("Over 55 global validators and growing.")}</p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="full margin_top_30">
                <p className="center">
                  <a className="read_more_bt" href="#">
                    {t("Read More About BID")}{" "}
                  </a>
                </p>
              </div>
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
                    {t("Cryptocurrency")} <span className="theme_color">{t("Exchanges")}</span>
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

      <section className="layout_padding light_silver_2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="heading_main text_align_center">
                  <h2>
                    {t("Integration")} <span className="theme_color">{t("Options")}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text_align_center">
              <div className="feature_b9">
                <div className="feature_b9_inner">
                  <div className="full text_align_center margin_bottom_20">
                    <img className="margin_bottom_10" width="250" src="/images/opp1.png" alt="#" />
                  </div>
                  <div className="full">
                    <p>{t("Exchanges can easily integrate into the BID Ledger using APIs from Currencyzen")}</p>
                  </div>
                  <div className="full">
                    <h3>{t("Key Features")}</h3>
                  </div>
                  <div className="full">
                    <p>
                      {t("Multi-sign wallet support")} <br />
                      {t("Instant settlement")} <br />
                      {t("Key server management")}{" "}
                    </p>
                  </div>
                  <div className="full margin_top_10">
                    <p className="center">
                      <a className="read_more_bt" href="#">
                        {t("About Currencyzen")}{" "}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 text_align_center">
              <div className="feature_b9_inner">
                <div className="full text_align_center margin_bottom_20">
                  <img className="margin_bottom_10" width="250" src="/images/opp2.png" alt="#" />
                </div>
                <div className="full">
                  <p>{t("Exchanges can easily integrate into the BID Ledger using APIs from Currencyzen")}</p>
                </div>
                <div className="full">
                  <h3>{t("Key Features")}</h3>
                </div>
                <div className="full">
                  <p>
                    {t("Multi-sign wallet support")} <br />
                    {t("Instant settlement")} <br />
                    {t("No cost to use")}{" "}
                  </p>
                </div>
                <div className="full margin_top_10">
                  <p className="center">
                    <a className="read_more_bt" href="#">
                      {t("About Currencyzen")}{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding" style={{ borderTop: "solid #eee 2px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="heading_main text_align_center">
                  <h2>
                    {t("Case")} <span className="theme_color">{t("Studies")}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row text_align_center">
            <div className="offset-md-2 col-md-8">
              <div className="case_study">
                <div className="full margin_bottom_20">
                  <img className="img-responsive" src="/img/bost1.jpg" alt="#" />
                </div>
                <div className="case_study_cont full">
                  <div className="full">
                    <div className="center">
                      <h5>{t("Cashstudy heading With Image")}</h5>
                    </div>
                  </div>
                  <div className="full">
                    <p className="large_2">
                      {t(
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae laboriosam sunt hic perspiciatis, asperiores mollitia excepturi voluptatibus sequi nostrum ipsam veniam omnis nihil! A ea maiores corporis.",
                      )}{" "}
                    </p>
                  </div>
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
            <div className="offset-md-2 col-md-8">
              <div className="case_study">
                <div className="full margin_bottom_20">
                  <img className="img-responsive" src="/img/bost2.jpg" alt="#" />
                </div>
                <div className="case_study_cont full">
                  <div className="full">
                    <div className="center">
                      <h5>{t("Cashstudy heading With Image")}</h5>
                    </div>
                  </div>
                  <div className="full">
                    <p className="large_2">
                      {t(
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae laboriosam sunt hic perspiciatis, asperiores mollitia excepturi voluptatibus sequi nostrum ipsam veniam omnis nihil! A ea maiores corporis.",
                      )}{" "}
                    </p>
                  </div>
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
          </div>
        </div>
      </section>
    </>
  );
}
