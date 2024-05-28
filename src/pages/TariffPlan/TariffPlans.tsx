import React from "react";
import Logo from "../../assets/logo.png";
import PriceCards from "../../widget/PriceCards/PriceCards";
import HrLine from "../../share/HrLine/HrLine";
import { Link } from "react-router-dom";
import MyButton from "../../share/MyButton/MyButton";
import { useState } from "react";

const TariffPlans = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="flex h-screen w-full flex-col items-center">
      <header className="flex h-1/5 w-full items-center justify-around pt-4 text-primary-main">
        <nav>
          <Link to={"/"}>
            <img
              src={Logo}
              alt="logo"
              width={98}
              height={98}
              className="rounded-full shadow-white duration-1000 hover:scale-110 hover:shadow-all"
            />
          </Link>
        </nav>
        <h1 className="text-4xl">Pricing plans for teams of all sizes</h1>
        <nav>
          <Link to={"/my-profile"}>
            <MyButton isFill={true} text="My Profile" />
          </Link>
          <MyButton isFill={false} text="Log Out" />
        </nav>
      </header>
      <div className="my-2 w-11/12">
        <HrLine />
      </div>
      <div className="w-2/4 text-wrap py-5 text-center text-lg">
        Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi
        iusto modi velit ut non voluptas in. Explicabo id ut laborum.
      </div>
      <div className="w-42 relative flex cursor-pointer items-center justify-between overflow-hidden rounded-full bg-black/30">
        <div
          className={`absolute left-0 top-0 h-full w-1/2 bg-primary-main transition-transform duration-500 ease-in-out ${
            isActive ? "translate-x-0 transform" : "translate-x-full transform"
          }`}
        ></div>
        <button
          onClick={() => setIsActive(!isActive)}
          className={`z-10 w-full rounded-l-full px-5 py-2 text-white transition-colors duration-500 hover:text-primary-hover 
          `}
        >
          Year
        </button>
        <button
          onClick={() => setIsActive(!isActive)}
          className={`z-10 w-full rounded-r-full px-3 py-2 text-white transition-colors duration-500 hover:text-primary-hover 
          `}
        >
          Month
        </button>
      </div>
      <PriceCards isActive={isActive} />
    </div>
  );
};

export default TariffPlans;
