/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import DarkTheme from "../layouts/Dark";
import ContactHeader from "../components/Contact-header/contact-header";
import ContactForm from "../components/Contact-form/contact-form";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar.full-menu";
import Footer from "../components/Footer/footer";

const Contact = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <ContactHeader />
      <div className="main-content">
        <ContactForm />

        <div className="map" id="ieatmaps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1672.016973442366!2d-74.11200991844679!3d4.638812488093203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMzgnMTguMiJOIDc0wrAwNic0NC40Ilc!5e0!3m2!1sen!2sco!4v1686781243805!5m2!1sen!2sco"
            loading="lazy"
          ></iframe>
        </div>

        <Footer hideBGCOLOR />
      </div>
    </DarkTheme>
  );
};

export default Contact;
