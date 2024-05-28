import React from "react";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const FirstHeaderSection = () => {
  return (
    <div className="flex w-full items-center justify-center ">
      <Link to={"/"} className="lg:w-1/3">
        <img
          src={Logo}
          alt="logo"
          width={98}
          height={98}
          className="rounded-full shadow-white duration-1000 hover:scale-110 hover:shadow-all"
        />
      </Link>
    </div>
  );
};

export default FirstHeaderSection;
