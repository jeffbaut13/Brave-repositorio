/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SwiperCore, {
  Navigation,
  Pagination,
  Parallax,
  EffectFade,
} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { thumparallax } from "../../../common/thumparallax";
import removeSlashFromPagination from "../../../common/removeSlashpagination";

SwiperCore.use([Navigation, Pagination, Parallax, EffectFade]);

const Blogs4 = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
      thumparallax();
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <section className="blog-crv sub-bg">
      <h2 style={{ display: "none" }}>&nbsp;</h2>
      <div className="stories">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 no-padding">
              {!load ? (
                <Swiper
                  speed={800}
                  effect="fade"
                  spaceBetween={0}
                  loop={true}
                  parallax={true}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  pagination={{
                    type: "fraction",
                    clickable: true,
                    el: paginationRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.params.pagination.el = paginationRef.current;
                  }}
                  onSwiper={(swiper) => {
                    setTimeout(() => {
                      for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].childNodes[0].setAttribute(
                          "data-swiper-parallax",
                          0.75 * swiper.width
                        );
                      }

                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;

                      swiper.params.pagination.el = paginationRef.current;

                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();

                      swiper.pagination.destroy();
                      swiper.pagination.init();
                      swiper.pagination.update();
                    });
                  }}
                  className="swiper-wrapper swiper-container swiper-img"
                  slidesPerView={1}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img
                          className="thumparallax"
                          src="/img/blog/ballena.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img
                          className="thumparallax"
                          src="/img/blog/sapo.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img
                          className="thumparallax"
                          src="/img/blog/tortuga.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img
                          className="thumparallax"
                          src="/img/blog/cangrejo.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              ) : null}
            </div>
            <div className="col-lg-6 no-padding valign">
              {!load ? (
                <Swiper
                  speed={800}
                  spaceBetween={0}
                  loop={true}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  pagination={{
                    type: "fraction",
                    clickable: true,
                    el: paginationRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.params.pagination.el = paginationRef.current;
                  }}
                  onSwiper={(swiper) => {
                    setTimeout(() => {
                      for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].childNodes[0].setAttribute(
                          "data-swiper-parallax",
                          0.75 * swiper.width
                        );
                      }

                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;

                      swiper.params.pagination.el = paginationRef.current;

                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();

                      swiper.pagination.destroy();
                      swiper.pagination.init();
                      swiper.pagination.update();
                    });
                  }}
                  className="swiper-wrapper swiper-container swiper-content"
                  slidesPerView={1}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className="content">
                        <div className="tags">
                          <Link href="/blog/blog-dark">Tendencias</Link>
                        </div>
                       {/*  <div className="info">
                          <Link href="/blog/blog-dark">
                            <a>
                              <i className="far fa-clock"></i>
                              06 Aug 2022
                            </a>
                          </Link>
                          <a href="#0">by Alex Morgan</a>
                        </div> */}
                        <div className="title">
                          <h4>
                            <Link href="/blog-details/blog-details-dark">
                            THE AD FORUM PHNX 2023
                            </Link>
                          </h4>
                        </div>
                        <div className="text">
                          <p>
                          Print: Advertising photography Plastic bearded humpback whale.<br/>Award: Bronze campaign.

                          </p>
                        </div>
                        <div className="more">
                          <a target="_blank" rel="noopener noreferrer" href="https://www.adforum.com/torch/phnx-2023/winners/">
                            Conoce más
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className="content">
                        <div className="tags">
                          <Link href="/blog/blog-dark">Tendencias</Link>
                        </div>
                       {/*  <div className="info">
                          <Link href="/blog/blog-dark">
                            <a>
                              <i className="far fa-clock"></i>
                              06 Aug 2022
                            </a>
                          </Link>
                          <a href="#0">by Alex Morgan</a>
                        </div> */}
                        <div className="title">
                          <h4>
                            <Link href="/blog-details/blog-details-dark">
                            THE AD FORUM PHNX 2023
                            </Link>
                          </h4>
                        </div>
                        <div className="text">
                          <p>
                          Print: Advertising photography Plastic cave frog.<br/>Award: Bronze campaign.

                          </p>
                        </div>
                        <div className="more">
                          <a target="_blank" rel="noopener noreferrer" href="https://www.adforum.com/torch/phnx-2023/winners/">
                            Conoce más
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className="content">
                        <div className="tags">
                          <Link href="/blog/blog-dark">TENDENCIAS</Link>
                        </div>
                        {/* <div className="info">
                          <Link href="/blog/blog-dark">
                            <a>
                              <i className="far fa-clock"></i>
                              06 Aug 2022
                            </a>
                          </Link>
                          <a href="#0">by Alex Morgan</a>
                        </div> */}
                        <div className="title">
                          <h4>
                            <Link href="/blog-details/blog-details-dark">
                              <a>THE AD FORUM PHNX 2023</a>
                            </Link>
                          </h4>
                        </div>
                        <div className="text">
                          <p>
                          Print: Advertising photography Hawksbill turtle with plastic coat <br/> Award: Bronze campaign.

                          </p>
                        </div>
                        <div className="more">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.adforum.com/torch/phnx-2023/winners/">
                            Conoce más
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className="content">
                        <div className="tags">
                          <Link href="/blog/blog-dark">TENDENCIAS</Link>
                        </div>
                        {/* <div className="info">
                          <Link href="/blog/blog-dark">
                            <a>
                              <i className="far fa-clock"></i>
                              06 Aug 2022
                            </a>
                          </Link>
                          <a href="#0">by Alex Morgan</a>
                        </div> */}
                        <div className="title">
                          <h4>
                            <Link href="/blog-details/blog-details-dark">
                              <span>REVISTA Lurzers Archive 223 (US edition). 2/23</span>
                            </Link>
                          </h4>
                        </div>
                        <div className="text">
                          <p>
                          Plastic court hermit crab <br/> Social + Environment
                          </p>
                        </div>
                        <div className="more">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.adforum.com/torch/phnx-2023/winners/">
                            Conoce más
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              ) : null}
            </div>
          </div>

          <div className="controls">
            <div
              ref={navigationNextRef}
              className="swiper-button-next swiper-nav-ctrl next-ctrl"
            >
              <i className="fas fa-caret-up"></i>
            </div>
            <div
              ref={navigationPrevRef}
              className="swiper-button-prev swiper-nav-ctrl prev-ctrl"
            >
              <i className="fas fa-caret-down"></i>
            </div>
            <div className="swiper-pagination" ref={paginationRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs4;
