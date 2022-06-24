import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Carousel from "./Carousel/Carousel";
import Navmenu from "./Navmenu/Navmenu";
import ToogleView from "./ToogleView/ToogleView";

const Delifood = () => {
  const [gridView, setGridView] = useState(true);
  return (
    <>
      <Carousel />
      <Navmenu />
      <ToogleView gridView={gridView} setGridView={setGridView} />
      <Outlet />
    </>
  );
};

export default Delifood;
