import React from 'react';
import Button from '../Button';

import mobileimage from '../../assets/mobileimage.png';
import Flex from '../Flex';
import Image from '../Image';
import Container from '../Container';
const MobileSecurity = () => {
  return (
  <Container>
    <Flex className="mt-10 justify-between">
  <div className="w-[450px]">
      <h1 className="text-[#02033B] leading-[45px] font-extrabold text-[36px] mb-4">
        At Certo, mobile security is not an afterthought, it’s what we do.
      </h1>
      <p className="text-[#02033B] text-[20px] ">
        With years of experience in mobile security and spyware detection, our 
        products have helped countless people safeguard their devices and find 
        peace of mind.
      </p>
        <Button btntext={"Get Certo for iPhone"} className={" my-4"}/>
           <br/>
        <Button btntext={"Get Certo for Android"}/>
    </div>
     <div className="w-1/2">

       <Image src={mobileimage}/>
    </div>
    </Flex>
</Container>
  
   

  );

};

export default MobileSecurity;