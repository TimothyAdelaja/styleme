import React, { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import HeroImg from "../../assets/img/hero.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <div id="/">
      <div className="mx-auto overflow-hidden w-full sm:flex md:flex px-5 py-2 lg:px-12">
        <div className="text-center sm:text-left sm:flex sm:flex-col sm:items-start sm:w-1/2 md:flex md:flex-col md:items-start md:w-1/2">
          <p className="text-[3.2rem] text-[#1b1b1b] not-italic font-extrabold leading-tight">
            Revolutionize your{" "}
          </p>
          <p className="text-[3.2rem] text-[#fca311] not-italic font-bold leading-tight tracking-wide">
            Fashion Game{" "}
            <span className="text-[3.2rem] text-[#1b1b1b] not-italic font-bold">
              with
            </span>
          </p>{" "}
          <p className="text-[3.2rem] text-[#fca311] not-italic font-bold">
            StyleMe<span className="text-[#000]">.</span>
          </p>
          <p className="font-['Inter'] not-italic font-bold text-[#1b1b1b] text-[1rem] pt-2 tracking-tight">
            Upgrade your fashion style with <em>StyleMe</em> and{" "}
            <em>StandOut</em>
          </p>
          <a
            href="/signup"
            className="inline-flex px-4 py-2 justify-center items-center gap-1 rounded-2xl border border-[#fca31122]
             bg-[#14213d] text-[#fca311] font-['Manrope'] not-italic font-bold leading-normal text-sm
             transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 hover:bg-[#434d64] duration-300 mt-[2.6rem] mb-6"
          >
            Get Started <BiRightArrowAlt size={30} />
          </a>
        </div>
        <div className="sm:flex-shrink-0 sm:w-1/2 md:flex-shrink-0 md:w-1/2">
          <img
            className="w-full h-full"
            src={HeroImg}
            alt="hero-wardrobe-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
