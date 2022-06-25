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
        className={`grid gap-x-[4vw] gap-y-[5.333333vw] ${
          gridView ? 'grid-cols-2' : 'grid-cols-1'
        }`}>
        {items?.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
      <OrderButton />
    </div>
  );
};

export default Items;
