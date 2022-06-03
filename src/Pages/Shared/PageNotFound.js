import React from "react";
import error from "../../images/error.svg";

const PageNotFound = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-96px)] lg:h-[calc(100vh-96px)] flex justify-center items-center overflow-hidden px-6">
      <img
        src={error}
        alt="Error"
        className="max-w-[250px] sm:max-w-md md:max-w-xl"
      />
    </div>
  );
};

export default PageNotFound;
