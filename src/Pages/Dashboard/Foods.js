import React from 'react';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';
import ItemRow from './ItemRow';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Foods = () => {
  const [user, loading] = useAuthState(auth);
  const url = `https://delibhai.herokuapp.com/admin/delifood?email=${user?.email}`;
  const {
    data: items,
    isLoading,
    refetch,
  } = useQuery('allItems', () =>
    fetch(url, {
      headers: {
        authorization: `Bearer ${sessionStorage.getItem('adminAccessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <div className='overflow-x-auto w-full'>
      <table className='table w-full'>
        <thead className='sticky top-0'>
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
            <ItemRow
              key={item._id}
              item={item}
              refetch={refetch}
              email={user?.email}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Foods;
