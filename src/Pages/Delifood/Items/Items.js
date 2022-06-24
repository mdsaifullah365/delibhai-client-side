import React from 'react';
import OrderButton from './OrderButton/OrderButton';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const Items = ({ gridView }) => {
  const url = `http://localhost:5000/item`;
  const { data: items, isLoading } = useQuery('items', () =>
    fetch(url).then((res) => res.json())
  );
  console.log(items);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container">
      <div
        className={`grid gap-x-4 gap-y-5 ${
          gridView ? 'grid-cols-2' : 'grid-cols-1'
        }`}
      >
        {items?.map((item) => {
          return (
            <div
              key={item._id}
              className={`w-full h-[calc(50vw-32px)] bg-[#bebebe] bg-[url('${item.img}')]`}
            ></div>
          );
        })}
      </div>
      <OrderButton />
    </div>
  );
};

export default Items;
