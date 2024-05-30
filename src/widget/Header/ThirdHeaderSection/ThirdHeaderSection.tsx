import React from "react";
import UserAccount from "../../../entities/UserAccount/UserAccount";
import ButtonSection from "../../../entities/ButtonSection/ButtonSection";
import { useConstant } from "../../../storage/constant.storage";

const ThirdHeaderSection = () => {
  const { isLogin, setIsLogin } = useConstant();
  return (
    <div className="flex w-full items-center justify-center">
      {isLogin ? <UserAccount /> : <ButtonSection />}
    </div>
  );
};

export default ThirdHeaderSection;
