import React from 'react'

   

const Button = ({ btntext,className})=>{
  return (
    <button className={`cursor-pointer bg-[#FFC247] text-[#02033B] font-medium text-[18px] leading-[22px] px-[20px] py-[12px] rounded-[16px] hover:bg-[#faf5f1] transition duration-400 ${className}`}>
      {btntext}
    </button>
  )
}

export default Button