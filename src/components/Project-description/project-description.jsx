import React from "react";

const ProjectDescription = ({ projectDescriptionData, projectDescriptionDataDos }) => {
 function crearhtmljson(){
  return{__html: projectDescriptionData}
 }
 
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h3>
                <span>02 </span> Idea
              </h3>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text js-scroll__content">
              <p className="extra-text" dangerouslySetInnerHTML={crearhtmljson()}></p>
              <br/>
              {/* <p className="extra-text">{projectDescriptionDataDos}</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
