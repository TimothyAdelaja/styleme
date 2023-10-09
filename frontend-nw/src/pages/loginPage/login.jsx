import { FcGoogle } from "react-icons/fc";
import "../loginPage/login.css";
import frame_one from "../loginPage/images/frame_one.svg";
import frame_two from "../loginPage/images/frame_two.svg";
import frame_three from "../loginPage/images/frame_three.svg";
import Carousel from "../loginPage/Carousel.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../../config";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  let navigate = useNavigate();

  const images = [frame_one, frame_two, frame_three];
  const tags = ["Personal wardrobe", "Showcase your style", "Trending outfits"];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userInput, setUserInput] = useState({});
  const [fieldError, setFieldError] = useState({
    email: { message: "", error: false },
    password: { message: "", error: false },
  });

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: [e.target.value] });
    checkFieldStatus(e);
  };

  const checkFieldStatus = (e) => {
    switch (e.target.name) {
      case "email":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "Please enter an email address",
              error: true,
            },
          });
        } else {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "",
              error: false,
            },
          });
        }
        break;
      case "password":
        if (e.target.name === "password") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "Please enter a password",
              error: true,
            },
          });
        } else {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "",
              error: false,
            },
          });
        }
        break;
      default:
        break;
    }
  };

  const payload = {
    email: email,
    password: password,
  };

  const handleClick = async () => {
    // axios.post(`${config.REACT_APP_LOGIN_URL}`, payload)
    //     .then((response) => {
    //       let responseEmail = JSON.parse(response.config.data).email;
    //       console.log(responseEmail === email);
    //       responseEmail === email && navigate("/wardrobe")
    //     })
    //     .catch((error) => console.log(error))
    if (email && password) {
      toast.loading("Sending Request", { id: "1" });
      try {
        const response = await axios.post(
          `${config.REACT_APP_LOGIN_URL}`,
          payload
        );
        console.log(response);
        if (response.status === 200) {
          toast.success("Login successfull", { id: "1" });
          setTimeout(() => {
            // navigate("/wardrobe");
          }, 3000);
        }
      } catch (error) {
        // toast.error("Invalid email or password", { id: "1" });
        toast.error(error.response.data.message, { id: "1" });
      }
    } else {
      toast.error("All fields are required!");
    }
  };

  const handleKeypress = (e) => {
    var key = e.which || e.keyCode;
    console.log(key);
    console.log(e.key);
  };

  return (
    <div className="loginpage-container">
      <Toaster position="top-right" reverseOrder={false} />
      {/* <div className="loginbody-container"> */}
      <div className="loginleft-container">
        <div className="loginleft-welcome">
          <h1>Welcome Back!</h1>
        </div>
        <div className="loginoptions-container">
          <button>
            <FcGoogle size={20} />
            Continue with google
          </button>
          <div className="loginoptions-or">
            <p>
              <span>OR</span>
            </p>
          </div>
          <div className="loginform-container">
            <p className="loginform-text">Enter your details to get started</p>
            <div className="loginform-form">
              <label>Email Address</label>
              <input
                name="email"
                type="text"
                placeholder="Enter your email address"
                handleChange={handleChange}
                fieldError={fieldError}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="loginform-form">
              <label>Enter Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                handleChange={handleChange}
                fieldError={fieldError}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="loginform-signin">
            <button onClick={handleClick} onKeyDown={handleKeypress}>
              Sign In
            </button>
            <div className="dont">
              <p>Don&apos;t have an account?</p>
              <a href="/signup">Sign up</a>
            </div>
          </div>
        </div>
      </div>
      <div className="logincarousel-container">
        <Carousel images={images} tags={tags} m />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Login;
