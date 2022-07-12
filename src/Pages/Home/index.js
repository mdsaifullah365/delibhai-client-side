import React from 'react';
import Banner from './Banner';
import OrderProcess from './OrderProcess';
import Services from './Services';
import DeliveryImages from './DeliveryImages';
import Income from './Income';
import AboutUs from './AboutUs';

const Home = () => {
  return (
    <main>
      <Banner />
      <OrderProcess />
      <Services />
      <DeliveryImages />
      <Income />
      <AboutUs />
    </main>
  );
};

export default Home;
