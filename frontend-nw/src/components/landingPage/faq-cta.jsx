import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import CtaCentre from "../../assets/img/cta-images/cta-centre.png";
import CtaRight from "../../assets/img/cta-images/cta-right.png";
import CtaLeft from "../../assets/img/cta-images/cta-left.png";
import { accordions } from "./data";
import Accordion from "./accordion";
import { Link, animateScroll as scroll } from "react-scroll";

const FAQCTA = () => {
  return (
    <div id="faq-cta" className="mt-20 bg-[#E1E6EF] px-8 lg:px-12">
      <div className="mx-auto flex flex-col items-center gap-3 pt-10">
        <h2 className="text-[#08123B] font-['Manrope'] text-2xl not-italic font-extrabold leading-8">
          Frequently asked questions
        </h2>
        <p className="text-[#08123B] font-['Manrope'] text-xs not-italic font-medium leading-4">
          Everything you need to know about StyleMe
        </p>
      </div>

      {/* FAQ sections */}
      {/* main content here */}
      <div className="flex flex-col mt-16 gap-4">
        {accordions.map((item, id) => {
          const { question, answer } = item;
          return (
            <div
              key={id}
              className="flex rounded-md py-10 md:mx-[15rem] border-4 border-b-white"
            >
              <Accordion question={question} answer={answer} />
            </div>
          );
        })}
      </div>

      {/* Call To Action section */}
      <div
        className="flex flex-col mx-auto w-full justify-center items-center gap-8 
      py-[2rem] px-[4rem] rounded-3xl 
      border border-[#D1D7F0] bg-[#FFF] mt-[5.4rem]"
      >
        <div className="flex flex-col gap-2">
          <figure className="flex flex-shrink-0 items-center justify-center relative">
            <img
              className="w-[2.8rem] absolute"
              src={CtaCentre}
              alt="Centre image for a smiling lady"
            />
            <img
              className="w-[3rem]"
              src={CtaLeft}
              alt="Left side image also with a smiling lady"
            />
            <img
              className="w-[3rem]"
              src={CtaRight}
              alt="Right side image with a smiling lady"
            />
          </figure>
          <h2 className="text-[#14213DE5] text-center font-['Manrope'] text-2xl not-italic font-extrabold leading-7 tracking-tighter md:text-left">
            Keep up with fashion trends by joining StyleMe
          </h2>
          <p className="text-[#1B1B1BCC] font-['Manrope'] text-center text-sm not-italic font-medium leading-5 md:text-left">
            Can’t find the answer you’re looking for? Please chat with our
            friendly team
          </p>
        </div>
        <div className="text-center sm:text-left">
          <a
            href="/signup"
            className="inline-flex px-4 py-2 justify-center items-center gap-1 rounded-2xl border border-[#fca31122]
             bg-[#14213d] text-[#fca311] font-['Manrope'] not-italic font-bold leading-normal text-sm
             transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 hover:bg-[#434d64] duration-300 mt-[2.6rem] mb-6"
          >
            Get Started <BiRightArrowAlt size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQCTA;
