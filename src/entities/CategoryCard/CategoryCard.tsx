import React from "react";
import { categories } from ".";
import HrLine from "../../share/HrLine/HrLine";

type Props = { title: "Films" | "Serials" };

const CategoryCard = ({ title }: Props) => {
  return (
    <section className="item-center mb-5 flex flex-col items-center justify-center rounded-md bg-[#D9D9D9]/5 px-10 py-2 shadow-all shadow-white/25">
      <h3 className="mx-auto mb-2 text-xl text-primary-main">{title}</h3>
      <div className="mb-2 text-center">
        {categories.map((value, i) => (
          <nav
            key={i}
            className="rounded-sm px-3 py-[1px] text-sm decoration-primary-main underline-offset-4 duration-300 hover:bg-white/10 hover:underline"
          >
            <a href="#">{value}</a>
          </nav>
        ))}
      </div>
      <HrLine />
      <button className="mt-[6px] rounded-sm px-3 pb-1 text-[16px] text-primary-main underline-offset-4 duration-300 hover:bg-white/10 hover:text-primary-hover hover:underline">
        Random
      </button>
    </section>
  );
};

export default CategoryCard;
