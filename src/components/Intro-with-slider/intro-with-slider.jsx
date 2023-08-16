import React, { useEffect, useState } from "react";
import Link from "next/link";
import introData from "../../data/sections/intro.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashpagination";
import fadeWhenScroll from "../../common/fadeWhenScroll";
import ReactPlayer from "react-player";

SwiperCore.use([Navigation, Pagination, Parallax]);

const IntroWithSlider = ({ sliderRef }) => {
  const [screenWidth, setScreenWidth] = useState(null);
  const [screenHeight, setScreenHeight] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight + 115);
    };

    handleResize(); // Actualizar los valores iniciales al cargar la página

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = screenWidth <= 768; // Definir el ancho máximo para considerar dispositivos móviles

  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
    setTimeout(() => {
      removeSlashFromPagination();
      setLoad(false);
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header
      ref={sliderRef}
      className="slider slider-prlx fixed-slider text-center"
    >
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
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

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {introData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-overlay-dark="6"
                >
                  <div className="Vimeo">
                    <ReactPlayer
                      playing={true} // Reproducir solo si no es un dispositivo móvil
                      loop={true}
                      muted={true}
                      controls={false}
                      url={isMobile ? slide.mobileVideo : slide.video} // Video diferente para dispositivos móviles
                      width={screenWidth + "px"}
                      height={screenHeight + "px"}
                    />
                  </div>
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-lg-8 col-md-10">
                        <div className="caption center mt-30">
                          <Link href={slide.url} passHref>
                            <h1
                              style={{ cursor: `pointer` }}
                              className="braveCustom"
                            >
                              {slide.title} <br />
                              <span className="contenido titulo">
                                {slide.content} <br />
                                <span className="titulo_company">
                                  {slide.company}
                                </span>
                              </span>
                            </h1>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Customvideo bg-img parallaxie">
                    <Link href={slide.url} passHref onClick={handleClick}>
                      <section className="customIcon play">
                        <a className="vid">
                          <div className="vid-butn">
                            <span className="icon">
                              <i className="fas fa-play"></i>
                            </span>
                          </div>
                        </a>
                      </section>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
        <div className="setone setwo">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          ></div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          ></div>
        </div>
        <div className="social-icon">
          <a href="#0">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#0">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#0">
            <i className="fab fa-behance"></i>
          </a>
          <a href="#0">
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default IntroWithSlider;
