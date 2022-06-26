import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const OrderButton = () => {
  return (
    <a
      href='tel:01886232352'
      className='btn btn-primary rounded-xl text-2xl leading-10 text-white flex justify-center items-center gap-[10px] w-full max-w-3xl mx-auto h-14'>
      <FaPhoneAlt />
      <span>অর্ডার করুন</span>
    </a>
  );
};

export default OrderButton;
