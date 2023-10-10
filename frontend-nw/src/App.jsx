import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/landingPage";
import Wardrobe from "./pages/wardrobe/Wardrobe";
import OtpInput from "./pages/otpInput/otpInput";
import SignUpPage from "./pages/SignUp/SignUpPage";
import SignIn from "./pages/loginPage/signin";
import ResetPassword from "./components/login/reset";
import WardrobeWork from "./pages/wardrobe/WardrobeWork";
import WardrobeSunday from "./pages/wardrobe/WardrobeSunday";
import WardrobeNative from "./pages/wardrobe/WardrobeNative";
import WardrobeParty from "./pages/wardrobe/WardrobeParty";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="work/:id" element={<WardrobeWork />} />
        <Route path="sunday/:sunday" element={<WardrobeSunday />} />
        <Route path="native/:native" element={<WardrobeNative />} />
        <Route path="party/:party" element={<WardrobeParty />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/otp-input" element={<OtpInput />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
