import React from 'react';

const ItemDescription = ({ description }) => {
  return (
    <div className="px-[calc(5.333vw-0.2666rem)] sm:px-[32.42px]">
      <h2 className="inline-block bg-primary px-[calc(2.9333333vw-0.1466rem)] sm:px-[17.835px] py-[calc(1.066666vw-0.0533rem)] sm:py-[6.48533px] rounded-[calc(1.333vw-0.0666rem)] sm:rounded-[8.10667px] text-white text-[calc(4.266666vw-0.2133rem)] sm:text-[25.941px] leading-[1.75] font-semibold mt-[calc(6.4vw-0.32rem)] sm:mt-[38.912px] mb-[calc(2.666vw-0.1333rem)] sm:mb-[16.2133px]">
        সংক্ষিপ্ত বর্ণনা
      </h2>
      <p className="text-[#004E97] text-[calc(4.266666vw-0.2133rem] sm:text-[25.94px] leading-[2]">
        {description}
      </p>
    </div>
  );
};

export default ItemDescription;
