import React from "react";
import { Link } from "react-router-dom";
import man from "../../../images/man.png";
import { FiPlayCircle } from "react-icons/fi";
import "../../../App.css";

const Banner = () => {
  return (
    <section className="relative">
      <div className="absolute bg-neutral opacity-20 top-0 bottom-0 left-0 right-0 z-10"></div>
      <div className="relative z-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-16">
          <div className="text-center lg:text-left my-5">
            <h1 className="heading text-4xl sm:text-6xl xl:text-7xl font-bold mb-4">
              দেশের নাম্বার ওয়ান ডেলিভারি সার্ভিস
            </h1>

            <p className="text-accent text-3xl mb-8">সব সমাধান এক ক্লিকে</p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Link
                to={"/registration"}
                className="btn btn-primary text-base-100"
              >
                রেজিস্ট্রেশন করুন
              </Link>
              <Link
                to={"/"}
                className="btn border-primary text-primary hover:border-primary bg-transparent hover:bg-primary hover:text-base-100 flex items-center gap-1"
              >
                <FiPlayCircle className="text-xl" />
                <span>ডেলিভাই কিভাবে কাজ করে</span>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start items-end order-first lg:order-last pt-10">
            <img src={man} alt="DeliBhai Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
