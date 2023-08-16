import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import ReactPlayer from "react-player";


const ProjectVideo = ({ projectVideoDate, idvideo, slide }) => {
  console.clear();
  const [isOpen, setOpen] = useState(true);
  const [screenWidth, setScreenWidth] = useState(null);
  const [screenHeight, setScreenHeight] = useState(null);
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    handleResize(); // Actualizar los valores iniciales al cargar la página

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <section className={isClicked ? "" : "hidden"}>
        <div className="container-fluid">
          <div
            className="video-wrapper section-padding bg-img parallaxie valign"
            data-overlay-dark="4"
          >
            <div className="z-i full-width text-center">
              <div className="w-full"></div>
              <div className="CustomVimeo">
                {isClicked && (
                  <ReactPlayer
                    playing
                    volume={1}
                    loop={true}
                    controls
                    url={slide} // Video diferente para dispositivos móviles
                    width={screenWidth + "px"}
                    height={screenHeight + "px"}
                  />
                )}
              </div>

              <a
                className={
                  !isClicked
                    ? "iconoCerrar vid hidden"
                    : "iconoCerrar vid ShowVid"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setIsClicked(false);
                }}
              >
                {/* ACA VA EL HGPTA ICONO */}
                <div className="vid-butn">
                    <img className="xcierre" src="/img/x.png"></img>
                </div>
                {/* ACA VA EL HGPTA ICONO */}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`customIcon ${
          isClicked ? "iconoAbrir hidden" : "iconoAbrir ShowVid"
        }`}
      >
        <a
          className="vid"
          onClick={(e) => {
            e.preventDefault();
            setIsClicked(true);
          }}
        >
          <div className="vid-butn">
            <span className="icon">
              <i className="fas fa-play"></i>
            </span>
          </div>
        </a>
      </section>
    </>
  );
};

export default ProjectVideo;
