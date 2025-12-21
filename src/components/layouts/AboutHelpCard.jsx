import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutHelpCard = () => {
  return (
    <Container>
      <div className="my-[84px] ">
        <Flex className={"gap-x-[100px] justify-center"}>
          <div className="relative p-12 rounded-[48px] cursor-pointer group">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-[#F7C95F] to-[#FDB235] opacity-0 group-hover:opacity-100 duration-400 rounded-[48px]" />
            <div className="relative z-60">
              <h4 className="font-inter font-extrabold text-[23px] text-common">
                Read our story
              </h4>
              <h5 className="w-[350px] font-inter font-normal text-[16px] text-common leading-6 mt-6 mb-12">
                Find out why thousands trust Certo to secure their mobile world.
              </h5>
              <Link to={"/"}>
                <button className="cursor-pointer flex items-center py-4 px-5 gap-x-2 outline-2 outline-common rounded-[42px] font-inter font-extrabold text-[15px] text-common group-hover:outline-[#4335DE] group-hover:bg-[#4335DE] bg-transparent group-hover:text-white transition-colors duration-300">
                  About us <FaLongArrowAltRight />
                </button>
              </Link>
            </div>
          </div>

          <div className="relative py-12 px-[100px] rounded-[48px] cursor-pointer group">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-[#F7C95F] to-[#FDB235] opacity-0 group-hover:opacity-100 duration-400 rounded-[48px]" />
            <div className="relative z-60">
              <h4 className="font-inter font-extrabold text-[23px] text-common">
                Help Center
              </h4>
              <h5 className="w-[200px] font-inter font-normal text-[16px] text-common leading-6 mt-6 mb-12">
                Help topics, getting started guides and FAQs.
              </h5>
              <Link to={"/"}>
                <button className="cursor-pointer flex items-center py-4 px-5 gap-x-2 outline-2 outline-common rounded-[42px] font-inter font-extrabold text-[15px] text-common group-hover:outline-[#4335DE] group-hover:bg-[#4335DE] bg-transparent group-hover:text-white transition-colors duration-300">
                  Visit help center
                </button>
              </Link>
            </div>
          </div>
        </Flex>
      </div>
    </Container>
  );
};

export default AboutHelpCard;
