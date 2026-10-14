import { getT } from "@/app/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t("About") };
}

export default async function AboutPage() {
  const t = await getT();

  return (
    <>
      <section className="layout_padding theme_color_bg white_fonts ambess_section">
        <div className="container">
          <div className="row">
            <div className="offset-md-1 col-md-10 text_align_center">
              <div className="full">
                <h2>{t("About Currencyzen")}</h2>
              </div>
              <div className="full margin_bottom_30">
                <p className="large_2">
                  <strong>{t("Introduce your community to Currencyzen and get paid for it!")}</strong>
                </p>
              </div>
              <div className="full">
                <p className="large_2">
                  {t(
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam earum, provident ad, porro aperiam dolore, blanditiis, nihil pariatur eius adipisci consequuntur officiis. Excepturi, nostrum? Id incidunt nesciunt officia hic distinctio nihil pariatur eius adipisci consequuntur officiis.",
                  )}{" "}
                </p>
                <p className="large_2">
                  {t(
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde omnis iste natus error sit.",
                  )}{" "}
                </p>
              </div>
              <div className="full margin_top_30 margin_bottom_20">
                <p className="center">
                  <a className="signup_bt read_more_bt" href="#">
                    {t("Sign up")}{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <h3 className="heading_2">
                    <span className="theme_color bold_text">{t("Simple guide to")} </span>
                    {t("buy Cryptocurrencies")}{" "}
                  </h3>
                </div>
                <div className="full margin_top_20">
                  <p className="large">
                    {t(
                      "Cras vitae turpis lacinia, lacinia lacus non, fermentum nisi. Donec et sollicitudin est, in euismod erat. Ut at erat et arcu pulvinar cursus a eget nisl.",
                    )}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <ul className="link_st">
                    <li>
                      <a href="#">{t("Create Account")}</a>
                    </li>
                    <li>
                      <a href="#">{t("Deposit Fiat Money")}</a>
                    </li>
                    <li>
                      <a href="#">{t("Buy Cryptocurrencies")}</a>
                    </li>
                    <li>
                      <a href="#">{t("Learn About Crypto")}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="full">
                  <h4>{t("WHO WE ARE")}</h4>
                </div>
                <div className="full">
                  <ul className="bunty_list">
                    <li>{t("You must join our official website Currencyzen")}</li>
                    <li>
                      {t(
                        "Magni dolores eos qui ratione voluptatem sequi dolores eos qui ratione voldolores eos qui ratione volnesciunt.",
                      )}{" "}
                    </li>
                    <li>
                      {t(
                        "Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing.",
                      )}{" "}
                    </li>
                    <li>
                      {t(
                        "Magni dolores eos qui ratione voluptatem sequi dolores eos qui ratione voldolores eos qui ratione volnesciunt.",
                      )}{" "}
                    </li>
                    <li>
                      {t(
                        "Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing.",
                      )}{" "}
                    </li>
                    <li>{t("xcepteur sint occaecat cupidatat non proident")}</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="full">
                  <img className="img-responsive" src="/img/about.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <p className="large_2" style={{ color: "#666" }}>
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

      <section>
        <div className="layout_padding light_silver_2">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <h3 className="heading_2">
                    <span className="theme_color bold_text">{t("The begginer’s")} </span>
                    {t("guide to Crypto")}{" "}
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <ul className="link_st">
                    <li>
                      <a href="#">{t("Create Account")}</a>
                    </li>
                    <li>
                      <a href="#">{t("Deposit Fiat Money")}</a>
                    </li>
                    <li>
                      <a href="#">{t("Buy Cryptocurrencies")}</a>
                    </li>
                    <li>
                      <a href="#">{t("Learn About Crypto")}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="full">
                  <h4>{t("OUR MISSION")}</h4>
                </div>
                <div className="full">
                  <ul className="bunty_list">
                    <li>{t("You must join our official website Currencyzen")}</li>
                    <li>
                      {t(
                        "Magni dolores eos qui ratione voluptatem sequi dolores eos qui ratione voldolores eos qui ratione volnesciunt.",
                      )}{" "}
                    </li>
                    <li>
                      {t(
                        "Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing.",
                      )}{" "}
                    </li>
                    <li>
                      {t(
                        "Magni dolores eos qui ratione voluptatem sequi dolores eos qui ratione voldolores eos qui ratione volnesciunt.",
                      )}{" "}
                    </li>
                    <li>
                      {t(
                        "Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing.",
                      )}{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="full margin_top_30">
                  <img className="img-responsive" src="/img/coins.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
