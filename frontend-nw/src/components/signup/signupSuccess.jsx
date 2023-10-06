import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignupSuccess = () => {
  //   const navigate = useNavigate();
  // Function to obfuscate email (e.g., hide some letters).
  //   const obfuscateEmail = () => {
  // const [username, domain] = email.split("@");
  // const obfuscatedUsername = username.substring(0, 3) + "*****"; // Customize this as needed.
  // const result = obfuscatedUsername + "@" + domain;
  // console.log(localStorage.getItem("emailForOTP"));
  const emailResponseHandler = () => {
    console.log(localStorage.getItem("emailResponse"));
  };

  //   };

  const handleVerificationCode = () => {
    Swal.fire({
      icon: "success",
      title: "Signup Successful!",
      position: "center",
      html: `
          A verification code has been sent to your email: <strong>${obfuscateEmail(
            email
          )}</strong>
              `,
      showCancelButton: true,
      //   showConfirmButton: true,
      confirmButtonColor: "#FCA311",
      confirmButtonText: "Continue",
      //   allowOutsideClick: false,
      timer: 2000,
      //   allowEscapeKey: false,
      //   onOpen: () => {
      //     const confirmButton = Swal.getConfirmButton();
      //     confirmButton.classList.add("bg-[#FCA311]", "hover:bg-[#FCA31122]");
      //   },
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirect to OTP input page.
        navigate("/otp-input");
      }
    });
  };

  //   return handleVerificationCode();
  return <button onClick={emailResponseHandler}>Click me</button>;
};

export default SignupSuccess;
