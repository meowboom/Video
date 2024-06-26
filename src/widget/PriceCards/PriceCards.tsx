import React from "react";
import PriceCard from "../../entities/PriceCard/PriceCard";
import { PRICE_CARDS } from "./data";
import { useConstant } from "../../storage/constant.storage";

const PriceCards = () => {
  const { priceVariant } = useConstant();
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <section className="flex w-11/12 items-center justify-around sm:h-[1600px] lg:h-[400px]">
        <div className="flex w-full flex-col justify-around px-12 lg:flex-row lg:px-0">
          {PRICE_CARDS.map((price) => (
            <PriceCard key={price.tariff} isActive={priceVariant} {...price} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PriceCards;
