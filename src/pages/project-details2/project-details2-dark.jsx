import React from "react";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";



import ProjectDescription from "../../components/Project-description/project-description";
import ProjectVideo from "../../components/Project-video/project-video";
import NextProject from "../../components/Next-project/next-project";


const ProjectDetails2Dark = ({data, DataDos, DataTres, next}) => {

 
  return (
    <DarkTheme>
      
      <div className="wrapper">

        <ProjectDescription projectDescriptionData={DataDos} />
        <ProjectVideo projectVideoDate={data} idvideo={DataTres} />
        <NextProject next={next}/>
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
