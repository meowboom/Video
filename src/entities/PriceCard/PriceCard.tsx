import React from "react";
import "./index.css";
import MyButton from "../../share/MyButton/MyButton";
import { IPriceCard } from "../../data/types";

const PriceCard = ({
  tariff,
  description,
  price,
  advantage,
  isActive,
}: IPriceCard) => {
  // fixed card position a small screen

  return (
    <div className="menu__container mx-auto mb-12 mt-[16vh] h-[200px] w-[100px] cursor-pointer rounded-md bg-[#D9D9D9]/20 py-4  text-center shadow-all shadow-white duration-500 ease-in-out hover:mt-[14vh] md:h-[400px]  md:w-[300px] md:animate-bounce-card lg:h-auto lg:w-[200px] 2xl:h-[426px] 2xl:w-[320px]">
      <div className="flex h-full w-full flex-col items-center justify-around">
        <h3 className="mb-3 text-xl lg:text-3xl">{tariff}</h3>
        <span className="m-3 px-10 text-center text-sm md:px-3 lg:text-[16px]">
          {description}
        </span>
        <span className="mb-3 text-primary-main md:text-3xl ">
          {isActive ? price * 12 : price} $
        </span>
        <MyButton isFill={false} text="Buy now" key={"buy_now"} />
        <ul className="lg:text-md mt-2 flex flex-col gap-1 text-sm">
          {advantage && advantage.map((adv, id) => <li key={id}>{adv}</li>)}
        </ul>
      </div>
      <div className="mx-auto mb-12 hidden h-80 w-52 cursor-pointer rounded-md shadow-all shadow-white duration-500 ease-in-out"></div>
    </div>
  );
};

export default PriceCard;
