import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prevSlide = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const nextSlide = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex h-screen transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 top-10 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <FaChevronRight size={20} />
        </button>
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
