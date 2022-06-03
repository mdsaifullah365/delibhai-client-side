import React from "react";

const InfoCard = ({ info }) => {
  const { id, title, quantity } = info;
  return (
    <div className="border border-[#dddddd] rounded-lg px-7 py-8 relative text-center">
      {/* Title and Description */}
      <h4 className="text-5xl font-semibold mb-3">{quantity}</h4>
      <p className="text-[#7a7a7a] text-xl">{title}</p>
    </div>
  );
};

export default InfoCard;
