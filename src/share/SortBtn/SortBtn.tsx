import React from "react";

type Props = {
  title: string;
  img?: any;
  onClick?: () => void | undefined;
};

const SortBtn = ({ title, img, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(title)}
      className="mr-4 flex cursor-pointer items-center justify-center rounded-lg bg-white/5 px-2 py-1 duration-300 hover:bg-white/10 hover:text-primary-main"
    >
      <span className="mr-1 text-sm">{title}</span>
      {img}
    </div>
  );
};

export default SortBtn;
