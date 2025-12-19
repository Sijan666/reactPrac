import { FaArrowRightLong } from "react-icons/fa6"
import Button from "../Button"
import Container from "../Container"
import Flex from "../Flex"
import { Link } from "react-router-dom"

const SpyCerto = () => {
  return (
  <div className="bg-linear-to-b from-[#2925CC] to-[#4B48E5] p-20">
    <Container>
      <div className="text-center">
          <h1 className="text-[34px] font-extrabold font-inter leading-[45px] text-white">Is someone spying on your phone?</h1>
          <p className="text-white text-[18px] font-inter py-[50px]">Find out with Certo</p>
      </div>
            <div className="flex gap-x-6 mt-15 justify-center">
              <Link to={"/iphone"}>
                <button className="flex items-center gap-x-4 text-white hover:text-[#000000] group py-3 px-5 duration-300 text-[19px] font-Inter font-extrabold rounded-[42px] cursor-pointer bg-transparent border-2 hover:bg-[#FFC247] hover:border-[#FFC247]">
                  Get Certo for iPhone
                  <FaArrowRightLong className="group-hover:text-[#000000] text-white opacity-0 group-hover:opacity-100 duration-300" />
                </button>
              </Link>
              <Link to={"/android"}>
                <button className="flex items-center gap-x-4 text-white hover:text-[#000000] group py-3 px-5 duration-300 text-[19px] font-Inter font-extrabold rounded-[42px] cursor-pointer bg-transparent border-2 hover:bg-[#FFC247] hover:border-[#FFC247]">
                  Get Certo for Android
                  <FaArrowRightLong className="group-hover:text-[#000000] text-white opacity-0 group-hover:opacity-100 duration-300 " />
                </button>
              </Link>
            </div>
    </Container>
  </div>
  )
}

export default SpyCerto
