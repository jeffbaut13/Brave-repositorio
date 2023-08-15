import React from "react";
import ProjectDate from "../../data/alcarrito.json";
import ProjectDetails2Dark from "./project-details2-dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import ProjectDetails2Header from "../../components/Project-details2-header/project-details2-header";
import ProjectIntroduction from "../../components/Project-introduction/project-introduction";
import ProjectGallery from "../../components/Project-gallery/project-gallery";

const alCarrito = () => {
  const prueba = "";
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
      <ProjectGallery images={Project.gallery} />
      <ProjectDetails2Dark
        data={Project.projectHeaderImage}
        DataDos={ProjectDescription}
        DataTres={ProjectVideo}
        next={ProjectDate.next}
      />
    </>
  );
};

export default alCarrito;
