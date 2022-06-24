import React from "react";
import OrderButton from "./OrderButton/OrderButton";

const Items = ({ gridView }) => {
  return (
    <div className="container">
      <div className={`grid gap-5 ${gridView ? "grid-cols-2" : "grid-cols-1"}`}>
        <div className="w-full h-20 bg-[#bebebe]"></div>
        <div className="w-full h-20 bg-[#bebebe]"></div>
        <div className="w-full h-20 bg-[#bebebe]"></div>
        <div className="w-full h-20 bg-[#bebebe]"></div>
        <div className="w-full h-20 bg-[#bebebe]"></div>
        <div className="w-full h-20 bg-[#bebebe]"></div>
        <div className="w-full h-20 bg-[#bebebe]"></div>
      </div>
      <OrderButton />
    </div>
  );
};

export default Items;
