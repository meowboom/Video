import React from "react";
import Logo from "../../../assets/logo.png";

type Props = {};

const FirstHeaderSection = (props: Props) => {
  return (
    <div className="flex w-full items-center justify-center ">
      <a href="#" className="lg:w-2/3 ">
        <img
          width={98}
          height={98}
          src={Logo}
          alt="logo"
          className="hover:shadow-all rounded-full shadow-white duration-1000 hover:scale-110"
        />
      </a>
    </div>
  );
};

export default FirstHeaderSection;
