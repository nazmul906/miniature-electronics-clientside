/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
