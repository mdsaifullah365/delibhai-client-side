import React from "react";

const ToogleView = ({ gridView, setGridView }) => {
  return (
    <div className="container m-2">
      <div className="flex justify-between items-center">
        <div className="text-xl leading-8 font-semibold">আমাদের মেন্যু</div>
        <div className="w-14 h-6 flex justify-between gap-2">
          <div
            onClick={() => setGridView(false)}
            className="w-6 h-6 p-[3px] flex flex-col gap-[2px] cursor-pointer"
          >
            <div
              className={`w-full h-full ${
                gridView ? "bg-[#bebebe]" : "bg-primary"
              } rounded-[1px]`}
            ></div>
            <div
              className={`w-full h-full ${
                gridView ? "bg-[#bebebe]" : "bg-primary"
              } rounded-[1px]`}
            ></div>
          </div>
          <div
            onClick={() => setGridView(true)}
            className="w-6 h-6 p-[3px] grid grid-cols-2 gap-[2px] cursor-pointer"
          >
            <div
              className={`w-full h-full ${
                gridView ? "bg-primary" : "bg-[#bebebe]"
              } rounded-[1px]`}
            ></div>
            <div
              className={`w-full h-full ${
                gridView ? "bg-primary" : "bg-[#bebebe]"
              } rounded-[1px]`}
            ></div>
            <div
              className={`w-full h-full ${
                gridView ? "bg-primary" : "bg-[#bebebe]"
              } rounded-[1px]`}
            ></div>
            <div
              className={`w-full h-full ${
                gridView ? "bg-primary" : "bg-[#bebebe]"
              } rounded-[1px]`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToogleView;
