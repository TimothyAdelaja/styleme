import React from "react";
import TwitterIcon from "../../assets/img/footer-images/twitter.png";
import LinkedInIcon from "../../assets/img/footer-images/linkedin.png";
import FacebookIcon from "../../assets/img/footer-images/facebook.png";

const Footer = () => {
  return (
    <div className="flex flex-col mx-auto w-full pt-[1.6rem] px-0 gap-[3.2rem] items-stretch bg-[#16263f]">
      <div className="flex flex-col items-center justify-around gap-[2.4rem] px-8 md:flex md:flex-row md:items-start">
        <div className="flex flex-col items-center gap-[1.2rem] w-60 md:items-start">
          <h2 className="text-[#FEFEFE] text-center font-['Outfit'] text-3xl not-italic font-bold leading-normal md:text-left">
            StyleMe
          </h2>
        </div>
        <nav className="flex flex-col items-start justify-center">
          {/* Product -1  */}
          <p className="text-[#98A2B3] items-start font-['Manrope'] text-[0.6rem] not-italic font-semibold leading-5 cursor-pointer">
            Product
          </p>
          <ul className="flex flex-col items-start gap-[0.6rem] text-[#EAECF0]">
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                Features
              </a>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col  items-start  justify-center">
          {/* Company - 2 */}
          <p className="text-[#98A2B3] items-start font-['Manrope'] text-[0.6rem] not-italic font-semibold leading-5 cursor-pointer">
            Company
          </p>
          <ul className="flex flex-col items-start gap-[0.6rem] text-[#EAECF0]">
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer "
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                Press
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col items-start justify-center">
          {/* Resources - Part 3 */}
          <p className="text-[#98A2B3] items-start font-['Manrope'] text-[0.6rem] not-italic font-semibold leading-5 cursor-pointer">
            Resources
          </p>
          <ul className="flex flex-col items-start gap-[0.6rem] text-[#EAECF0]">
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer "
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                Newsletter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                Help Centre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                Support
              </a>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col items-start justify-center">
          {/* Social - 4 */}
          <p className="text-[#98A2B3] items-start font-['Manrope'] text-[0.6rem] not-italic font-semibold leading-5 cursor-pointer">
            Social
          </p>
          <ul className="flex flex-col items-start gap-[0.6rem] text-[#EAECF0]">
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col items-start justify-center">
          {/* Legal - 5 */}
          <p className="text-[#98A2B3] items-start font-['Manrope'] text-[0.6rem] not-italic font-semibold leading-5 cursor-pointer">
            Legal
          </p>
          <ul className="flex flex-col items-start gap-[0.6rem] text-[#EAECF0]">
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                Cookies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                Licenses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#EAECF0] font-['Manrope'] text-xs not-italic font-normal leading-5 cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Footer base */}
      <div
        className="flex py-[2.4rem] px-[0rem] flex-col items-center 
      gap-[3.2rem] bg-[#08123B]"
      >
        <div className="flex items-center justify-between gap-[1.6rem]">
          <div className="text-[#FFF] font-['Manrope'] text-xs not-italic font-normal leading-4">
            <p>&copy; StyleMe Inc. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-[1.2rem]">
            <ul className="flex items-end justify-end gap-4">
              <li>
                <a href="#" className="cursor-pointer">
                  <img
                    className="w-[1.2rem] h-[1.2rem]"
                    src={TwitterIcon}
                    alt="Twitter icon"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  <img
                    className="w-[1.2rem] h-[1.2rem]"
                    src={LinkedInIcon}
                    alt="LinkedIn icon"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  <img
                    className="w-[1.2rem] h-[1.2rem]"
                    src={FacebookIcon}
                    alt="Facebook icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
