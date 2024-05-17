import React, { FC } from "react";
import UserAccount from "../../../entities/UserAccount/UserAccount";
import ButtonSection from "../../../entities/ButtonSection/ButtonSection";

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
