import React from "react";

const ChevronFront = () => {
  return (
    <svg
      className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 block "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 17L11 12L6 7M13 17L18 12L13 7"
        className="stroke-orange-600"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronFront;
