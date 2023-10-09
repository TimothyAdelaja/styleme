import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import Logo from "../../assets/logo.png";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a reset password request to your API endpoint
      const response = await axios.put(
        "http://localhost:8080/api/v1/auth/change-password",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data sent successfully", response.data);

      if (response.status === 201) {
        setSuccessMessage("Password reset successful. Proceed to login");
      } else {
        setErrorMessage("Password reset failed. Please try again later.");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage("Invalid email or password.");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <a className="absolute z-[1] top-8 left-8" href="/">
        {" "}
        <img src={Logo} className="flex-shrink-0 h-14 w-24" />
      </a>
      <h1 className="text-2xl font-medium">Reset password</h1>
      <p className="text-slate-400">Fill up the form to reset the password</p>
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

      <form onSubmit={handleSubmit} className="my-5">
        <div className="flex flex-col space-y-p4">
          <label htmlFor="email">
            <p className="font-medium text-slate-500 pb-2">Email address</p>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="password">
            <p className="font-medium text-slate-500 pb-2">Password</p>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </span>
              }
            </div>
          </label>

          <button className="w-full py-3 font-medium text-white bg-[#FCA311] hover:bg-[#8a6b3853] rounded-lg border-[#FCA311] hover:shadow inline-flex space-x-2 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
              />
            </svg>

            <span>Reset password</span>
          </button>
          <p className="text-center">
            Not registered yet?{" "}
            <a
              href="/signup"
              className="text-[#FCA311] font-['Manrope'] font-medium inline-flex space-x-1 items-center hover:underline"
            >
              <span>Register now </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </a>
          </p>
          <p className="text-center">
            Already have an account?
            <a
              href="/login"
              className="text-[#FCA311] font-['Manrope'] font-medium inline-flex space-x-1 items-center hover:underline"
            >
              <span>Login now </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
