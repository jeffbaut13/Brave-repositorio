/* eslint-disable @next/next/no-img-element */
import React from 'react'


const PagesHeader = () => {
  return (
    <header className="pages-header valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont mt-100 mb-50">
              <img className="imgBola" src="/img/bolas_braves.png"></img>
              <h1 className="fw-700 sobreNosotros">
              Nos esforzamos por hacer que nuestro trabajo le agregue valor a la vida de las personas y no ruido.
              </h1>
            </div>
          </div>
          {/* <div className="col-lg-10">
            <div className="img">
              <img src="/img/slid/about.jpg" alt="" />
            </div>
          </div> */}
        </div>
      </div>
      <div className="half sub-bg">
        <div className="circle-color">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;