import { getT } from "@/app/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t("Blog List") };
}

export default async function BlogListPage() {
  const t = await getT();

  return (
    <>
      <section className="layout_padding theme_color_bg white_fonts ambess_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text_align_center">
              <div className="full">
                <h2>{t("Blog List")}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding">
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-8 col-sm-12">
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
          </div>
        </div>
      </section>
    </>
  );
}
