import React from "react";
import { useState } from "react";
import Carousel from "./Carousel/Carousel";
import Items from "./Items/Items";
import Navmenu from "./Navmenu/Navmenu";
import ToogleView from "./ToogleView/ToogleView";

const Delifood = () => {
  const [gridView, setGridView] = useState(true);
  return (
    <>
      <Carousel />
      <Navmenu />
      <ToogleView gridView={gridView} setGridView={setGridView} />
      <Items gridView={gridView} />
    </>
  );
};

export default Delifood;
