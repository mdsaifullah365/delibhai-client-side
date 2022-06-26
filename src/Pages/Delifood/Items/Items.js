import React from 'react';
import OrderButton from './OrderButton/OrderButton';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ItemCard from './ItemCard';

const Items = ({ gridView }) => {
  const url = `https://delibhai.herokuapp.com/item`;
  const { data: items, isLoading } = useQuery('items', () =>
    fetch(url).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className='container'>
      <div
        className={`grid gap-x-[4vw] lg:gap-x-[2vw] gap-y-[5.333333vw] lg:gap-y-[2.6666vw] pb-4 mb-16 ${
          gridView ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'
        }`}>
        {items?.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
      <div className='fixed lg:sticky bottom-3 left-0 right-0 container'>
        <OrderButton />
      </div>
    </div>
  );
};

export default Items;
