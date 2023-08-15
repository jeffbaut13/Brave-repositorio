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
        className={`topnav ligth`}
      >
        <div className="container-fluid">
          <div className="logo">
          <Link href={`/`} passHref>
              
              <img src={appData.lightLogo} alt="logo" />
           
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
                    <Link href={`/`}>
                      <a  className="link">
                        <span className="nm">01.</span>Home
                      </a>
                      </Link>
                    </div>
                    
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href={`/blog-list/blog-list-dark`}>
                        <a className="link">
                          <span className="nm">02.</span>Campañas
                        </a>
                      </Link>
                    </div>
                  </li>
                  
                  <li>
                    <div className="o-hidden">
                      <Link href={`/about/about-dark`}>
                        <a className="link">
                          <span className="nm">02.</span>Nosotros
                        </a>
                      </Link>
                    </div>
                  </li>
                  
                  <li>
                    <div className="o-hidden">
                      <Link href={`/contact/contact-dark`}>
                        <a className="link">
                          <span className="nm">05.</span>Contacto
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Teléfono :</h6>
                  <p>
                  <a href="tel:3203504047"> +57 300 123 4567 </a>
                    </p>
                </div>
                <div className="item">
                  <h6>Oficina principal :</h6>
                  <p>
                    Calle 18 # 65A - 03, Bogotá Colombia
                  </p>
                </div>
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a href="mailto:comercial.1@brave.com.co">comercial.1@brave.com.co</a>
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