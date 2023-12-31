/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contacto</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Oficina principal</h6>
                    <p>Calle 18 # 65A - 03, Bogotá, Colombia</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email</h6>
                    <p>
                      <a href="mailto:comercial.1@brave.com.co"> comercial.1@brave.com.co </a>
                      </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Teléfono</h6>
                    <p>
                     <a href="tel:3203504047"> +57 320 996 28 08 </a>
                      </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            {/* <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src="/img/blog/1.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">14 sep 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src="/img/blog/2.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">14 sep 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a  target="_blank"
                    rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100094496187493">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a  target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/feed/?trk=onboarding-landing">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a  target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/brave.colombia/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a target="_blank"
                   rel="noopener noreferrer"
                   href="https://www.youtube.com/channel/UCzb-UgMroYfLySmuFcaXPGA">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                    BRAVE © 2023. {/* Vie Template. Made with passion by
                  <Link
                    href="https://themeforest.net/user/themescamp/portfolio"
                    
                  >
                    <a target="_blank">ThemesCamp</a>
                  </Link> */}
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
