import React from "react";
import dicons from "../../assets/img/subscription/3dicons.png";
import { BiRightArrowAlt } from "react-icons/bi";

const Subscription = () => {
  return (
    <div className="w-full h-[34rem] bg-[#FFF]">
      <div className="flex p-[0.4rem] flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-10">
          <div className="mt-10">
            <img
              className="h-20 w-20"
              src={dicons}
              alt="An at subscription symbol for newsletter"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2
              className="text-[#14213DE5] text-center font-['Manrope'] text-3xl
          not-italic font-extrabold leading-tight tracking-wider"
            >
              Signup for our Newsletter
            </h2>
            <p
              className="text-[#14213DE5] text-center font-['Manrope'] text-sm not-italic
            font-medium leading-8 tracking-tight"
            >
              Be the first to know about any new release and product insight.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Enter your email address
          "
            className="w-[15.4rem] h-[3rem] border rounded-xl bg-[#D1D7F0] px-6 md:w-[28.4rem]"
          />
        </div>
        <div>
          <button
            href="#"
            className="inline-flex px-4 py-2 justify-center items-center gap-1 rounded-2xl border border-[#fca31122]
             bg-[#14213d] text-[#fca311] font-['Manrope'] not-italic font-bold leading-normal text-sm
             transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 hover:bg-[#434d64] duration-300 mt-[2.6rem]"
          >
            Subscribe
            <BiRightArrowAlt size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
