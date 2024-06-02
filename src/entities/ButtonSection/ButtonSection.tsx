import React from "react";
import MyButton from "../../share/MyButton/MyButton";
import { useConstant } from "../../storage/constant.storage";

const ButtonSection = () => {
  const { setAuth } = useConstant();
  return (
    <div>
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
