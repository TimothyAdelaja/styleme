import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

const MyCustomButton = () => {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    
  });

  return (
    <button
      className="Frame35"
      onClick={() => login()}
      style={{
        border: "1px solid var(--secondary-tint-05, #F39B2B)",
        borderRadius: "24px",
        background: "#FFF",
      }}
    >
      <span className="OfficialButtonsSignInWithGoogle">
        <>
          <img
            className="Logo"
            src="../../src/assets/icon-google.png"
            alt="Google Icon"
          />
          Sign up with Google
        </>
      </span>
    </button>
  );
};

export default MyCustomButton;
