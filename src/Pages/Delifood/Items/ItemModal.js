import React from 'react';
import ItemCarousel from './ItemDetails/ItemCarousel/ItemCarousel';
import ItemDescription from './ItemDetails/ItemDescription/ItemDescription';
import SocialLinks from './ItemDetails/SocialLinks/SocialLinks';
import OrderButton from './OrderButton/OrderButton';

const ItemModal = ({ item, setItemModal }) => {
  const { name, img1, img2, video, price, description } = item;
  return (
    <>
      <div
        className="w-full h-full bg-[rgba(0,0,0,0.7)] fixed top-0 right-0 bottom-0 left-0 z-[9999]"
        onClick={() => setItemModal(null)}
      ></div>
      <div className="max-w-[640px] mx-6 sm:mx-auto h-fit max-h-[90vh] my-auto bg-white fixed top-0 right-0 bottom-0 left-0 z-[10000] overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thumb-transparent scrollbar-track-transparent scrollbar-thin">
        <div className="sticky top-0 left-0 right-0 w-full h-2 sm:h-4 bg-white z-[10001]">
          <div
            onClick={() => setItemModal(null)}
            className="absolute top-0 right-0 w-8 sm:w-12 h-8 sm:h-12 bg-gray-200 rounded-full flex justify-center items-center cursor-pointer z-[10002]"
          >
            <div>X</div>
          </div>
        </div>
        <div className="bg-white">
          <ItemCarousel
            img1={img1}
            img2={img2}
            video={video}
            price={price}
            name={name}
          />

          <ItemDescription
            description={description}
            price={price}
            name={name}
          />
          <div className="px-[calc(5.333vw-0.2666rem)] sm:px-[32.42px] bg-gradient-to-t from-white via-white pb-2 sm:pb-4">
            <SocialLinks />
            <OrderButton />
          </div>
          <div className="sticky bottom-0 left-0 right-0 w-full h-2 sm:h-4 bg-white z-[10001]"></div>
        </div>
      </div>
    </>
  );
};

export default ItemModal;
