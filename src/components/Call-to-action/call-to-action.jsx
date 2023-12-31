import React from "react";
import Split from "../Split";
import Link from "next/link";

const CallToAction = ({ img }) => {
  return (
    <section className="call-action section-padding sub-bg bg-img">
      <div className="container-fluid p-0 m-0">
        <div className="row p-0 m-0 justify-content-between">
          <div className="col-md-8 col-lg-9 p-0 m-0">
            <div className="content sm-mb30">
              <Split>
                <h6 className="wow words chars splitting" data-splitting></h6>
                <h2
                  className="wow words chars splitting customH2"
                  data-splitting
                ></h2>
                <b className="wow words chars splitting" data-splitting>
                  Trae tu marca a la agencia donde la valentía es la norma.
                </b>
              </Split>
            </div>
          </div>

          <div className="contacoCall">
            <Link href={`/contacto/`}>
              <a className="butn bord curve wow fadeInUp" data-wow-delay=".5s">
                <span>Contacto</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
