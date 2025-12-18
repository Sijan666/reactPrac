import Flex from "../Flex";
import Image from "../Image";
import getCertoOne from "/src/assets/getCertoOne.png";
import getCertoTwo from "/src/assets/getCertoTwo.png";
import getCertoThree from "/src/assets/getCertoThree.png";
import getCertoFour from "/src/assets/getCertoFour.png";
import getCertoFive from "/src/assets/getCertoFive.png";
import getCertoSix from "/src/assets/getCertoSix.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../Button";

const GetCerto = () => {
  return (
    <div className="bg-[#E7EFFA] py-12 text-center">
      <h2 className="font-Inter font-extrabold text-4xl w-[738px] m-auto mb-10">
        Get your freedom back, stop mobile spyware today
      </h2>
      <div className="bg-[#ffffff] w-[840px] h-[872px] rounded-[48px] mx-auto drop-shadow-xl p-20">
        <Flex className={"justify-between"}>
          <div className="">
            <Image className={"m-auto"} src={getCertoOne} />
            <h3 className="font-Inter font-bold text-[19px] text-common py-4">
              Spyware detection
            </h3>
            <p className="font-Inter text-base text-common w-[195px]">
              Our advanced spyware detection engine can identify if a device
              contains spyware or bugging software.
            </p>
          </div>
          <div className="">
            <Image className={"m-auto"} src={getCertoTwo} />
            <h3 className="font-Inter font-bold text-[19px] text-common py-4">
              Keylogger detection
            </h3>
            <p className="font-Inter text-base text-common w-[195px]">
              Find malicious keyboards installed on your device that could allow
              someone to record things you type (e.g. passwords).
            </p>
          </div>
          <div className="">
            <Image className={"m-auto"} src={getCertoThree} />
            <h3 className="font-Inter font-bold text-[19px] text-common py-4">
              Find tracking apps
            </h3>
            <p className="font-Inter text-base text-common w-[195px]">
              Check which apps can access your location, microphone or camera.
              Get alerted if a known tracking app is installed.
            </p>
          </div>
        </Flex>
        <Flex className={"justify-between mt-20"}>
          <div className="">
            <Image className={"m-auto"} src={getCertoFour} />
            <h3 className="font-Inter font-bold text-[19px] text-common py-4">
              OS integrity check
            </h3>
            <p className="font-Inter text-base text-common w-[195px]">
              Analyze your operating system for signs of tampering that could
              compromise security, such as Jailbreaking.
            </p>
          </div>
          <div className="">
            <Image className={"m-auto"} src={getCertoFive} />
            <h3 className="font-Inter font-bold text-[19px] text-common py-4">
              Threat removal
            </h3>
            <p className="font-Inter text-base text-common w-[195px]">
              Our intelligent scan will either safely remove threats for you or
              provide easy-to-follow instructions.
            </p>
          </div>
          <div className="">
            <Image className={"m-auto"} src={getCertoSix} />
            <h3 className="font-Inter font-bold text-[19px] text-common py-4">
              Easy to use
            </h3>
            <p className="font-Inter text-base text-common w-[195px]">
              We create easy to use apps that can check your device for
              vulnerabilities in a matter of minutes.
            </p>
          </div>
        </Flex>
        <Flex className={"gap-x-6 mt-15 justify-center"}>
          <Button>
            Get Certo for iPhone
            <span className="inline-flex align-middle ml-3">
              <FaArrowRightLong />
            </span>
          </Button>
          <Button>Get Certo for Android</Button>
        </Flex>
      </div>
    </div>
  );
};

export default GetCerto;
