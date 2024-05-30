import React, { FC } from "react";
import FirstHeaderSection from "./FirstHeaderSection/FirstHeaderSection";
import SecondHeaderSection from "./SecondHeaderSection/SecondHeaderSection";
import ThirdHeaderSection from "./ThirdHeaderSection/ThirdHeaderSection";
import HrLine from "../../share/HrLine/HrLine";


const Header = () => {
  return (
    <header className=" fixed left-0 right-0 top-0 z-50 w-full bg-primary-bg pt-5">
      <div className="flex items-center justify-around pb-5">
        <FirstHeaderSection />
        <SecondHeaderSection />
        <ThirdHeaderSection />
      </div>
      <div className="px-24">
        <HrLine />
      </div>
    </header>
  );
};

export default Header;
