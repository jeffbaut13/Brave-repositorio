/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import initFullNavbarMenu from "../../common/initFullNavbarMenu";

const NavbarFullMenuDark = ({ theme }) => {
  React.useEffect(() => {
    initFullNavbarMenu()
  }, [])
  return (
    <>
      <div
        id="navi"
        className={`topnav dark`}
      >
        <div className="container-fluid">
          <div className="logo">
            <Link href="/" passHref >
              
                <img src={appData.darkLogo} alt="logo" />
             
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
                      <Link href={`/proyectos`}>
                        <a className="link">
                          <span className="nm">02.</span>Campañas
                        </a>
                      </Link>
                    </div>
                  </li>
                  
                  <li>
                    <div className="o-hidden">
                      <Link href={`/sobre-nosotros`}>
                        <a className="link">
                          <span className="nm">02.</span>Nosotros
                        </a>
                      </Link>
                    </div>
                  </li>
                  
                  <li>
                    <div className="o-hidden">
                      <Link href={`/contacto`}>
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
                  <h6>TELÉFONO:</h6>
                  <p>+57 320 996 28 08</p>
                </div>
                <div className="item">
                  <h6>OFICINA PRINCIPAL:</h6>
                  <p>
                    Calle 18 # 65A - 03, Bogotá, Colombia
                  </p>
                </div>
                <div className="item">
                  <h6>EMAIL:</h6>
                  <p>
                    <a href="#0">comercial.1@brave.com.co</a>
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

export default NavbarFullMenuDark;