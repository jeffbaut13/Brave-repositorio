/* eslint-disable @next/next/no-img-element */
import React from "react";



const ProjectGallery = ({ images }) => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">
          {images.map((image, index) => (
            <span className={index === 4 ? "col-md-12 popimg" : "col-md-3 popimg"} key={index}>
              <img alt="" src={image} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;

