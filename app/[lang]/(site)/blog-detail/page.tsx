import { getT } from "@/app/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t("Blog Detail") };
}

export default async function BlogDetailPage() {
  const t = await getT();

  return (
    <>
      <section className="layout_padding theme_color_bg white_fonts ambess_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text_align_center">
              <div className="full">
                <h2>{t("Blog Details")}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 pull-right">
              <div className="full">
                <div className="blog_section margin_bottom_0">
                  <div className="blog_feature_img">
                    <img className="img-responsive" src="/img/bost1.jpg" alt="#" />
                  </div>
                  <div className="blog_feature_cantant">
                    <p className="blog_head">{t("Blogpost With Image")}</p>
                    <div className="post_info">
                      <ul>
                        <li>
                          <i className="fa fa-user" aria-hidden="true"></i> {t("Marketing")}{" "}
                        </li>
                        <li>
                          <i className="fa fa-comment" aria-hidden="true"></i> 5
                        </li>
                        <li>
                          <i className="fa fa-calendar" aria-hidden="true"></i> {t("12 Aug 2017")}{" "}
                        </li>
                      </ul>
                    </div>
                    <p>
                      {t(
                        "Consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae laboriosam sunt hic perspiciatis, asperiores mollitia excepturi voluptatibus sequi nostrum ipsam veniam omnis nihil! A ea maiores corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      )}{" "}
                    </p>
                  </div>
                  <div className="full testimonial_simple_say margin_bottom_30_all" style={{ marginTop: "0" }}>
                    <div className="qoute_testimonial">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p className="margin_bottom_0">
                      <i>
                        {t(
                          "Adipisicing elit lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        )}{" "}
                      </i>
                    </p>
                    <p className="large_2 theme_color">
                      <strong className="weight_600">{t("John Barber")}</strong>
                    </p>
                  </div>
                  <div className="view_commant">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                        <div className="full">
                          <img
                            className="img-responsive"
                            style={{ maxWidth: "100px" }}
                            src="/img/client1.jpg"
                            alt="#"
                          />
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-9 col-xs-12">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="full command_cont black_fonts" style={{ background: "#f26d22" }}>
                              <p className="comm_head">
                                {t("Christian Perez")} <span>{t("Sep 27,2017")}</span>
                                <a className="rply" href="#">
                                  {t("Reply")}{" "}
                                </a>
                              </p>
                              <p>
                                {t(
                                  "magine you are 10 years into the future but this time it’s different. Why? Because starting today you actually begin making changes in your life. Specific intentional changes are not easy. They are intentional because these changes are changes that you are choosing and they are the changes that will cause you to live the life you want to live and dream.",
                                )}{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                            <div className="full">
                              <img
                                className="img-responsive"
                                style={{ maxWidth: "100px" }}
                                src="/img/client2.jpg"
                                alt="#"
                              />
                            </div>
                          </div>
                          <div className="col-lg-10 col-md-10 col-sm-9 col-xs-12">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="full command_cont margin_bottom_0" style={{ paddingTop: "0" }}>
                                  <p className="comm_head">
                                    {t("Christian Perez")} <span>{t("Sep 27,2017")}</span>
                                    <a className="rply" href="#">
                                      {t("Reply")}{" "}
                                    </a>
                                  </p>
                                  <p>
                                    {t(
                                      "magine you are 10 years into the future but this time it’s different. Why? Because starting today you actually begin making changes in your life. Specific intentional changes are not easy. They are intentional because these changes are changes.",
                                    )}{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                        <div className="full">
                          <img
                            className="img-responsive"
                            style={{ maxWidth: "100px" }}
                            src="/img/client3.jpg"
                            alt="#"
                          />
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-9 col-xs-12">
                        <div className="full command_cont black_fonts" style={{ background: "#f26d22" }}>
                          <p className="comm_head">
                            {t("Christian Perez")} <span>{t("Sep 27,2017")}</span>
                            <a className="rply" href="#">
                              {t("Reply")}{" "}
                            </a>
                          </p>
                          <p>
                            {t(
                              "magine you are 10 years into the future but this time it’s different. Why? Because starting today you actually begin making changes in your life. Specific intentional changes are not easy. They are intentional because these changes are changes that you are choosing and they are the changes that will cause you to live the life you want to live and dream.",
                            )}{" "}
                          </p>
                        </div>
                        <div className="full">
                          <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                              <div className="full">
                                <img
                                  className="img-responsive"
                                  style={{ maxWidth: "100px" }}
                                  src="/img/client1.jpg"
                                  alt="#"
                                />
                              </div>
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-9 col-xs-12">
                              <div className="full command_cont margin_bottom_0" style={{ paddingTop: "0" }}>
                                <p className="comm_head">
                                  {t("Christian Perez")} <span>{t("Sep 27,2017")}</span>
                                  <a className="rply" href="#">
                                    {t("Reply")}{" "}
                                  </a>
                                </p>
                                <p>
                                  {t(
                                    "magine you are 10 years into the future but this time it’s different. Why? Because starting today you actually begin making changes in your life. Specific intentional changes are not easy. They are intentional because these changes are changes.",
                                  )}{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="full">
                          <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                              <div className="full">
                                <img
                                  className="img-responsive"
                                  style={{ maxWidth: "100px" }}
                                  src="/img/client2.jpg"
                                  alt="#"
                                />
                              </div>
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-9 col-xs-12">
                              <div className="full command_cont margin_bottom_0" style={{ paddingTop: "0" }}>
                                <p className="comm_head">
                                  {t("Christian Perez")} <span>{t("Sep 27,2017")}</span>
                                  <a className="rply" href="#">
                                    {t("Reply")}{" "}
                                  </a>
                                </p>
                                <p>
                                  {t(
                                    "magine you are 10 years into the future but this time it’s different. Why? Because starting today you actually begin making changes in your life. Specific intentional changes are not easy. They are intentional because these changes are changes.",
                                  )}{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post_commt_form">
                    <h4 style={{ marginTop: "0" }}>{t("POST YOUR COMMENT")}</h4>
                    <div className="form_section">
                      <form className="form_contant" action="/">
                        <fieldset>
                          <div className="row">
                            <div className="field col-lg-4 col-md-4 col-sm-6 col-xs-12">
                              <input className="field_custom" placeholder={t("Email")} type="email" />
                            </div>
                            <div className="field col-lg-4 col-md-4 col-sm-6 col-xs-12">
                              <input className="field_custom" placeholder={t("Phone")} type="text" />
                            </div>
                            <div className="field col-lg-4 col-md-4 col-sm-6 col-xs-12">
                              <input className="field_custom" placeholder={t("Password")} type="password" />
                            </div>
                            <div className="field col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <textarea className="field_custom" placeholder={t("Comment")}></textarea>
                            </div>
                            <div className="col-md-12">
                              <div className="center">
                                <a className="read_more_bt" href="#">
                                  {t("SUBMIT NOW")}{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 pull-left">
              <div className="side_bar">
                <div className="side_bar_blog">
                  <h4>{t("SEARCH")}</h4>
                  <div className="side_bar_search">
                    <div className="input-group stylish-input-group">
                      <input className="form-control" placeholder="" type="text" />
                      <span className="input-group-addon">
                        <button type="submit">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="side_bar_blog">
                  <h4>{t("ABOUT AUTHOR")}</h4>
                  <p className="left_text">
                    {t("Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor.")}{" "}
                  </p>
                  <p className="left_text">
                    {t(
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    )}{" "}
                  </p>
                </div>
                <div className="side_bar_blog">
                  <h4>{t("RECENT POST")}</h4>
                  <div className="recent_post">
                    <ul>
                      <li>
                        <p className="post_head left_text">
                          <a href="#">{t("How To Look Up")}</a>
                        </p>
                        <p className="post_date left_text">
                          <i className="fa fa-calendar" aria-hidden="true"></i> {t("Aug 20, 2017")}{" "}
                        </p>
                      </li>
                      <li>
                        <p className="post_head left_text">
                          <a href="#">{t("Compatible Inkjet Cartridge")}</a>
                        </p>
                        <p className="post_date left_text">
                          <i className="fa fa-calendar" aria-hidden="true"></i> {t("Aug 20, 2017")}{" "}
                        </p>
                      </li>
                      <li>
                        <p className="post_head left_text">
                          <a href="#">{t("Treat That Oral Thrush Now")}</a>
                        </p>
                        <p className="post_date left_text">
                          <i className="fa fa-calendar" aria-hidden="true"></i> {t("Aug 20, 2017")}{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="side_bar_blog">
                  <h4>{t("CATEGORIES")}</h4>
                  <div className="categary">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-caret-right"></i> {t("Events")}{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-caret-right"></i> {t("News")}{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-caret-right"></i> {t("Business")}{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-caret-right"></i> {t("Trending Price")}{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-caret-right"></i> {t("Post")}{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="side_bar_blog">
                  <h4>{t("TAG")}</h4>
                  <div className="tags">
                    <ul>
                      <li>
                        <a href="#">{t("Bootstrap")}</a>
                      </li>
                      <li>
                        <a href="#">{t("HTML5")}</a>
                      </li>
                      <li>
                        <a href="#">{t("Wordpress")}</a>
                      </li>
                      <li>
                        <a href="#">{t("Bootstrap")}</a>
                      </li>
                      <li>
                        <a href="#">{t("HTML5")}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="side_bar_blog">
                  <h4>{t("CATEGORIES")}</h4>
                  <div className="categary">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-caret-right"></i> {t("June (12)")}{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-caret-right"></i> {t("January (12)")}{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-caret-right"></i> {t("March (12)")}{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-caret-right"></i> {t("November (12)")}{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-caret-right"></i> {t("December (12)")}{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
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
