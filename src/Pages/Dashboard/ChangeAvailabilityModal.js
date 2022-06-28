import React from 'react';

const ChangeAvailabilityModal = ({
  item,
  refetch,
  email,
  setAvailabilityModal,
}) => {
  const { _id, img1, name, price } = item;
  // Change Availability
  const handleAvailability = (id) => {
    const url = `https://delibhai.herokuapp.com/admin/delifood/${id}?email=${email}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${sessionStorage.getItem('adminAccessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          refetch();
          setAvailabilityModal(null);
        }
      });
  };
  return (
    <div>
      <input type='checkbox' id='availability-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h3 className='font-bold text-xl text-red-500'>
            Change availability status?
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
              onClick={() => handleAvailability(_id)}
              className='btn bg-error text-white'>
              Yes
            </label>
            <label
              for='availability-modal'
              className='btn bg-blue-500 text-white'>
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeAvailabilityModal;
