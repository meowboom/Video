import React, { FC } from "react";
import ButtonSection from "./ButtonSection/ButtonSection";
import UserAccount from "./UserAccount/UserAccount";

type Props = {};

const ThirdHeaderSection: FC<Props> = () => {
  const isLogin = true;
  return (
    <div className="flex w-full items-center justify-center">
      {isLogin ? <UserAccount /> : <ButtonSection />}
    </div>
  );
};

export default ThirdHeaderSection;
