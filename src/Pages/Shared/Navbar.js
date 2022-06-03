import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import logo from "../../images/logo.png";

const Navbar = () => {
  // DropdownState
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Nav Links
  const navLinks = (
    <>
      <CustomLink onClick={toggleDropdown} to={"/"}>
        হোম পেইজ
      </CustomLink>

      <CustomLink onClick={toggleDropdown} to={"/about-us"}>
        আমাদের সম্পর্কে
      </CustomLink>

      <CustomLink onClick={toggleDropdown} to={"/login"}>
        লগইন করুন
      </CustomLink>

      <Link
        onClick={toggleDropdown}
        to={"/registration"}
        className="btn btn-primary text-base-100 mt-4 lg:mt-0 lg:ml-8"
      >
        রেজিস্ট্রেশন করুন
      </Link>
    </>
  );

  return (
    <header className="bg-base-100 sticky top-0 shadow-md z-50">
      <div className="container flex justify-between items-center h-20 sm:h-24">
        <div className="flex items-center gap-5">
          <div className="dropdown">
            <label
              tabIndex="0"
              onClick={toggleDropdown}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className={`${
                showDropdown && "hidden"
              } menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52`}
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"}>
            <img src={logo} alt="deliBhai Logo" className="w-28 sm:w-44" />
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0 gap-2">{navLinks}</ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
