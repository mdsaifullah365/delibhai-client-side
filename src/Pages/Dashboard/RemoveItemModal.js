import React from 'react';
import axios from 'axios';

const RemoveItemModal = ({ item, refetch, email, setRemoveModal }) => {
  const { _id, img1, name, price } = item;
  // Remove an Item
  const handleRemoveItem = (id) => {
    const url = `https://delibhai.herokuapp.com/admin/delifood/${id}?email=${email}`;
    axios.delete(url).then((res) => {
      if (res.data.deletedCount === 1) {
        refetch();
        setRemoveModal(null);
      }
    });
  };
  return (
    <div>
      <input type='checkbox' id='remove-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h3 className='font-bold text-xl text-red-500'>
            Are you sure you want to remove this item?
          </h3>
          <div className='flex items-center space-x-3 py-8'>
            <div className='avatar'>
              <div className='mask mask-squircle w-12 h-12'>
                <img src={img1} alt={name} />
              </div>
            </div>
            <div>
              <div className='font-bold'>{name}</div>
              <div className='text-sm opacity-75'>{price} টাকা</div>
            </div>
          </div>
          <div className='modal-action'>
            <label
              onClick={() => handleRemoveItem(_id)}
              className='btn bg-error text-white'>
              Confirm
            </label>
            <label for='remove-modal' className='btn bg-blue-500 text-white'>
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveItemModal;
