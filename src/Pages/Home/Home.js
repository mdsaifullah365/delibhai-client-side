import React from "react";
import Banner from "./Banner/Banner";
import DeliveryImages from "./DeliveryImages/DeliveryImages";
import OrderProcess from "./OrderProcess/OrderProcess";
import Services from "./Services/Services";

const Home = () => {
  return (
    <main>
      <Banner />
      <OrderProcess />
      <Services />
      <DeliveryImages />
    </main>
  );
};

export default Home;
