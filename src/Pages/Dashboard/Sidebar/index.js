import React from 'react';
import logo from '../../../assets/images/logo.png';
import miniLogo from '../../../assets/images/miniLogo.jpg';
import SidebarLink from './SidebarLink';

const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <section
      className={`${
        sidebar ? 'w-44 sm:w-0' : 'w-0 sm:w-48 lg:w-64'
      } bg-gray-900 absolute md:relative transition-all duration-200 ease-in-out h-screen overflow-y-scroll scrollbar scrollbar-hidden hover:scrollbar-auto shadow-xl z-30 `}
    >
      {/* Sidebar Header */}
      <header className="sticky top-0 mb-1 w-full text-base-100 text-center px-4 py-3 flex justify-between items-center border-b border-gray-700">
        <img src={miniLogo} alt="Logo" className="w-12 rounded-full" />
        <div
          onClick={() => {
            setSidebar(!sidebar);
          }}
          className="bg-white text-black p-1 rounded-full w-8 h-8 text-xl  flex justify-center items-center cursor-pointer"
        >
          <p>X</p>
        </div>
      </header>

      {/* Sidebar Menu */}
      <SidebarLink to="/admin-dashboard">Home</SidebarLink>
      <SidebarLink to="/admin-dashboard/add-item">Add Item</SidebarLink>
      <SidebarLink to="/admin-dashboard/add-category">Add Category</SidebarLink>
      <SidebarLink to="/admin-dashboard/manage-items">Manage Items</SidebarLink>

      {/* Sidebar Footer */}
      <footer className="absolute bottom-0 mt-1 w-full h-10 text-base-100 text-center p-2">
        <img src={logo} alt="Logo" className="w-20" />
      </footer>
    </section>
  );
};

export default Sidebar;
