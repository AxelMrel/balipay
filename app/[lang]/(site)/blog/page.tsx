import { getT } from "@/app/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t("Blog") };
}

export default async function BlogPage() {
  const t = await getT();

  return (
    <>
      <section className="layout_padding theme_color_bg white_fonts ambess_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text_align_center">
              <div className="full">
                <h2>{t("Blog")}</h2>
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
                <div className="blog_section">
                  <div className="blog_feature_img">
                    <img className="img-responsive" src="/img/bost1.jpg" alt="#" />
                  </div>
                  <div className="blog_feature_cantant light_silver_2">
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
                          <i className="fa fa-calendar" aria-hidden="true"></i> {t("02 July 2021")}{" "}
                        </li>
                      </ul>
                    </div>
                    <p>
                      {t(
                        "Consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae laboriosam sunt hic perspiciatis, asperiores mollitia excepturi voluptatibus sequi nostrum ipsam veniam omnis nihil! A ea maiores corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      )}{" "}
                    </p>
                    <div className="bottom_info">
                      <div className="pull-left">
                        <a className="read_more" href="#">
                          {t("READ MORE")} <i className="fa fa-angle-right"></i>
                        </a>
                      </div>
                      <div className="pull-right">
                        <div className="shr">{t("Share:")} </div>
                        <div className="social_icon">
                          <ul>
                            <li className="fb">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li className="twi">
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li className="gp">
                              <a href="#">
                                <i className="fa fa-google-plus" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li className="pint">
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_section">
                  <div className="blog_feature_img">
                    <img className="img-responsive" src="/img/bost3.jpg" alt="#" />
                  </div>
                  <div className="blog_feature_cantant light_silver_2">
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
                          <i className="fa fa-calendar" aria-hidden="true"></i> {t("02 July 2021")}{" "}
                        </li>
                      </ul>
                    </div>
                    <p>
                      {t(
                        "Consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae laboriosam sunt hic perspiciatis, asperiores mollitia excepturi voluptatibus sequi nostrum ipsam veniam omnis nihil! A ea maiores corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      )}{" "}
                    </p>
                    <div className="bottom_info">
                      <div className="pull-left">
                        <a className="read_more" href="#">
                          {t("READ MORE")} <i className="fa fa-angle-right"></i>
                        </a>
                      </div>
                      <div className="pull-right">
                        <div className="shr">{t("Share:")} </div>
                        <div className="social_icon">
                          <ul>
                            <li className="fb">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li className="twi">
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li className="gp">
                              <a href="#">
                                <i className="fa fa-google-plus" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li className="pint">
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="center">
                  <ul className="pagination style_1">
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
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
