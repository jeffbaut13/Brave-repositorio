import React from "react";
import DarkTheme from "../layouts/Dark";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar.full-menu";
import AboutIntro from "../components/About-intro";
import PagesHeader from "../components/Pages-header";
import Clients from "../components/Clients/clients";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";

const About = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <PagesHeader />
      <AboutIntro />
      <Clients theme="dark" />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default About;
