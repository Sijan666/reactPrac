import React from "react";

const Button = ({ btntext, className }) => {
  return (
    <button
      className={`cursor-pointer bg-[#FFC247] text-[#02033B] font-medium text-[18px] leading-[22px] px-5 py-3 rounded-2xl hover:bg-[#faf5f1] transition duration-400 ${className}`}
    >
      {btntext}
    </button>
  );
};

export default Button;
