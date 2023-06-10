import React from 'react';
import { useQuery } from 'react-query';
import CustomMenu from './CustomMenu';
import Loading from '../../Shared/Loading';

const Navmenu = () => {
  const url = `https://victorious-gold-garment.cyclic.app/delifood/category`;
  const { data: menu, isLoading } = useQuery(['menu'], () =>
    fetch(url).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <nav className='mt-4 pt-2 mb-[-2px] h-14 overflow-y-hidden bg-white sticky top-12 sm:top-24 z-40'>
      <ul className='container flex gap-3 list-none flex-nowrap overflow-x-scroll whitespace-nowrap overflow-y-hidden pb-7 md:justify-center'>
        <CustomMenu key='available' to='' color={'000000'}>
          এখন পাবেন
        </CustomMenu>
        {menu?.map((m) => (
          <CustomMenu key={m._id} to={m.value} color={m.color.toLowerCase()}>
            {m.label}
          </CustomMenu>
        ))}
      </ul>
    </nav>
  );
};

export default Navmenu;
