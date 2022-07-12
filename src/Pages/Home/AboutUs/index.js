import React from 'react';
import { Link } from 'react-router-dom';
import InfoCard from './InfoCard';

const AboutUs = () => {
  const infos = [
    {
      id: 1,
      title: 'রেজিস্টার্ড কাস্টমার',
      quantity: '২০০০+',
    },
    {
      id: 2,
      title: 'ডেলিভাই হিরো',
      quantity: '৫০০+',
    },
    {
      id: 3,
      title: 'অর্ডার সম্পন্ন',
      quantity: '৩০০০+',
    },
    {
      id: 4,
      title: 'গ্রাম/মহল্লা',
      quantity: '২০+',
    },
  ];

  return (
    <section className="my-24">
      <div className="max-w-[920px] mx-auto px-6 text-center">
        {/* Section title */}
        <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-semibold mb-10">
          আমাদের সম্পর্কে জানুন
        </h2>
        {/* Infos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {infos.map((info) => (
            <InfoCard key={info.id} info={info} />
          ))}
        </div>
        {/* More Button */}
        <Link to="/about-us" className="btn btn-primary mt-10 text-base-100">
          আরো জানুন
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
