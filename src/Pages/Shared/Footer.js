import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* First Part */}
      <div className="bg-black text-base-100">
        <div className="footer max-w-4xl mx-auto p-10">
          <div>
            <span className="text-base-100 text-2xl font-semibold mb-3">
              ডেলিভাই প্লাটফর্ম
            </span>
            <Link to={"/"} className="link link-hover text-base">
              ডেলিভাই সম্পর্কে
            </Link>
            <Link to={"/"} className="link link-hover text-base">
              শর্তাবলী
            </Link>
            <Link to={"/"} className="link link-hover text-base">
              গোপনীয়তা নীতি
            </Link>
          </div>
          <div>
            <span className="text-base-100 text-2xl font-semibold mb-3">
              আয় করুন
            </span>
            <Link to={"/"} className="link link-hover text-base">
              বাইক দিয়ে
            </Link>
            <Link to={"/"} className="link link-hover text-base">
              অটো রিকশা দিয়ে
            </Link>
            <Link to={"/"} className="link link-hover text-base">
              গাড়ী দিয়ে
            </Link>
          </div>
          <div>
            <span className="text-base-100 text-2xl font-semibold mb-3">
              হেল্প
            </span>
            <Link to={"/"} className="link link-hover text-base">
              সাপোর্ট সেন্টার
            </Link>
            <Link to={"/"} className="link link-hover text-base">
              হেল্প লাইন: 01823540325
            </Link>
            <Link to={"/"} className="link link-hover text-base">
              অন্যান্য
            </Link>
          </div>
          <div>
            <span className="text-base-100 text-2xl font-semibold mb-3">
              সোশাল মিডিয়া
            </span>
            <Link to={"/"} className="link link-hover text-base">
              ফেইসবুক গ্রুপ
            </Link>
            <Link to={"/"} className="link link-hover text-base">
              ফেইসবুক পেইজ
            </Link>
            <Link to={"/"} className="link link-hover text-base">
              ইউটিউব
            </Link>
          </div>
        </div>
      </div>

      {/* Second Part */}
      <div class="footer max-w-4xl px-10 py-5 mx-auto items-center text-black">
        <div class="items-center grid-flow-col">
          <p className="text-xl">
            © {new Date().getFullYear()} Delibhai. All Right Reserved.
          </p>
        </div>
        <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end"></div>
      </div>
    </footer>
  );
};

export default Footer;
