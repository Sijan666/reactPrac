import React from "react";
import Container from "../Container";
// import Flex from "../Flex";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { CgYoutube } from "react-icons/cg";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#050B3A] text-white px-10 py-16">
        <Container>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Scan. Detect. Remove.
              </h2>

              <div className="flex gap-x-4 mb-6 items-center">
                <div className="bg-white text-black size-10 flex items-center justify-center rounded">
                  <BsTwitter />
                </div>
                <div className="bg-white text-black size-10 flex items-center justify-center rounded">
                  <FaFacebook />
                </div>
                <div className=" bg-white text-black size-10 flex items-center justify-center rounded">
                  <FaYoutube />
                </div>
              </div>

              <div className="text-sm text-gray-400 space-x-3">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>

              <p className="text-xs text-gray-500 mt-6">
                © 2022 Certo Software Limited. Registered in England & Wales.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-6 border-b border-white/20 pb-2">
                Certo
              </h2>

              <ul className="space-y-3 text-yellow-400">
                <li>
                  <Link to={'/iphone'}>
                  — iPhone
                  </Link>
                </li>
                <li>
                  <Link to={'/android'}>
                  — Android
                  </Link>
                </li>
                <li>
                  <Link to={'/help'}>
                  — Help
                  </Link>
                </li>
                <li>
                  <Link to={'/about'}>
                  — About
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                  — Insights
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-[#FFC44D] rounded-2xl p-8 text-black">
              <h3 className="text-lg font-bold mb-2">
                Sign up to our newsletter
              </h3>

              <p className="text-sm mb-4">
                Receive the latest mobile security news, exclusive discounts &
                offers straight to your inbox!
              </p>

              <div className="flex bg-white rounded-full overflow-hidden">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-4 py-2 outline-none text-sm"
                />
                <button className="bg-[#050B3A] text-white px-6 text-sm cursor-pointer">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="text-[12px] w-[586px] h-[45px] mb-auto mt-[150px] pl-[60px]">
            <p>
              Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
              registered in the U.S. and other countries. App Store is a service
              mark of Apple Inc. Android, Google Play and the Google Play logo
              are trademarks of Google LLC.
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
