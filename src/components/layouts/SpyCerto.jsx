import { FaArrowRightLong } from "react-icons/fa6"
import Button from "../Button"
import Container from "../Container"
import Flex from "../Flex"
import { Link } from "react-router-dom"

const SpyCerto = () => {
  return (
  <div className="bg-gradient-to-b from-[#2925CC] to-[#4B48E5] p-20">
   <Container>
    <div className="text-center">
         <h1 className="text-[34px] font-extrabold font-inter leading-[45px] text-white">Is someone spying on your phone?</h1>
     <p className="text-white text-[18px] font-inter py-[50px]">Find out with Certo</p>
    </div>
    <div className="text-center px-[385px] py-7">
        <Flex className={"gap-x-[24px]"}> 
            <Link to={"/iphone"}> <Button className={"flex items-center gap-x-4 text-[#02033B] text-[19px] font-extrabold font-inter hover:text-white hover:border-white hover:border-2"}>Get Certo for iPhone<FaArrowRightLong /></Button> </Link>
      <Link to={"/android"}> <Button className={"text-[#02033B] text-[19px] font-extrabold font-inter hover:text-white hover:border-white hover:border-2"}>Get Certo for Android</Button> </Link>
        </Flex>
    </div>
   </Container>
  </div>
  )
}

export default SpyCerto
