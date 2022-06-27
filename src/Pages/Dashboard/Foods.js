import React from 'react';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';
import ItemRow from './ItemRow';

const Foods = () => {
  const url = `https://delibhai.herokuapp.com/admin/delifood`;
  const {
    data: items,
    isLoading,
    refetch,
  } = useQuery('allItems', () => fetch(url).then((res) => res.json()));
  console.log(items);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className='overflow-x-auto w-full'>
      <table className='table w-full'>
        <thead>
          <tr>
            <th>নাম</th>
            <th>শর্ট ডিস্ক্রিপশন</th>
            <th>প্রাইজ</th>
            <th>এভেইলেবল</th>
            <th>রিমুভ</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ItemRow key={item._id} item={item} refetch={refetch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Foods;
