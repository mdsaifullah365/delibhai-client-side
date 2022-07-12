import React from 'react';
import delivery1 from '../../../assets/images/delivery/delivery1.jpg';
import delivery2 from '../../../assets/images/delivery/delivery2.jpg';
import delivery3 from '../../../assets/images/delivery/delivery3.jpg';
import delivery4 from '../../../assets/images/delivery/delivery4.jpg';

const DeliveryImages = () => {
  return (
    <section className="my-24">
      {/* Section Title */}
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="heading text-black text-center text-3xl sm:text-4xl md:text-5xl font-semibold mb-10">
          আমাদের সাথে শুরু হোক আপনার ডিজিটাল লাইফের পথচলা
        </h2>
      </div>
      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <img src={delivery1} alt="" />
        <img src={delivery2} alt="" />
        <img src={delivery3} alt="" />
        <img src={delivery4} alt="" />
      </div>
    </section>
  );
};

export default DeliveryImages;
