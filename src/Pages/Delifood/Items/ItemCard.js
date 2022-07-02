import React from 'react';

const ItemCard = ({ item, setItemModal, gridView }) => {
  const { _id, img1, price, available, name } = item;
  return (
    <label
      htmlFor='item-modal'
      className='cursor-pointer'
      onClick={() => setItemModal(item)}>
      {/* Background Image */}
      <div
        key={_id}
        style={{
          background: `url('${img1}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundOrigin: 'padding-box',
        }}
        className={`relative w-full ${
          gridView
            ? 'h-[calc(48vw-1.5rem)] sm:h-[calc(320px-1.5rem-2vw)] md:h-[calc(384px-1.5rem-2vw)] lg:h-[calc(256px-0.75rem-1.5vw)] xl:h-[calc(320px-0.75rem-1.5vw)] 2xl:h-[calc(384px-0.75rem-1.5vw)]'
            : 'h-[calc(100vw-3rem)] sm:h-[calc(640px-3rem)] md:h-[calc(768px-3rem)] lg:h-[calc(1024px-3rem)] xl:h-[calc(1280px-3rem)] 2xl:h-[calc(1536px-3rem)]'
        } bg-[#bebebe] rounded-xl sm:rounded-2xl`}>
        {/* Dark Overlay */}
        <div
          className={`absolute top-0 right-0 bottom-0 left-0 rounded-xl sm:rounded-2xl bg-gradient-to-t from-black to-transparent opacity-75`}></div>
        {/* Information */}
        <div className='flex flex-col justify-between items-center text-white h-full relative p-[1.3333333vw]'>
          <div className={`w-full flex justify-between`}>
            <p className='bg-white text-primary rounded-full px-[2.1333333vw] lg:lg:px-[1.066666vw] py-[0.533333vw] lg:py-[0.26666vw] text-[3.733333vw] lg:text-[1.8666vw] leading-[6.1333333vw] lg:leading-[3.0666vw] font-bold'>
              {price} টাকা
            </p>
            <div className='bg-[rgba(0,0,0,0.4)] text-[3.2vw] lg:text-[1.6vw] rounded-full px-[2.1333333vw] lg:lg:px-[1.066666vw] py-[0.533333vw] lg:py-[0.26666vw] flex justify-between items-center gap-[1.3333333vw] lg:gap-[0.666666vw]'>
              <div
                className={`w-[1.866666vw] h-[1.866666vw] lg:w-[0.933333vw] lg:h-[0.933333vw] rounded-full ${
                  available ? 'bg-[#03D7A1]' : 'bg-[#FFD600]'
                }`}></div>
              <div className='text-white leading-[5.06666vw] lg:leading-[2.53333vw] font-medium'>
                {available ? 'আছে' : 'নাই'}
              </div>
            </div>
          </div>
          {item?.titleImage ? (
            <img src={item.titleImage} alt='' />
          ) : (
            <div className='text-[5.86666vw] lg:text-[2.93333vw] leading-[9.6vw] lg:leading-[4.8vw] font-bold'>
              {name}
            </div>
          )}
        </div>
      </div>
    </label>

    // {/* </Link> */}
  );
};

export default ItemCard;
