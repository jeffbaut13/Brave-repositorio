import React from "react";
import Split from "../Split";
import Link from "next/link";

const CallToAction = ({ img }) => {
  return (
    <section className="call-action section-padding sub-bg bg-img">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <Split>
                <h6 className="wow words chars splitting" data-splitting></h6>
                <h2 className="wow words chars splitting" data-splitting></h2>
                <b className="wow words chars splitting" data-splitting>
                  Trae tu marca a la agencia donde la valentia es la norma.
                </b>
              </Split>
            </div>
          </div>

          <div className="contacoCall">
            <Link href={`/contact/contact-dark`}>
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
