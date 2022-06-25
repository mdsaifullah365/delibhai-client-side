import React from 'react';

import { useParams } from 'react-router-dom';
import ItemCarousel from './ItemCarousel/ItemCarousel';

const ItemDetails = () => {
  const { id } = useParams();
  const item = {
    name: 'শরবতে মহব্বত',
    img1: 'https://i.ibb.co/k3pgZQX/demo-item-1.jpg',
    img2: 'https://i.ibb.co/SJydHfP/delifood-banner-1.jpg',
    video: 'https://www.youtube.com/shorts/_HgpFMdZ16c',
    price: '৬০',
    available: true,
    categories: 'snacks, evening-snacks',
    description:
      'ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন। ডেমো ডিস্ক্রিপশন।',
  };
  const { name, img1, img2, video, price, available, categories, description } =
    item;
  console.log(available, categories, description, id);
  return (
    <>
      <ItemCarousel
        img1={img1}
        img2={img2}
        video={video}
        price={price}
        name={name}
      />
    </>
  );
};

export default ItemDetails;
