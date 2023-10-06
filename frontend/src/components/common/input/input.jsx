import React, { useState } from "react";
import { MdError } from "react-icons/md";
import cn from "classnames";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

import findInputError from "./findInputError";
import isFormValid from "./isFormValid";

export const Input = ({ label, type, id, name, validation, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputError = findInputError(errors, name);
  const isInvalid = isFormValid(inputError);

  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <div className="flex justify-between">
        <label
          htmlFor={id}
          className="
  text-[#102477] font-['Manrope'] text-xs not-italic font-normal px-2"
        >
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="relative w-full border rounded-lg">
        <input
          id={id}
          type={showPassword ? "text" : type}
          name={name}
          className={`appearance-none border ${
            isInvalid ? "border-[#FCA311]" : "border-slate-300"
          }  w-full border rounded-lg  text-sm py-2 px-3 text-[#8B9AD8] bg-[#E1E6EF] leading-tight focus:outline-none focus:shadow-outline placeholder:opacity-60`}
          placeholder={placeholder}
          {...register(name, validation)}
        />
        {type === "password" && (
          <span
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        )}
      </div>
    </div>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-normal text-[#FCA311] text-xs italic bg-white rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
