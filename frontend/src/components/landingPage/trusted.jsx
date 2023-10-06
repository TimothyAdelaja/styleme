import React from "react";
import Interswitch from "../../assets/img/trusted-logos/interswitch.png";
import Verve from "../../assets/img/trusted-logos/verve.png";
import QuickTeller from "../../assets/img/trusted-logos/quickteller.png";
import Amazon from "../../assets/img/trusted-logos/amazon.png";
import Jumia from "../../assets/img/trusted-logos/jumia.png";
import Alibaba from "../../assets/img/trusted-logos/alibaba.png";

const Trusted = () => {
  return (
    <div
      className="w-11/12 h-64 pt-5 pb-2 px-12 mx-auto mt-24
     bg-[#fdb541] flex-shrink-0 border rounded-[2rem] lg:px-12"
    >
      <div
        className="flex flex-col items-center text-center mt-10 mb-5 mx-auto overflow-auto
        gap-[2.2rem]"
      >
        <h2 className="text-[#414141] text-[1rem] font-['Manrope'] not-italic font-bold leading-4">
          Trusted by 1000+ companies
        </h2>
        <div className="flex flex-row items-start justify-around gap-0.25 lg:flex lg:items-start lg:gap-10">
          <img
            className="w-[5.1rem] h-[3.2rem] rounded-xl lg:w-[9.2rem] lg:h-[6.5rem] lg:rounded-3xl lg:bg-gradient-to-br"
            src={Interswitch}
            alt="Interswitch"
          />
          <img
            className="w-[5.1rem] h-[3.2rem] rounded-xl lg:w-[9.2rem] lg:h-[6.5rem] lg:rounded-3xl lg:bg-gradient-to-br"
            src={Verve}
            alt="Verve"
          />
          <img
            className="w-[5.1rem] h-[3.2rem] rounded-xl lg:w-[9.2rem] lg:h-[6.5rem] lg:rounded-3xl lg:bg-gradient-to-br"
            src={QuickTeller}
            alt="QuickTeller"
          />
          <img
            className="w-[5.1rem] h-[3.2rem] rounded-xl lg:w-[9.2rem] lg:h-[6.5rem] lg:rounded-3xl lg:bg-gradient-to-br"
            src={Amazon}
            alt="Amazon"
          />
          <img
            className="w-[5.1rem] h-[3.2rem] rounded-xl lg:w-[9.2rem] lg:h-[6.5rem] lg:rounded-3xl lg:bg-gradient-to-br"
            src={Jumia}
            alt="Jumia"
          />
          <img
            className="w-[5.1rem] h-[3.2rem] rounded-xl lg:w-[9.2rem] lg:h-[6.5rem] lg:rounded-3xl lg:bg-gradient-to-br"
            src={Alibaba}
            alt="Alibaba"
          />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
