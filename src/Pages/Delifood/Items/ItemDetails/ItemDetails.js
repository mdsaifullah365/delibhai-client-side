import React from 'react';

import { useParams } from 'react-router-dom';
import OrderButton from '../OrderButton/OrderButton';
import ItemCarousel from './ItemCarousel/ItemCarousel';
import ItemDescription from './ItemDescription/ItemDescription';
import SocialLinks from './SocialLinks/SocialLinks';

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
      'এমন অনেক কিছুই হবে, যা কেউ ভাবেনি আগে ভারতের বিখ্যাত ভাইরাল রেসিপিতে তৈরী #শরবতে_মোহব্বত এখন delifoodএ সন্ধ্যা হলেই মুখরুচক খাবারের খোঁজে যারা হন্নে হয়ে যান তাদের জন্য delifood   এর বিশেষ আয়োজন ডিম_চিতই সুটকি,পেঁয়াজ,আলুর টকটকে ভাজি অথবা রসালো আলু হাড্ডির ঝোল খাবারের কম্বিনেশনে চলে আমাদের এ আপ্পায়ন. একটা খেলে নিজের সাথে নিজেই প্রতিযোগিতা শুরু করবেন. এমন অনেক কিছুই হবে, যা কেউ ভাবেনি আগে ভারতের বিখ্যাত ভাইরাল রেসিপিতে তৈরী #শরবতে_মোহব্বত এখন delifoodএ সন্ধ্যা হলেই মুখরুচক খাবারের খোঁজে যারা হন্নে হয়ে যান তাদের জন্য delifood   এর বিশেষ আয়োজন ডিম_চিতই সুটকি,পেঁয়াজ,আলুর টকটকে ভাজি অথবা রসালো আলু হাড্ডির ঝোল খাবারের কম্বিনেশনে চলে আমাদের এ আপ্পায়ন. একটা খেলে নিজের সাথে নিজেই প্রতিযোগিতা শুরু করবেন. এমন অনেক কিছুই হবে, যা কেউ ভাবেনি আগে ভারতের বিখ্যাত ভাইরাল রেসিপিতে তৈরী #শরবতে_মোহব্বত এখন delifoodএ সন্ধ্যা হলেই মুখরুচক খাবারের খোঁজে যারা হন্নে হয়ে যান তাদের জন্য delifood   এর বিশেষ আয়োজন ডিম_চিতই সুটকি,পেঁয়াজ,আলুর টকটকে ভাজি অথবা রসালো আলু হাড্ডির ঝোল খাবারের কম্বিনেশনে চলে আমাদের এ আপ্পায়ন. একটা খেলে নিজের সাথে নিজেই প্রতিযোগিতা শুরু করবেন. ',
  };
  const { name, img1, img2, video, price, available, categories, description } =
    item;
  console.log(available, categories, id);
  return (
    <div className='pb-4 mb-12 lg:pb-0 lg:mb-0'>
      <ItemCarousel
        img1={img1}
        img2={img2}
        video={video}
        price={price}
        name={name}
      />
      <div className='container'>
        <h2 className='inline-block bg-primary px-[2.9333333vw] py-[1.066666vw] lg:px-6 lg:py-3 rounded-lg text-white text-[4.266666vw] leading-[7.466666vw] lg:text-xl lg:leading-normal font-semibold mt-[6.4vw] mb-[2.666666vw] lg:mt-10 lg:mb-6'>
          সংক্ষিপ্ত বর্ণনা
        </h2>
      </div>
      <div>
        <ItemDescription description={description} />
        <div className='fixed lg:sticky bottom-0 left-0 right-0 container bg-gradient-to-t from-white via-white pb-3'>
          <SocialLinks />
          <OrderButton />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
