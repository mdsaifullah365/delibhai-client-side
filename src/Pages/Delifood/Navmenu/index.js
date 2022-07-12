import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CustomMenu from './CustomMenu';

const Navmenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const url = `https://delibhai.herokuapp.com/delifood/category`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  return (
    <nav className='mt-4 pt-2 mb-[-2px] h-14 overflow-y-hidden bg-white sticky top-12 sm:top-24 z-40'>
      <ul className='container flex gap-3 list-none flex-nowrap overflow-x-scroll whitespace-nowrap overflow-y-hidden pb-7 md:justify-center'>
        <CustomMenu key='available' to='' color={'000000'}>
          এখন পাবেন
        </CustomMenu>
        {menu.map((m) => (
          <CustomMenu key={m._id} to={m.value} color={m.color.toLowerCase()}>
            {m.label}
          </CustomMenu>
        ))}
      </ul>
    </nav>
  );
};

export default Navmenu;
