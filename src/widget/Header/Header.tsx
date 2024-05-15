import React from "react";
import FirstHeaderSection from "./FirstHeaderSection/FirstHeaderSection";
import SecondHeaderSection from "./SecondHeaderSection/SecondHeaderSection";
import ThirdHeaderSection from "./ThirdHeaderSection/ThirdHeaderSection";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="py-6">
      <div className="flex items-center justify-around">
        <FirstHeaderSection />
        <SecondHeaderSection />
        <ThirdHeaderSection />
      </div>
    </header>
  );
};

export default Header;
