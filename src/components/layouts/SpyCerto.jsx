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
      <div className="text-center px-[385px] py-7">
          <Flex className={"gap-x-6"}> 
              <Link to={"/iphone"}>
                <Button className={"flex items-center gap-x-4"}>Get Certo for iPhone
                  <FaArrowRightLong />
                </Button> 
              </Link>
              <Link to={"/android"}>
                <Button className={""}>Get Certo for Android</Button>
              </Link>
          </Flex>
      </div>
    </Container>
  </div>
  )
}

export default SpyCerto
