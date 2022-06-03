import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import DeliveryImages from "./DeliveryImages/DeliveryImages";
import Income from "./Income/Income";
import OrderProcess from "./OrderProcess/OrderProcess";
import Services from "./Services/Services";

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
