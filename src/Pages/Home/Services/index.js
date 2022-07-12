import React from 'react';
import Service from './Service';
import dailygoods from '../../../assets/images/services/dailygoods.png';
import gas from '../../../assets/images/services/gas.png';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'গ্যাস লাগবে?',
      description:
        'জরুরী মুহুর্তেই গ্যাস শেষ? ডেলিভাইতে অর্ডার করুন। আমারা দ্রুত পৌছে দিবো আপনার দরজায়',
      image: gas,
    },
    {
      id: 2,
      title: 'নিত্য প্রয়োজনীয় পন্য লাগবে?',
      description:
        'অর্ডার করার সাথে সাথেই মুহুর্তেই পৌছে দিবে আমাদেরর ডেলিভারী হিরো',
      image: dailygoods,
    },
  ];
  
  return (
    <section className="my-24">
      <div className="max-w-[920px] mx-auto px-6">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
