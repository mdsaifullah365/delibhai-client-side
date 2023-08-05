import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomLink from './CustomLink';
import logo from '../../assets/images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  // useAuthState
  const [user] = useAuthState(auth);

  // Navigate
  const navigate = useNavigate();

  // DropdownStates
  const [avatarDropdown, setAvatarDropdown] = useState(false);
  const [hamburgerDropdown, setHamburgerDropdown] = useState(false);

  // Event Handlers
  // Log Out
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
    navigate('/', { replace: true });
  };

  // Toggle dropdown
  const toggleAvatarDropdown = () => {
    setAvatarDropdown(!avatarDropdown);
  };
  const toggleHamburgerDropdown = () => {
    setHamburgerDropdown(!hamburgerDropdown);
  };
  // Nav Links
  const navLinks = (
    <>
      <CustomLink onClick={toggleHamburgerDropdown} to={'/'}>
        হোম পেইজ
      </CustomLink>

      <CustomLink
        onClick={toggleHamburgerDropdown}
        to={'https://dev-delibhai.netlify.app'}
      >
        নিউ ডেলিভাই
      </CustomLink>

      <li className={`text-black bg-transparent text-sm`}>
        <a href='https://dev-delibhai.netlify.app'>
          নিউ ডেলিভাই
        </a>
      </li>

      <CustomLink
        onClick={toggleHamburgerDropdown}
        to={'/projects/delifood/menu'}
      >
        ডেলিফুড মেন্যু
      </CustomLink>
      <CustomLink onClick={toggleHamburgerDropdown} to={'/about-us'}>
        আমাদের সম্পর্কে
      </CustomLink>

      {user ? (
        <>
          {/* Avatar Dropdown */}
          <div className="dropdown">
            <label
              onClick={toggleAvatarDropdown}
              tabIndex="2"
              class="avatar my-1 ml-4 mr-6 cursor-pointer"
            >
              <div class="w-10 rounded-full bg-accent hover:ring ring-primary ring-offset-base-100 ring-offset-2">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt={user?.displayName} />
                ) : (
                  <p className="uppercase text-white text-2xl text-center mt-1">
                    {user?.displayName && user.displayName[0]}
                  </p>
                )}
              </div>
            </label>

            <ul
              tabIndex="2"
              className={`${
                avatarDropdown && 'hidden'
              } menu menu-compact dropdown-content mt-3  p-2 shadow bg-accent text-white rounded-box w-52 right-0`}
            >
              <div className="avatar mx-auto mt-2 mb-3">
                <div class="w-28 rounded-full bg-black">
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt={user?.displayName} />
                  ) : (
                    <p className="text-white text-7xl text-center mt-5">
                      {user?.displayName && user.displayName[0]}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-center text-md mb-1">{user?.displayName}</p>

              <Link
                onClick={toggleAvatarDropdown}
                className="mx-auto btn btn-primary font-light btn-sm mb-3"
                to="dashboard"
              >
                প্রোফাইল দেখুন
              </Link>
              <hr />
              <br />
              <li className="ml-auto">
                <button className="hover:text-primary" onClick={logOut}>
                  লগআউট{' '}
                  <span>
                    <FiLogOut />
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <CustomLink onClick={toggleHamburgerDropdown} to={'/login'}>
            লগইন করুন
          </CustomLink>

          <Link
            onClick={toggleHamburgerDropdown}
            to={'/registration'}
            className="btn btn-primary text-base-100 mt-4 lg:mt-0 lg:ml-8"
          >
            রেজিস্ট্রেশন করুন
          </Link>
        </>
      )}
    </>
  );

  return (
    <header className="bg-base-100 sticky top-0 shadow-sm z-50">
      <div className="container flex justify-between items-center h-12 sm:h-24">
        <div className="flex items-center gap-5">
          <div className="dropdown">
            <label
              tabIndex="0"
              onClick={toggleHamburgerDropdown}
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
                hamburgerDropdown && 'hidden'
              } menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52`}
            >
              {navLinks}
            </ul>
          </div>
          <Link to={'/'}>
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
