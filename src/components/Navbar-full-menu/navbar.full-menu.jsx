/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import initFullNavbarMenu from "../../common/initFullNavbarMenu";

const NavbarFullMenu = ({ theme }) => {
  React.useEffect(() => {
    initFullNavbarMenu()
  }, [])
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
      >
        <div className="container-fluid">
          <div className="logo">
            <Link href="/" passHref>
              {theme ? (
                theme === "light" ? (
                  <img src={appData.darkLogo} alt="logo" />
                ) : (
                  <img src={appData.lightLogo} alt="logo" />
                )
              ) : (
                <img src={appData.lightLogo} alt="logo" />
              )}
            </Link>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <span className="text" data-splitting>
              <span className="menu-text word">Menu</span>
            </span>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                    <Link href={`/`} passHref>
                      <span  className="link">
                        <span className="nm">01.</span>Home
                      </span>
                      </Link>
                    </div>
                    
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href={`/blog-list/blog-list-dark`} passHref>
                        <span className="link">
                          <span className="nm">02.</span>Campañas
                        </span>
                      </Link>
                    </div>
                  </li>
                  
                  <li>
                    <div className="o-hidden">
                      <Link href={`/about/about-dark`} passHref>
                        <span className="link">
                          <span className="nm">02.</span>Nosotros
                        </span>
                      </Link>
                    </div>
                  </li>
                  
                  <li>
                    <div className="o-hidden">
                      <Link href={`/contact/contact-dark`} passHref>
                        <span className="link">
                          <span className="nm">05.</span>Contacto
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Phone :</h6>
                  <p>+03 762-2367-723</p>
                </div>
                <div className="item">
                  <h6>Address :</h6>
                  <p>
                    541 Melville Ave, Palo Alto, CA 94301, ask@ohio.colabr.io
                  </p>
                </div>
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <Link href="#0" passHref>Vie_website@gmail.com</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
