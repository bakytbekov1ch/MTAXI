import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

import "./Layout.scss"

const Layout = () => {
  return (
    <div className="wrapper layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
