import React from "react";
import Container from "../Container";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Image from "../Image";

const Banner = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/banner.png)] bg-cover bg-no-repeat bg-center py-[123px]">
        <Container>
          <div className="w-[45%]">
            <h1 className="font-inter font-extrabold text-[60px] text-[#02033B] leading-[75px]">
              Your mobile privacy is our mission
            </h1>
            <p className="mt-[52px] mb-24 leading-[30px] font-inter font-normal text-[20px] text-[#02033B]">
              Think your phone has been hacked? Our trusted apps make it easy
              for you to scan, detect and remove threats from your iPhone and
              Android devices.
            </p>
            <div className="flex">
              <Link to={"/"}>
                <button className="flex items-center gap-x-4 py-4 px-5 hover:bg-[#FFC247] outline-2 outline-[#02033B] rounded-[42px] font-inter font-extrabold text-[19px] text-[#02033B] cursor-pointer duration-300 hover:outline-[#FFC247]">
                  Get Certo for iPhone
                  <FaArrowRightLong className="text-[#000000]" />
                </button>
              </Link>
              <Link to={"/"}>
                <button className="py-4 px-5 hover:bg-[#FFC247] outline-2 outline-[#02033B] rounded-[42px] ml-12 font-inter font-extrabold text-[19px] text-[#02033B] cursor-pointer duration-300 hover:outline-[#FFC247] hover:outline-2">
                  Get Certo for Android
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
