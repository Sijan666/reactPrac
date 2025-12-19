import React, { useRef } from 'react';
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Images from './Images';



const Home = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    { name: "colinandmandy94", text: "Does exactly what it says. Clear to read and understand. This is now the second iPhone we've used it on and would certainly recommend this app." },
    { name: "Jennifer Black", text: "Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check is a great bonus." },
    { name: "Phillip Colligan", text: "This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive." },
    { name: "Leslie Carrillo", text: "I wish I had found this app sooner. It's top-notch and provides everything you need to keep your parts safe. Easy to use and very reliable." }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <div className="bg-linear-to-b from-[#F7C95F] to-[#FDB235] min-h-screen w-full flex flex-col font-sans py-16 overflow-hidden">
      
      <div className="max-w-[1320px] mx-auto w-full px-6 grow flex flex-col justify-center relative">
        
        <div className="mb-12">
          <h1 className="text-[36px] md:text-[42px] font-black text-[#1A1A1A] leading-[1.2] max-w-[600px] tracking-tight">
            Loved by thousands of iPhone <br /> 
            and Android users alike
          </h1>
        </div>

        {/* slider*/}
        <div className="testimonial-slider-container relative">
          
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="px-3 outline-none">
                <div className="bg-white rounded-[35px] py-12 px-10 h-[300px] flex flex-col justify-between shadow-md">
                  <div>
                    {/* star */}
                    <div className="flex gap-1 mb-6 text-[#FFB82B] text-2xl">
                      ★★★★★
                    </div>
                    {/* text style */}
                    <p className="text-[#1A1A1A] text-[17px] font-medium leading-[1.6]">
                      {item.text}
                    </p>
                  </div>
                  {/* name bold */}
                  <p className="font-black text-black text-[18px]">{item.name}</p>
                </div>
              </div>
            ))}
          </Slider>

          {/* button */}
          <button 
            onClick={() => sliderRef.current?.slickPrev()} 
            className="absolute left-[-5px] md:left-[-60px] top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white p-4 rounded-full transition-all text-white hover:text-black"
          >
            <IoIosArrowBack size={26} />
          </button>
          <button 
            onClick={() => sliderRef.current?.slickNext()} 
            className="absolute right-[-5px] md:right-[-60px] top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white p-4 rounded-full transition-all text-white hover:text-black"
          >
            <IoIosArrowForward size={26} />
          </button>
        </div>

        {/* logo */}
        <div className="mt-24 border-t border-black/10 pt-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <span className="font-bold text-black text-lg">Featured in:</span>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 opacity-90 grayscale brightness-0">
                 <div className="flex flex-col items-center">
                 <span className="font-black text-4xl italic">CNBC</span>
               </div>
               {/* Financial Times */}
                 <span className="flex items-center gap-2 font-serif font-black uppercase text-2xl">FINANCIAL TIMES</span>
               {/* New York Post */}
               <span className="font-serif italic font-black text-2xl uppercase">New York Post</span>
               {/* Reader's Digest */}
               <span className="font-serif font-bold text-2xl italic">Reader's Digest</span>
               {/* ZDNet */}
               <span className="font-black italic text-4xl">ZDNet</span>
            </div>   
          </div>
        </div>
      </div>
      {/* css for slider */}
      <style dangerouslySetInnerHTML={{__html: `
        .slick-list { overflow: visible !important; }
        .slick-track { display: flex !important; }
        .slick-slide { height: inherit !important; }
      ` }} />
    </div>
  );
};
export default Home;



