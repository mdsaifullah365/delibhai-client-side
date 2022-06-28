import React from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { BsToggle2Off, BsToggle2On } from 'react-icons/bs';
import axios from 'axios';
const ItemRow = ({ item, refetch, email }) => {
  const { _id, name, available, description, img1, price, categories } = item;
  const handleAvailability = (id) => {
    const url = `https://delibhai.herokuapp.com/admin/delifood/${id}?email=${email}`;
    axios.put(url).then((res) => {
      if (res.data.modifiedCount === 1) {
        refetch();
      }
    });
  };
  const handleRemoveItem = (id) => {
    const url = `https://delibhai.herokuapp.com/admin/delifood/${id}?email=${email}`;
    axios.delete(url).then((res) => {
      if (res.data.deletedCount === 1) {
        refetch();
      }
    });
  };
  return (
    <tr>
      <td>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
            <div className='mask mask-squircle w-12 h-12'>
              <img src={img1} alt={name} />
            </div>
          </div>
          <div>
            <div className='font-bold'>{name}</div>
            <div className='text-sm opacity-50'>{categories}</div>
          </div>
        </div>
      </td>
      <td>{description?.slice(0, 60)} ...</td>
      <td>{price} টাকা</td>
      <th>
        <button className='text-2xl' onClick={() => handleAvailability(_id)}>
          {available ? (
            <BsToggle2On className='text-blue-500' />
          ) : (
            <BsToggle2Off className='text-error' />
          )}
        </button>
      </th>
      <th>
        <button
          className='btn btn-ghost btn-md'
          onClick={() => handleRemoveItem(_id)}>
          <RiDeleteBin6Fill className='text-error text-2xl' />
        </button>
      </th>
    </tr>
  );
};

export default ItemRow;
