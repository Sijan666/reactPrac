import React from "react";
import Container from "../Container";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Image from "../Image";

const Banner = () => {
  return (
    <>
      {" "}
      <div className="bg-[url(/src/assets/banner.png)] bg-cover bg-no-repeat bg-center py-[123px]">
        <Container>
          <div className="w-[45%]">
            <h1 className="font-inter font-extrabold text-[60px] text-common leading-[75px]">
              Your mobile privacy is our mission
            </h1>
            <p className="mt-[52px] mb-24 leading-[30px] font-inter font-normal text-[20px] text-common">
              Think your phone has been hacked? Our trusted apps make it easy
              for you to scan, detect and remove threats from your iPhone and
              Android devices.
            </p>
            <div className="flex gap-x-4">
              <Link to={"/iphone"}>
                <button className="flex items-center gap-x-4 group py-4 px-5 hover:bg-[#FFC247] outline-2 outline-text-common rounded-[42px] font-inter font-extrabold text-[19px] text-common cursor-pointer duration-300 hover:outline-[#FFC247]">
                  Get Certo for iPhone{" "}
                  <FaArrowRightLong className="text-[#000000] opacity-0 group-hover:opacity-100 duration-300" />
                </button>
              </Link>
              <Link to={"/android"}>
                <button className="flex items-center gap-x-4 group py-4 px-5 hover:bg-[#FFC247] outline-2 outline-text-common rounded-[42px] font-inter font-extrabold text-[19px] text-common cursor-pointer duration-300 hover:outline-[#FFC247]">
                  Get Certo for Android
                  <FaArrowRightLong className="text-[#000000] opacity-0 group-hover:opacity-100 duration-300" />
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
