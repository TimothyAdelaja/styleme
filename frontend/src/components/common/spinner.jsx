import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="inline-block absolute w-6 h-6">
      <div
        className="w-6 h-6 border-2 border-[#000] rounded-full border-t-2 
      border-transparent border-r-2 animate-spin"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
