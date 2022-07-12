import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { id, title, description, image } = service;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-0 mb-16">
      <div
        className={`${
          id % 2 === 1 ? 'md:mr-20' : 'md:ml-20'
        } text-center md:text-left`}
      >
        <h2 className="text-5xl font-semibold leading-tight mb-5">{title}</h2>
        <p className="text-base text-[#5c5c5c] mb-6">{description}</p>
        <Link to={'/'} className="btn btn-primary text-base-100">
          অর্ডার করুন
        </Link>
      </div>
      <div className={`${id % 2 === 1 && 'md:order-last'} order-first`}>
        <img src={image} className="w-3/4 mx-auto md:w-full" alt="" />
      </div>
    </div>
  );
};

export default Service;
