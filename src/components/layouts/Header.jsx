import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '/src/assets/Logo.png'
import Button from '../Button'
import { Link } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='py-5 bg-[#F3F8FF]'>
      <Container>
        <Flex className={" gap-5 justify-between"}>
              <div className="">
                <Link to={'/'}>
                  <Image src={Logo}/>
                </Link>
              </div>
              <div className="">
                <ul className='flex items-center gap-x-[49px] '>
                    <Link to="/iphone">
                    <li className='text-[19px] font-extrabold hover:text-[#4335DE] p-3 rounded-[42px]'>iPhone</li>
                    </Link>

                    <Link to="/About">
                    <li className='text-[19px] font-extrabold hover:text-[#4335DE] p-3 rounded-[42px]'>Android</li>
                    </Link>

                    <Link to="/Help">
                    <li className='text-[19px] font-extrabold hover:text-[#4335DE] p-3 rounded-[42px]'>Help</li>
                    </Link>

                    <Link to="/Company">
                    <li className="flex items-center text-[19px] font-extrabold hover:text-[#4335DE] p-3 rounded-[42px]">
                        Company <FaAngleDown />
                    </li>
                    </Link>
                </ul>
              </div>
              <div className="">
                <Button className={"text-[15px] text-white font-extrabold"} btntext={"Sign in"}/>
              </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Header