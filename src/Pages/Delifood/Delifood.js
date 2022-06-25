import React from 'react';
import { useState } from 'react';
import Carousel from './Carousel/Carousel';
import Items from './Items/Items';
import Navmenu from './Navmenu/Navmenu';
import ToggleView from './ToggleView/ToggleView';

const Delifood = () => {
  const [gridView, setGridView] = useState(true);
  return (
    <>
      <Carousel />
      <Navmenu />
      <ToggleView gridView={gridView} setGridView={setGridView} />
      <Items gridView={gridView} />
    </>
  );
};

export default Delifood;
