import React, { useState } from "react";
import logo from "../../images/logo.png";
import miniLogo from "../../images/miniLogo.jpg";

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="relative">
      <div
        className={`${
          sidebar ? "w-44 sm:w-0" : "w-0 sm:w-48 lg:w-64"
        } bg-accent float-none md:float-left transition-all absolute md:relative duration-200 ease-in-out h-screen overflow-y-scroll scrollbar scrollbar-hidden hover:scrollbar-auto shadow-xl z-30 `}
      >
        <div className="sticky top-0 bg-gray-700 mb-1 w-full text-base-100 text-center px-4 py-3 flex justify-between items-center">
          <img src={miniLogo} alt="Logo" className="w-12 rounded-full" />
          <div
            onClick={() => {
              setSidebar(!sidebar);
            }}
            className="bg-white text-black p-1 rounded-full w-8 h-8 text-xl  flex justify-center items-center cursor-pointer"
          >
            <p>X</p>
          </div>
        </div>

        <div className="absolute bottom-0 bg-gray-700 mt-1 w-full h-10 text-base-100 text-center p-2">
          <img src={logo} alt="Logo" className="w-20" />
        </div>
      </div>

      <div className="w-full h-screen relative">
        <div
          onClick={() => {
            if (sidebar) {
              setSidebar(false);
            }
          }}
          className="absolute right-0 left-0 top-0 bottom-0 bg-black opacity-10 md:hidden"
        ></div>
        <div className="relative z-20 p-4">
          <div className="w-full bg-gray-100 text-base-100 sticky left-0 top-0 p-4">
            <button
              onClick={() => setSidebar(!sidebar)}
              className="w-6 h-6 flex flex-col justify-evenly"
            >
              <div className="w-full h-1 bg-gray-900 rounded-3xl"></div>
              <div className="w-full h-1 bg-gray-900 rounded-3xl"></div>
              <div className="w-full h-1 bg-gray-900 rounded-3xl"></div>
            </button>
          </div>
          <p>
            Welcome To Dashboard Welcome To Dashboard Welcome To Dashboard
            Welcome To Dashboard Welcome To Dashboard Welcome To Dashboard
            Welcome To Dashboard Welcome To Dashboard Welcome To Dashboard
            Welcome To Dashboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
