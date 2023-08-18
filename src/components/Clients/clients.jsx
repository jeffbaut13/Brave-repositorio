/* eslint-disable @next/next/no-img-element */
import React from "react";
import ClientsData from "../../data/sections/clients.json";
import Split from "../Split";
import Link from "next/link";

const Clients = ({ theme }) => {
  return (
    <section className="clients section-padding">
      <div className="container-fluid p-0 m-0">
        <div className="row p-0 m-0">
          <div className="col-lg-4 valign md-mb50 p-0 m-0">
            <div className="sec-head mb-0 p-0">
              {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
                Mejores clientes
              </h6> */}
              <h3 className="hClient">Nuestros clientes</h3>
              {/* <p>
                Our area of practice is quite wide: design, graphics, branding,
                development.
              </p> */}
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row iconosClientes">
              {ClientsData.slice(0, 2).map((item) => (
                <div key={item.id} className="col-lg-3 brands">
                  <div className="item no-bord wow fadeIn" data-wow-delay=".3s">
                    <div className="img">
                      {theme === "light" ? (
                        <img src={item.lightImage} alt="" />
                      ) : (
                        <img src={item.darkImage} alt="" />
                      )}
                      <Split>
                        <Link
                          href={`https://${item.url}`}
                          passHref
                          data-splitting
                        >
                          <a
                            className="link words chars splitting"
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </Link>
                      </Split>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
