import React from 'react';
import Step from './Step';

const OrderProcess = () => {
  const steps = [
    {
      id: 1,
      title: 'আপনার পন্য অর্ডার করুন',
      description:
        'আপনার পছন্দের পন্যটি অর্ডার করুন যেখান থেকে খুশি সেখান থেকে',
    },
    {
      id: 2,
      title: 'আপনার পন্য অর্ডার করুন',
      description:
        'আপনার পছন্দের পন্যটি অর্ডার করুন যেখান থেকে খুশি সেখান থেকে',
    },
    {
      id: 3,
      title: 'আপনার পন্য অর্ডার করুন',
      description:
        'আপনার পছন্দের পন্যটি অর্ডার করুন যেখান থেকে খুশি সেখান থেকে',
    },
  ];

  return (
    <section className="my-24">
      <div className="max-w-[920px] mx-auto px-6">
        {/* Section Title */}
        <h3 className="text-primary text-center text-2xl md:text-3xl mb-5">
          ডেলিভাই সার্ভিসের মাধ্যমে
        </h3>
        <h2 className="text-black text-center text-3xl sm:text-4xl md:text-5xl font-semibold mb-10">
          মাত্র 30 মিনিটে অর্ডার ডেলিভারি
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step) => (
            <Step key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;
