import React from "react";
import MyButton from "../../share/MyButton/MyButton";


const ButtonSection = () => {
  return (
    <div className=" flex justify-end xl:w-2/3">
      <MyButton isFill={true} text="Log In" />
      <MyButton isFill={false} text="Register" />
    </div>
  );
};

export default ButtonSection;
