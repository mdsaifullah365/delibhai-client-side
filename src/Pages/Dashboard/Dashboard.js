import React, { useState } from 'react';

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className='relative'>
      <div
        className={`${
          sidebar ? 'w-44 sm:w-48 lg:w-64' : 'w-0'
        } bg-accent float-none md:float-left transition-all absolute md:relative duration-200 ease-in-out h-screen overflow-y-scroll scrollbar scrollbar-hidden hover:scrollbar-auto shadow-xl z-30 `}>
        <div className='sticky top-0 bg-gray-700 mb-1 w-full h-10 text-base-100 text-center p-2'>
          Header
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu Menu
        </div>
        <div className='bg-gray-700 my-1 w-full h-10 text-base-100 text-center p-2'>
          Menu Menu
        </div>
        <div className='sticky bottom-0 bg-gray-700 mt-1 w-full h-10 text-base-100 text-center p-2'>
          Footer
        </div>
      </div>

      <div className='w-full h-screen relative'>
        <div
          onClick={() => {
            if (sidebar) {
              setSidebar(false);
            }
          }}
          className='absolute right-0 left-0 top-0 bottom-0 bg-black opacity-10 md:hidden'></div>
        <div className='relative z-20'>
          <div className='h-12 w-full bg-black text-base-100 sticky top-0'>
            <button onClick={() => setSidebar(!sidebar)}>Show/Hide</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
