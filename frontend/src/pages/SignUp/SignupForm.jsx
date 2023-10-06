import "./signup.css";
import React, { useState, useEffect } from "react";
import MyCustomButton from "./MyCustomButton";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import config from "../../../config";

function SignUpForm() {
  const signupUrl = config.REACT_APP_SIGNUP_URL;
  const googleSignupUrl = config.REACT_APP_GOOGLE_SIGNUP_URL;
  const googleApiToken = config.REACT_APP_GOOGLE_API_TOKEN;

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "../../src/assets/selfie.png",
    "../../src/assets/young-man.png",
    "../../src/assets/Man-fashion-boutique.png",
  ];

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [passwordRequirements, setPasswordRequirements] = useState({
    specialCharacters: false,
    minLength: false,
    numericCharacters: false,
    uppercaseLetters: false,
    lowercaseLetters: false,
  });

  const updatePasswordRequirements = (password) => {
    setPasswordRequirements({
      specialCharacters: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password),
      minLength: password.length >= 8,
      numericCharacters: /\d/.test(password),
      uppercaseLetters: /[A-Z]/.test(password),
      lowercaseLetters: /[a-z]/.test(password),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "password") {
      updatePasswordRequirements(value);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First Name is required";
      isValid = false;
    } else {
      newErrors.firstName = "";
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    } else {
      newErrors.lastName = "";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid Email Address";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    const isValid = validateForm();

    if (isValid) {
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      };

      axios
        .post(signupUrl, userData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("Data sent successfully:", response.data);
          window.location.href = `${config.REACT_APP_FRONTEND_URL}/${wardrobe}`;
        })
        .catch((error) => {
          console.error("Error sending data:", error);
        });
    } else {
      console.error("Form validation failed");
    }
  };

  const handleGoogleLogin = (credentialResponse) => {
    const accessToken = credentialResponse.access_token;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    fetch(googleSignupUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from backend:", data)
        window.location.href = `${config.REACT_APP_FRONTEND_URL}/${wardrobe}`;
      })
      .catch((error) =>
        console.error("Error sending token to backend:", error)
      );
  };

  return (
    <div>
      <div>
        <div className="img">
          <img src={images[currentImage]} alt="Changing Image" />
        </div>
        <div className="SMLogo"></div>
      </div>

      <div className="BlueBackground">
        <div className="Frame31">
          <div className="Frame36556">
            <div className="LetsGetStarted">Let's get started</div>
            <div className="CreateYourStylemeAccount">
              Create your StyleMe account{" "}
            </div>
          </div>

          <div className="Frame36561">
            <div className="Frame36557">
              <div className="Frame36554">
                <div className="InputField">
                  <div className="FieldTitle">First Name</div>
                  <input
                    type="text"
                    name="firstName"
                    className="InputFieldContainer"
                    placeholder="Enter your First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <div className="error">{errors.firstName}</div>
                </div>

                <div className="InputField">
                  <div className="FieldTitle">Last Name</div>
                  <input
                    type="text"
                    name="lastName"
                    className="InputFieldContainer"
                    placeholder="Enter your Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <div className="error">{errors.lastName}</div>
                </div>

                <div className="InputField">
                  <div className="FieldTitle">Email address</div>
                  <input
                    type="text"
                    name="email"
                    className="InputFieldContainer"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="error">{errors.email}</div>
                </div>

                <div className="InputField">
                  <div className="FieldTitle">Password</div>
                  <input
                    type="password"
                    name="password"
                    className="InputFieldContainer"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div className="error">{errors.password}</div>
                </div>

                <div className="Frame36553">
                  <div className="Frame36552">
                    <div className="HelperText">Password must include:</div>

                    <div
                      className={`PasswordValidation ${
                        passwordRequirements.specialCharacters
                          ? "met"
                          : "PasswordValidation"
                      }`}
                    >
                      <div className="BigAndSmallCaps">Special characters</div>
                    </div>
                    <div
                      className={`PasswordValidation ${
                        passwordRequirements.minLength
                          ? "met"
                          : "PasswordValidation"
                      }`}
                    >
                      <div className="BigAndSmallCaps">
                        At least 8 characters long
                      </div>
                    </div>
                    <div
                      className={`PasswordValidation ${
                        passwordRequirements.numericCharacters
                          ? "met"
                          : "PasswordValidation"
                      }`}
                    >
                      <div className="BigAndSmallCaps">Numeric characters</div>
                    </div>
                    <div
                      className={`PasswordValidation ${
                        passwordRequirements.uppercaseLetters
                          ? "met"
                          : "PasswordValidation"
                      }`}
                    >
                      <div className="BigAndSmallCaps">Uppercase letters</div>
                    </div>
                    <div
                      className={`PasswordValidation ${
                        passwordRequirements.lowercaseLetters
                          ? "met"
                          : "PasswordValidation"
                      }`}
                    >
                      <div className="BigAndSmallCaps">Lowercase letters</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="ButtonHead" onClick={handleSubmit}>
              <span class="Button">Sign Up</span>
            </button>
            <GoogleOAuthProvider clientId={googleApiToken}>
              <MyCustomButton onClick={handleGoogleLogin}>
                Sign in with Google
              </MyCustomButton>
            </GoogleOAuthProvider>
            <div className="signinText">
              <span
                style={{
                  color: "var(--White, #FFF)",
                  fontSize: 16,
                  fontFamily: "Manrope",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px",
                  marginRight: "8px",
                }}
              >
                Already have an account?
              </span>
              <a
                style={{
                  color: "#FCA311",
                  fontStyle: "normal",
                  fontSize: 16,
                  fontFamily: "Manrope",
                  fontWeight: "600",
                  lineHeight: "24px",
                }}
                href="/login"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUpForm;
