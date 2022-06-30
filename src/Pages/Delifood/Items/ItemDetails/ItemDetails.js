import React from 'react';
import { useQuery } from 'react-query';

import { useParams } from 'react-router-dom';
import Loading from '../../../Shared/Loading';
import OrderButton from '../OrderButton/OrderButton';
import ItemCarousel from './ItemCarousel/ItemCarousel';
import ItemDescription from './ItemDescription/ItemDescription';
import SocialLinks from './SocialLinks/SocialLinks';

const ItemDetails = () => {
  const { id } = useParams();
  const url = `https://delibhai.herokuapp.com/projects/delifood/item/${id}`;
  const { data: item, isLoading } = useQuery(['item', id], () =>
    fetch(url).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  const { name, img1, img2, video, price, description } = item;
  return (
    <div className="pb-4 mb-12 lg:pb-0 lg:mb-0">
      <ItemCarousel
        img1={img1}
        img2={img2}
        video={video}
        price={price}
        name={name}
      />
      <div className="container">
        <h2 className="inline-block bg-primary px-[2.9333333vw] py-[1.066666vw] lg:px-6 lg:py-3 rounded-lg text-white text-[4.266666vw] leading-[7.466666vw] lg:text-xl lg:leading-normal font-semibold mt-[6.4vw] mb-[2.666666vw] lg:mt-10 lg:mb-6">
          সংক্ষিপ্ত বর্ণনা
        </h2>
      </div>
      <div>
        <ItemDescription description={description} />
        <div className="fixed lg:sticky bottom-0 left-0 right-0 container bg-gradient-to-t from-white via-white pb-3">
          <SocialLinks />
          <OrderButton />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
