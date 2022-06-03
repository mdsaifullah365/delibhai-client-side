import React from "react";
import { GoCheck } from "react-icons/go";

const OrderStep = ({ step }) => {
  const { id, title, description } = step;

  return (
    <div className="border border-accent-75 rounded-2xl px-7 py-8 relative text-center md:text-left">
      {/* Icon */}
      <div className="bg-[#f8f8f8] w-16 h-16 rounded-xl flex justify-center items-center mb-7 mx-auto md:mx-0">
        <div className="bg-gradient-to-r from-secondary to-primary w-11 h-11 rounded-full flex justify-center items-center">
          <GoCheck className="text-base-100 text-3xl" />
        </div>
      </div>

      {/* Title and Description */}
      <h4 className="text-base font-semibold mb-3">{title}</h4>
      <p className="text-[#5C5C5C] text-sm">{description}</p>

      {/* Arrow */}
      {id !== 3 && (
        <div className="flex absolute md:top-1/2 right-1/2 -bottom-10 md:bottom-1/2 md:-right-10 -mr-4 md:-mt-2 rotate-90 md:rotate-0">
          {/* First */}
          <div className="bg-primary opacity-30 flex">
            <div className="border-t-8 border-r-4  border-b-8 border-l-8 border-l-base-100 border-y-secondary border-r-secondary"></div>
            <div className="border-t-8 border-r-4  border-b-8 border-l-8 border-l-secondary border-y-base-100 border-r-base-100"></div>
          </div>
          {/* Second */}
          <div className="bg-primary flex -ml-2">
            <div className="border-t-8 border-r-4  border-b-8 border-l-8 border-l-base-100 border-y-secondary border-r-secondary"></div>
            <div className="border-t-8 border-r-4  border-b-8 border-l-8 border-l-secondary border-y-base-100 border-r-base-100"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderStep;
