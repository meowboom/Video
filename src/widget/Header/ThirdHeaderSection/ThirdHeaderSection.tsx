import React from "react";
import UserAccount from "../../../entities/UserAccount/UserAccount";
import ButtonSection from "../../../entities/ButtonSection/ButtonSection";
import { useConstant } from "../../../storage/constant.storage";
import { useUsers } from "../../../storage/users.storage";

const ThirdHeaderSection = () => {
  const { isLogin } = useConstant();
  const { user } = useUsers();
  console.log(isLogin, user);

  return (
    <div className="flex w-full items-center justify-center">
      {isLogin ? <UserAccount /> : <ButtonSection />}
    </div>
  );
};

export default ThirdHeaderSection;
