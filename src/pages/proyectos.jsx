import React from "react";
import blog2Data from "../data/blog2.json";
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/Navbar/navbar";
import BlogListed from "../components/Blog-list/blog-list";
import PageHeader from "../components/Page-header/page-header";
import Footer from "../components/Footer/footer";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar.full-menu";

const BlogListDark = () => {
  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <NavbarFullMenu />

      <PageHeader
        className="sub-bg"
        title="Campañas"
        paragraph="Todas las noticias y eventos más actuales de nuestro equipo creativo.        "
      />
      <BlogListed blogs={blog2Data} />
      <Footer />
    </DarkTheme>
  );
};

export default BlogListDark;
