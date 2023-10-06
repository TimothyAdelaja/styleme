import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          className="h-40 w-36 cursor-pointer"
          src="src\assets\styleme-logo.png"
          alt="Site Logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
