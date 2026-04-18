import React from "react";

const ChevronBack = () => {
  return (
    <svg
      className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 block"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 17L13 12L18 7M11 17L6 12L11 7"
        className="stroke-white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronBack;
