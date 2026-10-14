import { getT } from "@/app/lib/i18n";
import type { Metadata } from "next";
import CoinCalculator from "@/app/components/CoinCalculator";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t("Wallets") };
}

export default async function WalletsPage() {
  const t = await getT();

  return (
    <>
      <section className="layout_padding theme_color_bg white_fonts ambess_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text_align_center">
              <div className="full">
                <h2>{t("Wallets")}</h2>
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
                        {t("Bitcoin (BTC)")}{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#tab2" role="tab" data-toggle="tab">
                        {t("Ethereum (ETH)")}{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#tab3" role="tab" data-toggle="tab">
                        {t("Litecoin (LTC)")}{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#tab4" role="tab" data-toggle="tab">
                        {t("Cardano (ADA)")}{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#tab5" role="tab" data-toggle="tab">
                        {t("Polkadot (DOT)")}{" "}
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
                            <h3>{t("Your latest wallet update")}</h3>
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
                                <i className="fa fa-arrow-circle-right"></i> {t("Balance -")}{" "}
                                <strong>{t("1120.58 (BTN)")}</strong>
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
                            <ul>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Transfer Paypal")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Transfer to Bank Account")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Deposit from Account")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Credit/Debit Card")}{" "}
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
                                <i className="fa fa-arrow-circle-right"></i> {t("Balance -")}{" "}
                                <strong>{t("2320.58 (ETH)")}</strong>
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
                            <ul>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Transfer Paypal")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Transfer to Bank Account")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Deposit from Account")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Credit/Debit Card")}{" "}
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
                                <i className="fa fa-arrow-circle-right"></i> {t("Balance -")}{" "}
                                <strong>{t("580.01 (LTC)")}</strong>
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
                            <ul>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Transfer Paypal")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Transfer to Bank Account")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Deposit from Account")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Credit/Debit Card")}{" "}
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
                                <i className="fa fa-arrow-circle-right"></i> {t("Balance -")}{" "}
                                <strong>{t("243.95 (ADA)")}</strong>
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
                            <ul>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Transfer Paypal")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Transfer to Bank Account")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Deposit from Account")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Credit/Debit Card")}{" "}
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
                                <i className="fa fa-arrow-circle-right"></i> {t("Balance -")}{" "}
                                <strong>{t("577.95 (DOT)")}</strong>
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
                            <ul>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Transfer Paypal")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Transfer to Bank Account")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Deposit from Account")}{" "}
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right"></i> {t("Credit/Debit Card")}{" "}
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
