import React from "react";
import { categories, useCategory } from ".";
import HrLine from "../../share/HrLine/HrLine";
import { useFilms } from "../../storage/storage";

const CategoryCard = () => {
  const { filterFilmsByParams, films, setCopyFilms } = useFilms();
  const { activeCategory, setActiveCategory } = useCategory();
  const handelRandomFilm = () => {
    const random = films[Math.floor(Math.random() * films.length)];
    setCopyFilms([random]);
    console.log([random]);
    // Why not working???
  };

  return (
    <section className="item-center mb-5 flex flex-col items-center justify-center rounded-md bg-[#D9D9D9]/5 px-8 py-2 shadow-all shadow-white/25">
      <div className="my-3 flex w-full items-center text-2xl">
        <h3
          className={`${activeCategory === "films" && "text-primary-main underline underline-offset-4 "} mx-auto cursor-pointer hover:animate-pulse hover:text-primary-hover`}
          onClick={() => {
            filterFilmsByParams("films");
            setActiveCategory("films");
          }}
        >
          Films
        </h3>
        <span className="mx-2">|</span>
        <h3
          className={`${activeCategory === "serials" && "text-primary-main underline underline-offset-4"} mx-auto cursor-pointer hover:animate-pulse hover:text-primary-hover`}
          onClick={() => {
            filterFilmsByParams("serials");
            setActiveCategory("serials");
          }}
        >
          Serials
        </h3>
      </div>
      <div className="mb-2 text-center">
        {categories.map((value, i) => (
          <nav
            key={i}
            onClick={() => filterFilmsByParams(value)}
            className="text-md rounded-sm px-3 py-[1px] decoration-primary-main underline-offset-4 duration-300 hover:bg-white/10 hover:underline"
          >
            <button>{value}</button>
          </nav>
        ))}
      </div>
      <HrLine />
      <div className="mt-2 flex w-full items-center justify-center  text-lg">
        <button
          onClick={() => handelRandomFilm()}
          className="rounded-sm px-3 pb-1 text-primary-main underline-offset-4 duration-300 hover:bg-white/10 hover:text-primary-hover hover:underline"
        >
          Random
        </button>
      </div>
    </section>
  );
};

export default CategoryCard;
