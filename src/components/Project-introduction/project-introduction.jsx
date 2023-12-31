import React from "react";

const ProjectIntroduction = ({ content, contentDos, spmList }) => {
  return (
    <section className="intro-section section-padding campanas">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h3>
                <span>01 </span> Contexto
              </h3>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text js-scroll__content">
              <p className="extra-text">
                {content}
              </p><br/>
              <p className="extra-text">
                {contentDos}
              </p>
              {/* <ul className="smp-list mt-30">
                {spmList.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntroduction;
