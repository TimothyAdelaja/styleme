import { FcGoogle } from "react-icons/fc";
import "../../loginPage/login.css";

const Form = () => {
  return (
    <div>
        <div className="loginright-welcome">
              <h1>Welcome Back!</h1>
        </div>
        <div className="loginoptions-container">
            <button >
                <FcGoogle size={20}/>
                Continue with google
            </button>
            <div className="loginoptions-or">
                <p className="loginoptions-hr-text"><span>OR</span></p>
            </div>
            <div className="loginform-container">
                <p className="loginform-text">Enter your details to get started</p>
                <div className="loginform-form">
                    <label>Email Address</label>
                    <input type="text" placeholder="Enter your email address"/>
                </div>
                <div className="loginform-form">
                    <label>Enter Password</label>
                    <input type="password" placeholder="Enter your password"/>
                </div>
            </div>
            <div className="loginform-signin">
                <button>Sign In</button>
                <div className="dont">
                <p>Don&apos;t have an account?</p>
                <a>Sign up</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form
