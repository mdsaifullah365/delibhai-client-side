import React from 'react';
import { Outlet } from 'react-router-dom';

const MainDashboard = ({ sidebar, setSidebar }) => {
  return (
    <main className="w-full h-screen overflow-auto">
      {/* Overlay for mobile */}
      <div
        onClick={() => {
          if (sidebar) {
            setSidebar(false);
          }
        }}
        className={`${
          sidebar ? 'block md:hidden' : 'hidden'
        } absolute right-0 left-0 top-0 bottom-0 z-20 bg-black opacity-10`}
      ></div>

      {/* Top Bar */}
      <div className="w-full h-12 bg-gray-100 text-base-100 flex justify-between items-center px-4 sticky top-0">
        {/* Toggle Button */}
        <button
          onClick={() => setSidebar(!sidebar)}
          className={`${
            sidebar
              ? 'hidden sm:flex opacity-0 sm:opacity-100'
              : 'flex sm:hidden opacity-100 sm:opacity-0'
          } w-6 h-6 flex-col justify-evenly transition-opacity duration-200 ease-in-out`}
        >
          <div className="w-full h-1 bg-gray-900 rounded-3xl"></div>
          <div className="w-full h-1 bg-gray-900 rounded-3xl"></div>
          <div className="w-full h-1 bg-gray-900 rounded-3xl"></div>
        </button>
      </div>

      {/* Content Area */}
      <Outlet />
    </main>
  );
};

export default MainDashboard;
