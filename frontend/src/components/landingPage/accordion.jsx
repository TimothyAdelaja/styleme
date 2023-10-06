import React, { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { BiMinusCircle } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ question, answer }) => {
  const [plus, setPlus] = useState(true);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setPlus(!plus);
    setShow(!show);
  };
  return (
    <>
      {/* question section */}
      <div className="flex flex-col items-start justify-start gap-[1.6rem]">
        <div className="flex justify-between items-center gap-28 cursor-pointer">
          <h2 className="text-[#08123B] font-['Manrope'] text-base not-italic font-extrabold leading-6">
            {question}
          </h2>
          <span onClick={() => handleClick()}>
            {plus ? <BiPlusCircle size={20} /> : <BiMinusCircle size={20} />}
          </span>
        </div>

        {/* answer section */}
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-clip"
            >
              <p
                className="pt-3 text-sm md:text-base text-[#414141] font-['Manrope']
   not-italic font-medium leading-3"
              >
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Accordion;
