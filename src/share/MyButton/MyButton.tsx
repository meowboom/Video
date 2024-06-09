import React from "react";

type Props = {
  isFill: boolean;
  text: string;
  onClick?: () => void;
  btnDisable: boolean;
};

const MyButton = ({ isFill, text, btnDisable, onClick }: Props) => {
  return (
    <button
      disabled={btnDisable}
      onClick={onClick}
      className={`${isFill ? "border border-transparent bg-primary-main text-white hover:bg-primary-main/80  hover:text-primary-hover hover:shadow-all hover:shadow-white/30 " : "border-2 border-primary-main bg-white/5 hover:bg-white/30 hover:text-primary-hover"} mx-2 rounded-[20px] px-6  py-[10px] text-center duration-500 disabled:bg-gray-900`}
    >
      {text}
    </button>
  );
};

export default MyButton;
