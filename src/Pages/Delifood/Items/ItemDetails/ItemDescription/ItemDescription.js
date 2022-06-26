import React from 'react';

const ItemDescription = ({ description }) => {
  return (
    <div className='container pb-36 lg:pb-0'>
      <p className='text-[#004E97] text-[4.266666vw] leading-[7.466666vw] lg:text-xl lg:leading-normal'>
        {description}
      </p>
    </div>
  );
};

export default ItemDescription;
