import React from 'react';
import { useState } from 'react';
import Carousel from './Carousel';
import Navmenu from './Navmenu';
import ToggleView from './ToggleView';
import Items from './Items';

const Delifood = () => {
  const [gridView, setGridView] = useState(true);
  return (
    <main>
      <Carousel />
      <Navmenu />
      <ToggleView gridView={gridView} setGridView={setGridView} />
      <Items gridView={gridView} />
    </main>
  );
};

export default Delifood;
