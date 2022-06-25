import React from 'react';

const ItemCard = ({ item }) => {
  const { _id, img, price, available, name } = item;
  return (
    // Background Image
    <div
      key={_id}
      style={{
        background: `url('${img}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundOrigin: 'padding-box',
      }}
      className={`relative w-full h-[calc(50vw-32px)] bg-[#bebebe] rounded-[2.6666666vw]`}>
      {/* Dark Overlay */}
      <div
        className={`absolute top-0 right-0 bottom-0 left-0 rounded-[2.6666666vw] bg-gradient-to-t from-black to-transparent opacity-75`}></div>
      {/* Information */}
      <div className='flex flex-col justify-between items-center text-white h-full relative p-[1.3333333vw]'>
        <div className={`w-full flex justify-between`}>
          <p className='bg-white text-primary rounded-full px-[2.1333333vw] py-[0.533333vw] text-[3.733333vw] leading-[6.1333333vw] font-bold'>
            {price} টাকা
          </p>
          <div className='bg-[rgba(0,0,0,0.4)] text-[3.2vw] rounded-full px-[2.1333333vw] py-[0.533333vw] flex justify-between items-center gap-[1.3333333vw]'>
            <div
              className={`w-[1.866666vw] h-[1.866666vw] rounded-full ${
                available ? 'bg-[#03D7A1]' : 'bg-[#FFD600]'
              }`}></div>
            <div className='text-white leading-[5.06666vw] font-medium'>
              {available ? 'আছে' : 'নাই'}
            </div>
          </div>
        </div>
        {item?.titleImage ? (
          <img src={item.titleImage} alt='' />
        ) : (
          <div className='text-[5.86666vw] leading-[9.6vw] font-bold'>
            {name}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
