import React from "react";
import Button from "../Button";

import mobileimage from "../../assets/mobileimage.png";
import Flex from "../Flex";
import Image from "../Image";
import Container from "../Container";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";



const MobileSecurity = () => {
  return (
    <Container className={'py-[85px]'}>
      <Flex className="justify-between items-start">
        <div className="w-1/2">
          <h1 className="text-common font-extrabold text-[36px] w-[470px]">At Certo, mobile security is not an afterthought, it’s what we do.</h1>
          <p className="text-common text-[20px] pt-[45px] pb-[70px] w-[435px]">
            With years of experience in mobile security and spyware detection,
            our products have helped countless people safeguard their devices
            and find peace of mind.
          </p>
          {/* <div className="">
            <Button btntext={"Get Certo for Android"} className={'block mb-5'}/>
            <Button btntext={"Get Certo for iPhone"}/>
          </div> */}
            <div className="">
              <Link to={"/iphone"}>
                <button className="flex items-center mb-6 gap-x-4 group py-3 px-5 duration-300 text-[19px] font-Inter font-extrabold rounded-[42px] cursor-pointer bg-transparent border-2 hover:bg-[#FFC247] hover:border-[#FFC247]">
                  Get Certo for iPhone
                  <FaArrowRightLong className="text-[#000000] opacity-0 group-hover:opacity-100 duration-300" />
                </button>
              </Link>
              <Link to={"/android"}>
                <button className="flex items-center gap-x-4 group py-3 px-5 duration-300 text-[19px] font-Inter font-extrabold rounded-[42px] cursor-pointer bg-transparent border-2 hover:bg-[#FFC247] hover:border-[#FFC247]">
                  Get Certo for Android
                  <FaArrowRightLong className="text-[#000000] opacity-0 group-hover:opacity-100 duration-300" />
                </button>
              </Link>
            </div>
        </div>
        <div className="w-1/2">
          <Image src={mobileimage} />
        </div>
      </Flex>
    </Container>
  );
};

export default MobileSecurity;
