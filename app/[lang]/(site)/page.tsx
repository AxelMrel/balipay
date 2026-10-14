import { getT } from "@/app/lib/i18n";
import LogoTicker from "@/app/components/LogoTicker";
import CoinCalculator from "@/app/components/CoinCalculator";
import BtcChart from "@/app/components/BtcChart";

const tickerLogos = [
  "/img/ci2.png",
  "/img/ci3.png",
  "/img/ci4.png",
  "/img/ci5.png",
  "/img/ci6.png",
  "/img/ci7.png",
  "/img/ci8.png",
  "/img/ci9.png",
  "/img/ci10.png",
  "/img/ci11.png",
  "/img/ci12.png",
  "/img/ci13.png",
  "/img/ci15.png",
  "/img/ci16.png",
  "/img/ci17.png",
  "/img/ci18.png",
  "/img/ci19.png",
  "/img/ci20.png",
  "/img/ci21.png",
  "/img/ci22.png",
  "/img/ci23.png",
  "/img/ci24.png",
  "/img/ci25.png",
  "/img/ci26.png",
  "/img/ci27.png",
  "/img/ci28.png",
  "/img/ci29.png",
  "/img/ci30.png",
];

export default async function IndexPage() {
  const t = await getT();

  return (
    <>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/slider1.png" alt="Los Angeles" width="1100" height="500" />
          </div>
          <div className="carousel-item">
            <img src="/images/slider2.png" alt="Chicago" width="1100" height="500" />
          </div>
          <div className="carousel-item">
            <img src="/images/slider3.png" alt="New York" width="1100" height="500" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <i className="fa fa-angle-left"></i>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <i className="fa fa-angle-right"></i>
        </a>
      </div>

      <div className="running_stock">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <LogoTicker images={tickerLogos} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="layout_padding map_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="heading_main text_align_center">
                  <h2>
                    {t("Get")} <span className="theme_color">{t("Started")}</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-12 text_align_center">
              <div className="full">
                <p className="large_2">
                  {t("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium")} <br />
                  {t("doloremque laudantium, totam rem aperiam, eaque ipsa quae..")}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="full icons text_align_center">
                <img src="/img/icon1_.png" width="75" alt="#" />
              </div>
              <div className="full text_align_center">
                <h4>{t("BETTER THAN A CREDIT CARD")}</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="full icons text_align_center">
                <img src="/img/icon3_.png" width="75" alt="#" />
              </div>
              <div className="full text_align_center">
                <h4>{t("SAFE & SECURE")}</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="full icons text_align_center">
                <img src="/img/icon2_.png" width="75" alt="#" />
              </div>
              <div className="full text_align_center">
                <h4>{t("MOBILE APP")}</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="full icons text_align_center">
                <img src="/img/icon4_.png" width="75" alt="#" />
              </div>
              <div className="full text_align_center">
                <h4>{t("BETTER THAN CASH")}</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="full icons text_align_center">
                <img src="/img/icon5_.png" width="75" alt="#" />
              </div>
              <div className="full text_align_center">
                <h4>{t("INSTANT EXCHANGE")}</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="full icons text_align_center">
                <img src="/img/icon6_.png" width="75" alt="#" />
              </div>
              <div className="full text_align_center">
                <h4>{t("FASTER SETTLEMENT")}</h4>
              </div>
            </div>
          </div>
          <div className="row margin_top_50">
            <div className="col-md-6">
              <BtcChart />
            </div>
            <div className="col-md-6">
              <BtcChart />
            </div>
          </div>
        </div>
      </div>

      <section className="layout_padding dark_layer_2">
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
                  <p className="large_2" style={{ color: "#222" }}>
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

      <div className="layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="heading_main text_align_center">
                  <h2>
                    {t("Why choose")} <span className="theme_color">{t("Us")}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 margin_top_50">
              <div className="full feature_b1 text_align_center">
                <div className="icon full">
                  <img src="/img/f2.png" alt="#" />
                </div>
                <div className="full">
                  <h4>{t("Fast Transaction")}</h4>
                </div>
                <div className="full">
                  <p>{t("Optimize your business case with blockchain technology and Smart Contracts.")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 margin_top_50">
              <div className="full feature_b1 text_align_center">
                <div className="icon full">
                  <img src="/img/f3.png" alt="#" />
                </div>
                <div className="full">
                  <h4>{t("24/7 Trading")}</h4>
                </div>
                <div className="full">
                  <p>{t("Optimize your business case with blockchain technology and Smart Contracts.")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 margin_top_50">
              <div className="full feature_b1 text_align_center">
                <div className="icon full">
                  <img src="/img/f1.png" alt="#" />
                </div>
                <div className="full">
                  <h4>{t("Free Consulting")}</h4>
                </div>
                <div className="full">
                  <p>{t("Optimize your business case with blockchain technology and Smart Contracts.")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 margin_top_50">
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
      </div>

      <section className="layout_padding video_bg_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="heading_main text_align_center">
                  <h2>
                    {t("Crypto currency is")}{" "}
                    <span className="theme_color">
                      <br />
                      {t("future of digital money")}{" "}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="full margin_top_30">
                <div className="full_main_video">
                  <img src="/images/video.png" className="img-responsive" alt="#" />
                  <div className="playpause"></div>
                </div>
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
    </>
  );
}
