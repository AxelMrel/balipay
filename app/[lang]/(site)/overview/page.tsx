import { getT } from "@/app/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t("Overview") };
}

export default async function OverviewPage() {
  const t = await getT();

  return (
    <>
      <section className="layout_padding theme_color_bg white_fonts ambess_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text_align_center">
              <div className="full">
                <h2>{t("Overview")}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="tabbar">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active show" href="#tab1" role="tab" data-toggle="tab">
                        {t("Currencyzen")}{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#tab2" role="tab" data-toggle="tab">
                        {t("BTP Pay")}{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#tab3" role="tab" data-toggle="tab">
                        {t("BTP Bazaar")}{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#tab4" role="tab" data-toggle="tab">
                        {t("Explorer")}{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#tab5" role="tab" data-toggle="tab">
                        {t("Download")}{" "}
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane fade in active" id="tab1">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="full">
                            <img className="img-responsive" src="/img/bost3.jpg" alt="#" />
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="full">
                            <h3>{t("Let’s change the world together..")}</h3>
                          </div>
                          <div className="full">
                            <p className="large_2">
                              {t(
                                "Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusantium doloremque laudantium",
                              )}{" "}
                            </p>
                          </div>
                          <div className="full used_payment">
                            <ul>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Paypal")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Bank Account")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Deposit")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Credit/Debit Card")}{" "}
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Payment for goods")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Competitive Mining")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("From Someone Near")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Bitcoin Exchange")}{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="tab2">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="full">
                            <img className="img-responsive" src="/img/bost2.jpg" alt="#" />
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="full">
                            <h3>{t("Let’s change the world together..")}</h3>
                          </div>
                          <div className="full">
                            <p className="large_2">
                              {t(
                                "Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusantium doloremque laudantium",
                              )}{" "}
                            </p>
                          </div>
                          <div className="full used_payment">
                            <ul>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Paypal")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Bank Account")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Deposit")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Credit/Debit Card")}{" "}
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Payment for goods")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Competitive Mining")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("From Someone Near")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Bitcoin Exchange")}{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="tab3">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="full">
                            <img className="img-responsive" src="/img/bost1.jpg" alt="#" />
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="full">
                            <h3>{t("Let’s change the world together..")}</h3>
                          </div>
                          <div className="full">
                            <p className="large_2">
                              {t(
                                "Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusantium doloremque laudantium",
                              )}{" "}
                            </p>
                          </div>
                          <div className="full used_payment">
                            <ul>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Paypal")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Bank Account")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Deposit")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Credit/Debit Card")}{" "}
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Payment for goods")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Competitive Mining")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("From Someone Near")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Bitcoin Exchange")}{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="tab4">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="full">
                            <img className="img-responsive" src="/img/bost3.jpg" alt="#" />
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="full">
                            <h3>{t("Let’s change the world together..")}</h3>
                          </div>
                          <div className="full">
                            <p className="large_2">
                              {t(
                                "Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusantium doloremque laudantium",
                              )}{" "}
                            </p>
                          </div>
                          <div className="full used_payment">
                            <ul>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Paypal")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Bank Account")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Deposit")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Credit/Debit Card")}{" "}
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Payment for goods")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Competitive Mining")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("From Someone Near")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Bitcoin Exchange")}{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="tab5">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="full">
                            <img className="img-responsive" src="/img/bost2.jpg" alt="#" />
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="full">
                            <h3>{t("Let’s change the world together..")}</h3>
                          </div>
                          <div className="full">
                            <p className="large_2">
                              {t(
                                "Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusantium doloremque laudantium",
                              )}{" "}
                            </p>
                          </div>
                          <div className="full used_payment">
                            <ul>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Paypal")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Bank Account")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Deposit")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Credit/Debit Card")}{" "}
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Payment for goods")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Competitive Mining")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("From Someone Near")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Bitcoin Exchange")}{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <section className="layout_padding step_section" style={{ borderTop: "solid #eee 2px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="heading_main text_align_center">
                  <h2>
                    {t("Why")} <span className="theme_color">{t("Currencyzen")}</span>
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
                    {t("Read More About Currencyzen")}{" "}
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
