import React from 'react';
import OrderButton from './OrderButton/OrderButton';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ItemCard from './ItemCard';
import { useLocation } from 'react-router-dom';
import ItemModal from './ItemModal';
import { useState } from 'react';

const Items = ({ gridView }) => {
  const [itemModal, setItemModal] = useState(null);
  const location = useLocation();
  const path = location.pathname;
  const url = `https://victorious-gold-garment.cyclic.app${path}`;
  const { data: items, isLoading } = useQuery(['items', path], () =>
    fetch(url).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  if (itemModal) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
  console.log(items);
  return (
    <div className='container'>
      {items?.length === 0 || items === undefined ? (
        <div className='text-center text-2xl lg:text-4xl pt-4 pb-16'>
          No Items Found
        </div>
      ) : (
        <div
          className={`grid gap-x-[4vw] lg:gap-x-[2vw] gap-y-[5.333333vw] lg:gap-y-[2.6666vw] pb-4 mb-16 ${
            gridView ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'
          }`}>
          {items?.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              setItemModal={setItemModal}
              gridView={gridView}
            />
          ))}
        </div>
      )}
      {itemModal && <ItemModal item={itemModal} setItemModal={setItemModal} />}
      <div className='fixed lg:sticky bottom-3 left-0 right-0 container'>
        <OrderButton />
      </div>
    </div>
  );
};

export default Items;
