import React from "react";
import MyButton from "../../share/MyButton/MyButton";

type Props = {};

const ButtonSection = (props: Props) => {
  return (
    <div className=" flex justify-end xl:w-2/3">
      <MyButton isFill={true} text="Log In" />
      <MyButton isFill={false} text="Register" />
    </div>
  );
};

export default ButtonSection;
