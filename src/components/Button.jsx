const Button = ({ btntext, className ,children }) => {
  return (

    <>
      <button className={`py-4 px-5 bg-[#4335DE] rounded-[42px] ${className}`}>
        {btntext}
      </button>
      
      {/* toba apu */}
      {/* <div className={`py-3 px-5 duration-300 text-[19px] font-Inter font-extrabold rounded-[42px] cursor-pointer bg-transparent border-2 hover:bg-[#FFC247] hover:border-[#FFC247] ${className}`}>{children}</div> */}
      {/* toba apu */}
      
      {/* farhana apu */}
      {/* <button
      className={`cursor-pointer bg-[#FFC247] text-[#02033B] font-medium text-[18px] leading-[22px] px-5 py-3 rounded-2xl hover:bg-[#faf5f1] transition duration-400 ${className}`}
    >
      {btntext}
      </button> */}
      {/* farhana apu */}

      {/* najat apu */}
      <div className={`py-3 px-5 duration-300 text-[19px] font-Inter font-extrabold rounded-[42px] cursor-pointer bg-[#FFC247] border-2 border-[#FFC247] hover:bg-transparent hover:border-black ${className}`}>{children}</div>
      {/* najat apu */}
    </>
  );
};


export default Button;
