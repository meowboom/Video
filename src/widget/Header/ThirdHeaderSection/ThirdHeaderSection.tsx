import React from "react";
import MyButton from "../../../share/MyButton/MyButton";

type Props = {};

const ThirdHeaderSection = (props: Props) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className=" flex justify-end xl:w-2/3">
        <MyButton isFill={true} text="Log In" />

        <MyButton isFill={false} text="Register" />
      </div>
    </div>
  );
};

export default ThirdHeaderSection;
