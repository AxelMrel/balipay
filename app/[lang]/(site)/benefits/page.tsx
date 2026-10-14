import { getT } from "@/app/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t("Benefits") };
}

export default async function BenefitsPage() {
  const t = await getT();

  return (
    <>
      <section className="layout_padding theme_color_bg white_fonts ambess_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text_align_center">
              <div className="full">
                <h2>{t("Benefits")}</h2>
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
                  <h3>{t("More Customers, Greater Volume")}</h3>
                </div>
              </div>
              <div className="full">
                <p className="margin_top_10 large_2">
                  {t(
                    "Provide customers with faster, more transparent and predictable payment services to many corners of the world.",
                  )}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="full feature_b1 text_align_center">
                <div className="icon full">
                  <img src="/images/icon14.png" alt="#" />
                </div>
                <div className="full">
                  <h4>{t("New Volume")}</h4>
                </div>
                <div className="full">
                  <p>
                    {t(
                      "BID role as a digital asset for global payments enables exchanges to access new volume and liquidity.",
                    )}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="full feature_b1 text_align_center">
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
              <div className="full feature_b1 text_align_center">
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

      <section className="layout_padding light_silver_2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="heading_main text_align_center">
                  <h2>{t("Opportunities")}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row text_align_center">
            <div className="col-md-4">
              <div className="feature_b5">
                <div className="full margin_bottom_20">
                  <img src="/images/opp1.png" alt="#" />
                </div>
                <div className="full">
                  <div className="center">
                    <h5>{t("PAYMENT DELIVERY")}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature_b5">
                <div className="full margin_bottom_20">
                  <img src="/images/opp2.png" alt="#" />
                </div>
                <div className="full">
                  <div className="center">
                    <h5>{t("NEW Offers")}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature_b5">
                <div className="full margin_bottom_20">
                  <img src="/images/opp1.png" alt="#" />
                </div>
                <div className="full">
                  <div className="center">
                    <h5>{t("Secure and Stable")}</h5>
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
