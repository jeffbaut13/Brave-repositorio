import React from "react";
import DarkTheme from "../../layouts/Dark";
import Team from "../../components/Team/team";
import Navbar from "../../components/Navbar/navbar";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import Footer from "../../components/Footer/footer";

import Blogs4 from "../../components/blogs/Blogs4/blogs4";
import Services3 from "../../components/Services3/services3";
import AboutUs2 from "../../components/About-us2/about-us2";
import Portfolio from "../../components/Portfolio/portfolio";
import SContactForm from "../../components/s-contact-form/s-contact-form";
import IntroWithSlider from "../../components/Intro-with-slider/intro-with-slider";
import VideoWithTestimonials from "../../components/Video-with-testimonials/video-with-testimonials";
import Services6 from "../../components/Services6/services6";
import Clients from "../../components/Clients/clients";
import CallToAction from "../../components/Call-to-action/call-to-action";

const Homepage4 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    });
  }, [fixedSlider, MainContent]);

  return (
    <DarkTheme>
      <NavbarFullMenu />
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutUs2 />
        <Services3 lines />
        <Clients theme="dark" />
        <Blogs4 />
        <CallToAction />
        <Footer hideBGCOLOR />
      </div>
    </DarkTheme>
  );
};

export default Homepage4;
