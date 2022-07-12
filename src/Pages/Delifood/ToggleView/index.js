import React from 'react';

const ToggleView = ({ gridView, setGridView }) => {
  return (
    <div className='container mt-3 mb-2 md:mt-5 md:mb-3'>
      <div className='flex justify-between items-center'>
        <div className='text-[3.733333vw] leading-[8.533333vw] font-semibold'>
          আমাদের মেন্যু
        </div>
        <div className='w-[14.9333333vw] h-[6.4vw] flex justify-between gap-[2.133333vw]'>
          <div
            onClick={() => setGridView(false)}
            className='w-[6.4vw] h-[6.4vw] p-[0.8vw] flex flex-col gap-[0.5333333vw] cursor-pointer'>
            <div
              className={`w-full h-full ${
                gridView ? 'bg-[#bebebe]' : 'bg-primary'
              } rounded-[0.2666666vw]`}></div>
            <div
              className={`w-full h-full ${
                gridView ? 'bg-[#bebebe]' : 'bg-primary'
              } rounded-[0.2666666vw]`}></div>
          </div>
          <div
            onClick={() => setGridView(true)}
            className='w-[6.4vw] h-[6.4vw] p-[0.8vw] grid grid-cols-2 gap-[0.5333333vw] cursor-pointer'>
            <div
              className={`w-full h-full ${
                gridView ? 'bg-primary' : 'bg-[#bebebe]'
              } rounded-[0.2666666vw]`}></div>
            <div
              className={`w-full h-full ${
                gridView ? 'bg-primary' : 'bg-[#bebebe]'
              } rounded-[0.2666666vw]`}></div>
            <div
              className={`w-full h-full ${
                gridView ? 'bg-primary' : 'bg-[#bebebe]'
              } rounded-[0.2666666vw]`}></div>
            <div
              className={`w-full h-full ${
                gridView ? 'bg-primary' : 'bg-[#bebebe]'
              } rounded-[0.2666666vw]`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleView;
