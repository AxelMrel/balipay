import { getT } from "@/app/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t("Testimonials") };
}

export default async function TestimonialsPage() {
  const t = await getT();

  return (
    <>
      <section className="layout_padding theme_color_bg white_fonts ambess_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text_align_center">
              <div className="full">
                <h2>{t("Testimonials")}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-block">
              <ol className="carousel-indicators tabs">
                <li data-target="#testimonial_slider" data-slide-to="0">
                  <figure>
                    <img src="/img/client1.jpg" width="180" className="img-fluid" alt="" />
                  </figure>
                </li>
                <li data-target="#testimonial_slider" data-slide-to="1">
                  <figure>
                    <img src="/img/client2.jpg" width="310" className="img-fluid" alt="" />
                  </figure>
                </li>
                <li data-target="#testimonial_slider" data-slide-to="2">
                  <figure>
                    <img src="/img/client3.jpg" width="150" className="img-fluid" alt="" />
                  </figure>
                </li>
              </ol>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div id="testimonial_slider" data-interval="false" className="carousel slide" data-ride="carousel">
                <h3>{t("WHAT OUR CLIENTS SAY")}</h3>
                <h1>{t("TESTIMONIALS")}</h1>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="quote-wrapper">
                      <p>
                        {t(
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris..",
                        )}{" "}
                      </p>
                      <h3>{t("Denwen Evile")}</h3>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="quote-wrapper">
                      <p>
                        {t(
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris..",
                        )}{" "}
                      </p>
                      <h3>{t("Denwen Evile")}</h3>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="quote-wrapper">
                      <p>
                        {t(
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris..",
                        )}{" "}
                      </p>
                      <h3>{t("Denwen Evile")}</h3>
                    </div>
                  </div>
                </div>
                <ol className="carousel-indicators indicators">
                  <li data-target="#testimonial_slider" data-slide-to="0" className="active"></li>
                  <li data-target="#testimonial_slider" data-slide-to="1"></li>
                  <li data-target="#testimonial_slider" data-slide-to="2"></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
