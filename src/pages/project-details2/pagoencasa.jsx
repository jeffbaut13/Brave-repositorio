import React from "react";
import ProjectDate from "../../data/pagoencasa.json";
import ProjectDetails2Dark from "./project-details2-dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import ProjectDetails2Header from "../../components/Project-details2-header/project-details2-header";
import ProjectIntroduction from "../../components/Project-introduction/project-introduction";


const Inter = () => {
  const Project = ProjectDate;
  const content = ProjectDate.intro.content;
  const spmList = ProjectDate.intro.spmList;
  const ProjectDescription = ProjectDate.description.content;
  const ProjectVideo = ProjectDate.videoLink;


  return (
    <>
      <NavbarFullMenu />
      <ProjectDetails2Header projectHeaderData={Project} />
      <ProjectIntroduction content={content} spmList={spmList} />
      <ProjectDetails2Dark
        data={Project.projectHeaderImage}

        DataDos={ProjectDescription}
        DataTres={ProjectVideo}
      />
      



    </>
  );
};

export default Inter;