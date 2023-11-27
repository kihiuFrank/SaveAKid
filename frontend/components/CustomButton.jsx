import React from "react";

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={` text-[16px] leading-[26px]  text-white min-h-[52px] p-2 rounded-[10px] mt-8 text-lg font-medium text-center bg-indigo-600  ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
