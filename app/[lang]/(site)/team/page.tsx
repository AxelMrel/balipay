import { getT } from "@/app/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t("Team") };
}

export default async function TeamPage() {
  const t = await getT();

  return (
    <>
      <section className="layout_padding theme_color_bg white_fonts ambess_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text_align_center">
              <div className="full">
                <h2>{t("Our team")}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section layout_padding_2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="heading_main text_align_center">
                  <h2>
                    {t("Our Expert")} <span className="theme_color">{t("Team")}</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-12 text_align_center">
              <div className="full">
                <p className="large_2">
                  {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor")} <br />
                  {t("incididunt ut labore et dolore magna aliqua.")}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row margin_top_30">
            <div className="col-md-3">
              <div className="full">
                <div className="team_blog">
                  <div className="team_img">
                    <img className="img-responsive" src="/img/team_member1.png" alt="#" />
                  </div>
                  <div className="team_cont">
                    <h3>{t("Member Name")}</h3>
                    <p>{t("Ceo")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="full">
                <div className="team_blog">
                  <div className="team_img">
                    <img className="img-responsive" src="/img/team_member2.png" alt="#" />
                  </div>
                  <div className="team_cont">
                    <h3>{t("Member Name")}</h3>
                    <p>{t("Chief Technology Officer")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="full">
                <div className="team_blog">
                  <div className="team_img">
                    <img className="img-responsive" src="/img/team_member3.png" alt="#" />
                  </div>
                  <div className="team_cont">
                    <h3>{t("Member Name")}</h3>
                    <p>{t("SVG Product")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="full">
                <div className="team_blog">
                  <div className="team_img">
                    <img className="img-responsive" src="/img/team_member4.png" alt="#" />
                  </div>
                  <div className="team_cont">
                    <h3>{t("Member Name")}</h3>
                    <p>{t("Chief Market Strategist")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="full">
                <div className="team_blog">
                  <div className="team_img">
                    <img className="img-responsive" src="/img/team_member2.png" alt="#" />
                  </div>
                  <div className="team_cont">
                    <h3>{t("Member Name")}</h3>
                    <p>{t("Ceo")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="full">
                <div className="team_blog">
                  <div className="team_img">
                    <img className="img-responsive" src="/img/team_member4.png" alt="#" />
                  </div>
                  <div className="team_cont">
                    <h3>{t("Member Name")}</h3>
                    <p>{t("Chief Technology Officer")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="full">
                <div className="team_blog">
                  <div className="team_img">
                    <img className="img-responsive" src="/img/team_member3.png" alt="#" />
                  </div>
                  <div className="team_cont">
                    <h3>{t("Member Name")}</h3>
                    <p>{t("SVG Product")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="full">
                <div className="team_blog">
                  <div className="team_img">
                    <img className="img-responsive" src="/img/team_member1.png" alt="#" />
                  </div>
                  <div className="team_cont">
                    <h3>{t("Member Name")}</h3>
                    <p>{t("Chief Market Strategist")}</p>
                  </div>
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
