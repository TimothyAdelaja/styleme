import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { logInSlides, slides } from "../landingPage/data";
import Carousel from "../landingPage/carousel";
import { FcGoogle } from "react-icons/fc";
import { Input } from "../common/input/input";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import {
  email_validation,
  password_validation,
} from "../common/input/inputValidations";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import LoadingSpinner from "../common/spinner";

const LoginComponent = () => {
  const methods = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleKeypress = (e) => {
    var key = e.which || e.keyCode;
    console.log(key);
    console.log(e.key);
  };

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      // Send data to backend API here using Axios
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data sent successfully", response.data);
      const token = response.headers["authorization"];
      if (token) {
        localStorage.setItem("authToken", token);
        setAuthToken(token);
      }
      console.log("headers here", token);
      if (response.status === 200) {
        setSuccessMessage("Login successful.");
        navigate("/dashboard");
      } else {
        setErrorMessage("Login failed. Please try again later.");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage("Invalid email or password.");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
    setIsSubmitting(false);
  });

  return (
    // Main container
    <div className="flex items-center w-full h-screen sm:flex sm:overflow-hidden">
      {/* content or form second div */}
      <div
        className="flex flex-col overflow-auto 
    items-center gap-4 mx-auto pt-8 w-2/3 bg-[#fff]"
      >
        <div className="flex flex-col items-center justify-start gap-6 w-full">
          <h2
            className="text-[#14213D] font-['Manrope'] 
        text-3xl not-italic font-bold leading-[3.2rem] text-center"
          >
            Welcome!
          </h2>
        </div>
        {successMessage && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded relative"
            role="alert"
          >
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative"
            role="alert"
          >
            {errorMessage}
          </div>
        )}
        <div
          className="flex py-2 px-4 justify-center items-center gap-4 w-1/2 overflow-auto
          border rounded-[2.4rem] border-[#F39B2B] opacity-50 bg-[#FFF] cursor-pointer  "
        >
          <div className="flex w-6 h-6 p-[0.5rem] justify-center items-center border-[0.1rem] bg-white">
            <FcGoogle size={15} className="flex-shrink-0  " />
          </div>
          <button className="text-[#F39B2B] font-['Manrope'] text-base font-medium not-italic leading-normal">
            Continue with Google
          </button>
        </div>
        <div className="flex items-center gap-2">
          <hr className="w-16 sm:w-48 h-1 bg-[#1B1B1BB2]" /> OR{" "}
          <hr className="w-16 sm:w-48 h-1 bg-[#1B1B1BB2]" />
        </div>

        <div>
          <p className="text-center text-xl not-italic font-bold leading-8 text-[#FCA311]">
            Enter your details to get started.
          </p>
        </div>
        <div
          className="flex flex-col items-center gap-4 p-2 w-1/2
        rounded-lg bg-white"
        >
          <FormProvider {...methods}>
            <form
              onSubmit={(e) => e.preventDefault()}
              noValidate
              autoComplete="off"
              className="flex flex-col gap-4 w-full"
            >
              <Input {...email_validation} />
              <Input {...password_validation} />
              {/* sign up button div */}
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#FCA311] cursor-pointer"
                      required=""
                      onChange={handleRememberMe}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-sm not-italic font-light text-[#14213D]"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="/reset-password"
                  className="text-sm not-italic font-medium text-[#FCA311] hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <div
                onClick={onSubmit}
                className={`${
                  isSubmitting
                    ? "bg-[#322103] cursor-not-allowed"
                    : "bg-[#FCA311] hover:bg-[#7e5209]"
                } flex p-2 justify-center items-center gap-4
          border rounded-full border-[#FCA31122] opacity-50 cursor-pointer
           focus:outline-none focus:shadow-outline `}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onKeyDown={handleKeypress}
                  className="text-[#14213D] font-['Manrope'] text-base font-bold not-italic leading-5"
                >
                  Sign in
                </button>
                {isSubmitting && <LoadingSpinner />}
              </div>

              {/* sign up with google div */}
              <div className="flex items-center gap-4">
                <p className="text-[#14213D] text-center font-['Manrope'] text-sm not-italic font-medium">
                  Don't have an account yet?{" "}
                  <a
                    className="text-[#FCA311] font-['Manrope'] text-sm not-italic font-semibold cursor-pointer hover:underline"
                    href="/signup"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
      {/* Side bar  1st div*/}
      <div
        className="hidden sm:flex sm:flex-col 
    sm:justify-between sm:h-full sm:items-start sm:w-1/3"
      >
        <a className="absolute z-[1] top-8 left-8" href="/">
          {" "}
          <img src={Logo} className="flex-shrink-0 h-14 w-24" />
        </a>
        <Carousel autoSlide={true} autoSlideInterval={1500}>
          {logInSlides.map((s, id) => (
            <img
              key={id}
              className="w-full h-full object-cover"
              src={s}
              autoPlay
              muted
              loop
              playsInline
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default LoginComponent;
