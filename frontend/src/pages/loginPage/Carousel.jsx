import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../loginPage/login.css"
import { useNavigate } from "react-router";
import  axios from "axios";


const Carousel = ({images, tags}) => {

    let navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("left");
    const delay = 3500;
    
    const handleNext = () => {
        setDirection("right");
        setCurrentIndex((prevIndex) => 
            prevIndex + 1 === images.length ? 0 : prevIndex + 1 
        );
    };

    const handlePrevious = () => {
        setDirection("left");
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 === images.length ? 0 : prevIndex - 1
        );
    };

    const handleButtonClick = (index) => {
        setDirection(index > currentIndex ? "left" : "right");
        setCurrentIndex(index);
    }

    useEffect(() => {
        setTimeout(() => 
            setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex+1
            ),
            delay
        );

        return () => {};
    }, [currentIndex]);

    const slideVariants = {
        hiddenRight: {
            x: "100%",
            opacity: 0,
        },
        hiddenLeft: {
            x: "-100%",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.5,
            }
        }
    };

    
    
  return (
    <div>
        <div className="carousel-picture">
            <AnimatePresence>
                <motion.img key={currentIndex} src={images[currentIndex]}
                            variants={slideVariants}
                            initial={direction === "hiddenRight" ? "hiddenRight" : "hiddenLeft"}
                            animate="visible"
                            exit="exit"
                />
            </AnimatePresence>
        </div>
        <div className="carousel-overlay">
            <p key={currentIndex} className="carousel-label">
                {tags[currentIndex]}
            </p>
            <div className="carousel-buttons">
                {images.map((image, index) => (
                    <button key={index} 
                            className={`${currentIndex === index ? "active" : "inactive"}`} 
                            onClick={() => handleButtonClick(index)}
                    >

                    </button>
                ))
                }
            </div>
        </div>
    </div>
  )
}

export default Carousel;
