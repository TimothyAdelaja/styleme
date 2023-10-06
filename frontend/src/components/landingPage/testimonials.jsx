import React from "react";
import Stars from "../../assets/img/testimonial/stargroup.png";
import Gallery1 from "../../assets/img/gallery-images/gallery1.png";
import Gallery2 from "../../assets/img/gallery-images/gallery2.png";
import Gallery3 from "../../assets/img/gallery-images/gallery3.png";
import Gallery4 from "../../assets/img/gallery-images/gallery4.png";
import Gallery5 from "../../assets/img/gallery-images/gallery5.png";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonials } from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./testimonialCard";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    adaptiveHeight: true,
    // nextArrow: <FaChevronRight />,
    // prevArrow: <FaChevronLeft />,
  };

  return (
    <div className="mx-auto overflow-hidden pt-14 px-8 flex-shrink-0 bg-[#fee3b8] lg:px-12">
      {/* Flex layout with 2 divs */}
      <div className="flex items-center w-full gap-8">
        {/* First div */}
        <div className="flex flex-col  w-1/2 gap-2">
          <div className="inline-flex flex-col items-start justify-center gap-2">
            <img src={Stars} alt="Group of stars" />
            <h2
              className="text-[#414141] font-['Manrope'] text-2xl not-italic
            font-extrabold leading-9"
            >
              Our Testimony
            </h2>
          </div>

          <div className="flex flex-col items-start">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Second div */}
        <div className="flex flex-col  w-1/2 gap-2">
          <div className="flex flex-col items-center justify-center gap-4 md:flex md:flex-row md:items-end md:justify-center">
            <img
              className="w-28 h-24 md:w-32 md:h-24"
              src={Gallery1}
              alt="A young man on earphones"
            />
            <img
              className="w-32 h-36 md:w-36 md:h-48"
              src={Gallery2}
              alt="A young beautifully dressed  caucasian lady posing for picture"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-3 md:flex md:flex-row md:items-start md:justify-center md:overflow-hidden">
            <img
              className="w-32 md:w-36"
              src={Gallery3}
              alt="A black woman facial image endowned with a flowery head tie"
            />
            <img
              className="w-32 h-36 md:w-36 md:h-48"
              src={Gallery4}
              alt="A picture of a lady with a casual shirt wear and accompanying glasses"
            />
            <img
              className="w-32 md:w-36"
              src={Gallery5}
              alt="A possibly middle eastern lady in a flowery scarf popularly known as `hijab`"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
