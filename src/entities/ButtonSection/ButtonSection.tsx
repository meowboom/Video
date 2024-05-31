import React from "react";
import MyButton from "../../share/MyButton/MyButton";
import { useConstant } from "../../storage/constant.storage";

const ButtonSection = () => {
  const { auth, setAuth } = useConstant();
  return (
    <div className=" flex justify-end xl:w-2/3">
      <MyButton isFill={true} text="Log In" onClick={() => setAuth("Log In")} />
      <MyButton
        isFill={false}
        text="Register"
        onClick={() => setAuth("Register")}
      />
    </div>
  );
};

export default ButtonSection;
