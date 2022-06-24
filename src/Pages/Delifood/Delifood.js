import React from "react";
import { Outlet } from "react-router-dom";
import Carousel from "./Carousel/Carousel";
import Navmenu from "./Navmenu/Navmenu";

const Delifood = () => {
  return (
    <>
      <Carousel />
      <Navmenu />
      <Outlet />
    </>
  );
};

export default Delifood;
