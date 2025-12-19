import React from "react";
import Button from "../Button";

import mobileimage from "../../assets/mobileimage.png";
import Flex from "../Flex";
import Image from "../Image";
import Container from "../Container";
const MobileSecurity = () => {
  return (
    <Container className={'py-[85px]'}>
      <Flex className="justify-between items-start">
        <div className="w-1/2">
          <h1 className="text-[#02033B] font-extrabold text-[36px] w-[470px]">At Certo, mobile security is not an afterthought, it’s what we do.</h1>
          <p className="text-[#02033B] text-[20px] pt-[45px] pb-[70px] w-[435px]">
            With years of experience in mobile security and spyware detection,
            our products have helped countless people safeguard their devices
            and find peace of mind.
          </p>
          <div className="">
            <Button btntext={"Get Certo for Android"} className={'block mb-5'}/>
            <Button btntext={"Get Certo for iPhone"}/>
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
