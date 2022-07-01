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
  const url = `https://delibhai.herokuapp.com${path}`;
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
  return (
    <div className="container">
      {items.length === 0 ? (
        <div className="text-center text-2xl lg:text-4xl pt-4 pb-16">
          No Items Found
        </div>
      ) : (
        <div
          className={`grid gap-x-[4vw] lg:gap-x-[2vw] gap-y-[5.333333vw] lg:gap-y-[2.6666vw] pb-4 mb-16 ${
            gridView ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'
          }`}
        >
          {items?.map((item) => (
            <ItemCard key={item._id} item={item} setItemModal={setItemModal} />
          ))}
        </div>
      )}
      {itemModal && <ItemModal item={itemModal} setItemModal={setItemModal} />}
      <div className="fixed lg:sticky bottom-3 left-0 right-0 container">
        <OrderButton />
      </div>
    </div>
  );
};

export default Items;
