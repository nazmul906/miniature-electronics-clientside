/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";
import Header1 from "../pages/shared/Header/Header1";

const Main = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Header1></Header1>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
