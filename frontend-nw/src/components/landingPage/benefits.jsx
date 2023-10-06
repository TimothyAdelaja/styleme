import React from "react";
import { MdOutlineWifiTethering } from "react-icons/md";

const Benefits = () => {
  return (
    <div className="mx-auto w-full overflow-hidden pt-14 px-8 flex-shrink-0 bg-[#F0F5FF] lg:px-12">
      {/* Title div */}
      <div className="flex flex-col items-start gap-3">
        <h2
          className="w-[56.2rem] text-[#08123B] font-['Manrope'] text-2xl font-extrabold
        not-italic leading-10"
        >
          Benefits of using <span className="text-[#B25E09]">StyleMe</span>
        </h2>
        <p
          className="mx-auto text-[#3D3D3D] font-['Manrope'] pb-28
        text-xs not-italic font-medium leading-4 md:text-base  md:leading-6"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam
          deleniti alias minus quasi consectetur officiis placeat non itaque
          corporis dicta veritatis magni ea voluptate quae, modi deserunt
          reiciendis! Totam.
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 items-center pb-10 md:flex md:flex-row md:items-start md:gap-10 lg:inline-flex lg:gap-24 lg:pb-20 lg:overflow-hidden">
        {/* First box */}
        <div
          className="w-[10.8rem] h-[9.4rem] flex flex-col items-start gap-3 pt-[0.6rem] pr-[1.3rem] pb-[1.1rem] pl-[0.5rem]
        rounded-xl border border-[#ffffffbf] bg-[#FFF] shadow-[0px 4px 8px 0px rgba(165, 165, 165, 0.25)]
        sm:w-[13.8rem] sm:h-[12.4rem]"
        >
          <div>
            <MdOutlineWifiTethering
              size={30}
              className="w-[2.4rem] h-[1.9535] hover:bg-[#0c327f]"
              color="#1D5BD6"
            />
          </div>
          <div>
            <h4
              className="items-stretch text-[#1E1E1E] font-['Manrope'] 
            text-base not-italic font-extrabold leading-7"
            >
              Profitability
            </h4>
            <p
              className="items-stretch text-[#3D3D3D] font-['Manrope'] text-[0.6rem]
            not-italic font-medium leading-3"
            >
              For a cost-effective fashion budget without compromising on
              quality and style. Here is to smarter shopping, exclusive deals,
              and fashion-wise financial wisdom.
            </p>
          </div>
        </div>

        {/* Second box */}
        <div
          className="w-[10.8rem] h-[9.4rem] flex flex-col items-start gap-3 pt-[0.6rem] pr-[1.3rem] pb-[1.1rem] pl-[0.5rem]
        rounded-xl border border-[#ffffffbf] bg-[#FFF] shadow-[0px 4px 8px 0px rgba(165, 165, 165, 0.25)]
        sm:w-[13.8rem] sm:h-[12.4rem]"
        >
          <div>
            <MdOutlineWifiTethering
              size={30}
              className="w-[2.4rem] h-[1.9535] hover:bg-[#0c327f]"
              color="#1D5BD6"
            />
          </div>
          <div>
            <h4
              className="items-stretch text-[#1E1E1E] font-['Manrope'] 
            text-base not-italic font-extrabold leading-7"
            >
              Time saving
            </h4>
            <p
              className="items-stretch text-[#3D3D3D] font-['Manrope'] text-[0.6rem]
            not-italic font-medium leading-3"
            >
              Our wardrobe management tools organizes your clothing, finds the
              perfect outfit for any occasion, and streamlines your daily
              dressing routine.
            </p>
          </div>
        </div>

        {/* Third box */}
        <div
          className="w-[10.8rem] h-[9.4rem] flex flex-col items-start gap-3 pt-[0.6rem] pr-[1.3rem] pb-[1.1rem] pl-[0.5rem]
        rounded-xl border border-[#ffffffbf] bg-[#FFF] shadow-[0px 4px 8px 0px rgba(165, 165, 165, 0.25)]
        sm:w-[13.8rem] sm:h-[12.4rem]"
        >
          <div>
            <MdOutlineWifiTethering
              size={30}
              className="w-[2.4rem] h-[1.9535] hover:bg-[#0c327f]"
              color="#1D5BD6"
            />
          </div>
          <div>
            <h4
              className="items-stretch text-[#1E1E1E] font-['Manrope'] 
            text-base not-italic font-extrabold leading-6"
            >
              Wardrobe access
            </h4>
            <p
              className="items-stretch text-[#3D3D3D] font-['Manrope'] text-[0.6rem]
            not-italic font-medium leading-3"
            >
              Your VIP pass to a world of style and convenience. We've
              reimagined fashion for the digital age, giving you unparalleled
              access to your closet like never before.
            </p>
          </div>
        </div>

        {/* Fourth box */}
        <div
          className="w-[10.8rem] h-[9.4rem] flex flex-col items-start gap-3 pt-[0.6rem] pr-[1.3rem] pb-[1.1rem] pl-[0.5rem]
        rounded-xl border border-[#ffffffbf] bg-[#FFF] shadow-[0px 4px 8px 0px rgba(165, 165, 165, 0.25)]
        sm:w-[13.8rem] sm:h-[12.4rem]"
        >
          <div>
            <MdOutlineWifiTethering
              size={30}
              className="w-[2.4rem] h-[1.9535] hover:bg-[#0c327f]"
              color="#1D5BD6"
            />
          </div>
          <div>
            <h4
              className="items-stretch text-[#1E1E1E] font-['Manrope'] 
            text-base not-italic font-extrabold leading-7"
            >
              Ease of use
            </h4>
            <p
              className="items-stretch text-[#3D3D3D] font-['Manrope'] text-[0.6rem]
            not-italic font-medium leading-3"
            >
              Our app's user-friendly design ensures that you can navigate
              effortlessly, whether you're a fashion novice or a seasoned
              trendsetter. Discover a seamless and intuitive experience that's
              as stylish as it is accessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
