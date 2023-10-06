import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { GiLoincloth } from "react-icons/gi";
import { MdOutlineWifiTethering } from "react-icons/md";
import Feature1 from "../../assets/img/features-images/feature1-group.png";
import Feature2 from "../../assets/img/features-images/feature2-wardrobe.png";
import Feature3 from "../../assets/img/features-images/feature3-communities.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Features = () => {
  return (
    <div
      id="features"
      className="inline-flex flex-col justify-end items-start gap-24 mx-auto w-full pt-20 pb-4 px-8 mt-6
     bg-[#FFFFFF] lg:px-12"
    >
      {/* Heading or title */}
      <div className="flex flex-col items-start gap-2">
        <p className="text-xs not-italic font-medium leading-6 text-[#C97001] text-center font-['Manrope']">
          Everything in one location
        </p>
        <p
          className="text-2xl text-[#102477] font-['Manrope'] text-center 
        not-italic font-extrabold leading-8"
        >
          Key Features
        </p>
        <p
          className="text-[#08123B] font-['Manrope'] text-xl not-italic
        font-medium leading-8"
        >
          Our platform offers the best features to help upgrade your fashion
          sense and communities to showcase your styles.
        </p>
      </div>

      {/* Display for the features text and images */}
      <div className="w-full mx-auto flex flex-col items-start gap-32">
        {/* First feature div */}
        <div className="w-full md:flex md:items-center md:gap-20 lg:flex lg:items-center lg:gap-24">
          <div className="flex items-start gap-6">
            <div>
              <CiWallet
                size={30}
                className="w-[2.4rem] h-[1.9535] hover:bg-[#0c327f]"
                color="#1D5BD6"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-3 ">
              <h2 className="text-[#08123B] text-2xl font-['Manrope'] not-italic font-extrabold leading-6">
                Men, Women and kids
              </h2>
              <p className="mx-auto w-auto overflow-auto text-xs leading-5 text-[#808080]  font-['Manrope'] not-italic font-medium md:w-[22.5rem] md:text-base  md:leading-9">
                We got the best that you can wear. Clothes that make you feel
                sophisticated irrespective of your gender.
              </p>
              <Link
                to="#"
                className="flex items-start gap-2 mb-6 text-[#1B1B1BCC] text-xl not-italic 
            font-extrabold leading-6 font-['Manrope'] cursor-pointer hover:bg-[#0c0b0bd3]"
              >
                Learn More{" "}
                <BiRightArrowAlt
                  size={30}
                  color="#1D5BD6"
                  width={2.4}
                  height={2.4}
                />
              </Link>
            </div>
          </div>
          <div>
            <img src={Feature1} alt="Fashion Show Walk" />
          </div>
        </div>
        {/* Second feature div */}
        <div className="w-full md:flex md:items-center md:gap-20 lg:flex lg:items-center lg:gap-24">
          <div className="mb-6">
            <img src={Feature2} alt="Fashion Show Walk" />
          </div>
          <div className="flex items-start gap-6">
            <div>
              <GiLoincloth
                size={30}
                className="w-[2.4rem] h-[1.9535] hover:bg-[#0c327f]"
                color="#1D5BD6"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-3 ">
              <h2 className="text-[#08123B] text-2xl font-['Manrope'] not-italic font-extrabold leading-6">
                Wardrobe
              </h2>
              <p className="mx-auto w-auto overflow-auto text-xs leading-5 md:w-[22.5rem] text-[#808080] md:text-base font-['Manrope'] not-italic font-medium md:leading-9">
                Your fashion journey is about to get a whole lot easier and more
                exciting with our brand new Wardrobe Feature. Imagine having
                your entire wardrobe at your fingertips, neatly organized and
                accessible anytime, anywhere. Welcome to the future of fashion,
                right in the palm of your hand.
              </p>
              <Link
                to="#"
                className="flex items-start gap-2 text-[#1B1B1BCC] text-xl not-italic 
            font-extrabold leading-6 font-['Manrope'] cursor-pointer hover:bg-[#0c0b0bd3]"
              >
                Learn More{" "}
                <BiRightArrowAlt
                  size={30}
                  color="#1D5BD6"
                  width={2.4}
                  height={2.4}
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Third feature division */}
        <div className="w-full md:flex md:items-center md:gap-20 lg:flex lg:items-center lg:gap-24">
          <div className="flex items-start gap-6">
            <div>
              <MdOutlineWifiTethering
                size={30}
                className="w-[2.4rem] h-[1.9535] hover:bg-[#0c327f]"
                color="#1D5BD6"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-3 mb-6 ">
              <h2 className="text-[#08123B] text-2xl font-['Manrope'] not-italic font-extrabold leading-6">
                Communities
              </h2>
              <p className="mx-auto w-auto overflow-auto text-xs leading-5 md:w-[22.5rem] text-[#808080] md:text-base font-['Manrope'] not-italic font-medium md:leading-9">
                Join the Style Revolution in our Fashion Community. Fashion
                transcends mere clothing; it's a declaration, an embodiment, and
                a lifestyle. Here, like-minded style aficionados unite to
                embrace individuality, uncover the latest trends, and ignite
                mutual inspiration.Forge connections within a global community
                of fashion devotees. Share your distinct style, explore emerging
                trends, and form bonds.
              </p>
              <Link
                to="#"
                className="flex items-start gap-2 text-[#1B1B1BCC] text-xl not-italic 
            font-extrabold leading-6 font-['Manrope'] cursor-pointer hover:bg-[#0c0b0bd3]"
              >
                Learn More{" "}
                <BiRightArrowAlt
                  size={30}
                  color="#1D5BD6"
                  width={2.4}
                  height={2.4}
                />
              </Link>
            </div>
          </div>
          <div>
            <img src={Feature3} alt="Fashion Show Walk" />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Features;
