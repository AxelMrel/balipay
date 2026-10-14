import { getT } from "@/app/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t("Contact") };
}

export default async function ContactPage() {
  const t = await getT();

  return (
    <>
      <section className="layout_padding theme_color_bg white_fonts ambess_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text_align_center">
              <div className="full">
                <h2>{t("Contact")}</h2>
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
                    <span>{t("GET IN TOUCH")}</span>
                  </h2>
                  <p>{t("We Provide High Quality Services")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row margin_top_30">
            <div className="col-md-4">
              <div className="contact_information">
                <div className="row">
                  <div className="col-md-12 col-xs-12 adress_cont">
                    <div className="information_bottom text_align_center">
                      <div className="icon_bottom">
                        <i className="fa fa-road" aria-hidden="true"></i>
                      </div>
                      <div className="info_cont">
                        <h4>{t("427 Schoen Circles Suite 124")}</h4>
                        <p>{t("Melbourne Australia")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-xs-12 adress_cont">
                    <div className="information_bottom text_align_center">
                      <div className="icon_bottom">
                        <i className="fa fa-user" aria-hidden="true"></i>
                      </div>
                      <div className="info_cont">
                        <h4>0011 234 56789</h4>
                        <p>{t("Mon-Fri 8:30am-6:30pm")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-xs-12 adress_cont">
                    <div className="information_bottom text_align_center">
                      <div className="icon_bottom">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </div>
                      <div className="info_cont">
                        <h4>{t("Demo@gmail.com")}</h4>
                        <p>{t("24/7 online support")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact_form">
                <div className="form_section">
                  <form className="form_contant" action="/">
                    <fieldset className="row">
                      <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input className="field_custom" placeholder={t("Websire URL")} type="text" />
                      </div>
                      <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input className="field_custom" placeholder={t("Your name")} type="text" />
                      </div>
                      <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input className="field_custom" placeholder={t("Email adress")} type="email" />
                      </div>
                      <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input className="field_custom" placeholder={t("Phone number")} type="text" />
                      </div>
                      <div className="field col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <textarea className="field_custom" placeholder={t("Messager")}></textarea>
                      </div>
                      <div className="center">
                        <a className="read_more_bt" href="#">
                          {t("SUBMIT NOW")}{" "}
                        </a>
                      </div>
                    </fieldset>
                  </form>
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
    </>
  );
}
