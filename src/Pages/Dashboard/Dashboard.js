import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../images/logo.png';
import miniLogo from '../../images/miniLogo.svg';
import CustomLink from './CustomLink';

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className='relative flex'>
      {/* Sidebar */}
      <section
        className={`${
          sidebar ? 'w-44 sm:w-0' : 'w-0 sm:w-48 lg:w-64'
        } bg-gray-900 absolute md:relative transition-all duration-200 ease-in-out h-screen overflow-y-scroll scrollbar scrollbar-hidden hover:scrollbar-auto shadow-xl z-30 `}>
        {/* Sidebar Header */}
        <header className='sticky top-0 mb-1 w-full text-base-100 text-center px-4 py-3 flex justify-between items-center border-b border-gray-700'>
          <img src={miniLogo} alt='Logo' className='w-12 rounded-full' />
          <div
            onClick={() => {
              setSidebar(!sidebar);
            }}
            className='bg-white text-black p-1 rounded-full w-8 h-8 text-xl  flex justify-center items-center cursor-pointer'>
            <p>X</p>
          </div>
        </header>

        {/* Sidebar Menu */}
        <CustomLink to='/admin-dashboard'>Home</CustomLink>
        <CustomLink to='/admin-dashboard/add-item'>Add Item</CustomLink>

        {/* Sidebar Footer */}
        <footer className='absolute bottom-0 mt-1 w-full h-10 text-base-100 text-center p-2'>
          <img src={logo} alt='Logo' className='w-20' />
        </footer>
      </section>

      {/* Main Dashboard Area */}
      <main className='w-full h-screen relative overflow-auto'>
        <div
          onClick={() => {
            if (sidebar) {
              setSidebar(false);
            }
          }}
          className={`${
            sidebar ? 'block md:hidden' : 'hidden'
          } absolute right-0 left-0 top-0 bottom-0 z-20 bg-black opacity-10`}></div>
        <div
          className={`${'w-full'} relative z-10 transition-all duration-200 ease-in-out`}>
          <div className='w-full h-12 bg-gray-100 text-base-100 sticky left-0 top-0 flex justify-between items-center px-4'>
            {/* Toggle Button */}
            <button
              onClick={() => setSidebar(!sidebar)}
              className={`${
                sidebar
                  ? 'hidden sm:flex opacity-0 sm:opacity-100'
                  : 'flex sm:hidden opacity-100 sm:opacity-0'
              } w-6 h-6 flex-col justify-evenly transition-opacity duration-200 ease-in-out`}>
              <div className='w-full h-1 bg-gray-900 rounded-3xl'></div>
              <div className='w-full h-1 bg-gray-900 rounded-3xl'></div>
              <div className='w-full h-1 bg-gray-900 rounded-3xl'></div>
            </button>
          </div>

          {/* Content Area */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
