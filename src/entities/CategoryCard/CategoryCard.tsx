import React from "react";
import { categories } from ".";
import HrLine from "../../share/HrLine/HrLine";
import { useFilms } from "../../storage/films.storage";
import { randomValue } from "../../share/helpers";
import { useConstant } from "../../storage/constant.storage";

const CategoryCard = () => {
  const { filterFilmsByParams, films, setCopyFilms } = useFilms();
  const {
    activeCategory,
    setActiveCategory,
    genre,
    setGenre,
    setSortActiveMethod,
  } = useConstant();

  const activeCategoryArr = films.filter(
    (film) => film.category === activeCategory,
  );
  const handelCategory = (category: string) => {
    filterFilmsByParams(category, undefined);
    setActiveCategory(category);
    setGenre(null);
    setSortActiveMethod(null);
  };
  const handelRandomFilm = () => {
    const random = randomValue(activeCategoryArr.length);
    const result = activeCategoryArr.filter((_, i) => i === random);
    setCopyFilms(result);
    setGenre(null);
    setSortActiveMethod(null);
  };

  const handelGenreFilms = (value: string) => {
    const result = activeCategoryArr.filter((film) => film?.genre === value);
    setCopyFilms(result);
    setGenre(value);
    setSortActiveMethod(null);
  };
  return (
    <section className="item-center flex flex-col items-center justify-center rounded-md bg-[#D9D9D9]/5 px-8 py-2 shadow-all shadow-white/25">
      {/* Category */}

      <div className="my-3 flex w-full items-center text-2xl">
        <h3
          className={`${activeCategory === "films" && "text-primary-main underline underline-offset-4 "} mx-auto cursor-pointer hover:animate-pulse hover:text-primary-hover`}
          onClick={() => handelCategory("films")}
        >
          Films
        </h3>
        <span className="mx-2">|</span>
        <h3
          className={`${activeCategory === "serials" && "text-primary-main underline underline-offset-4"} mx-auto cursor-pointer hover:animate-pulse hover:text-primary-hover`}
          onClick={() => handelCategory("serials")}
        >
          Serials
        </h3>
      </div>

      {/* Genre */}

      <div className="mb-2 text-center">
        {categories.map((value, i) => (
          <nav
            key={i}
            onClick={() => handelGenreFilms(value)}
            className={`${genre === value && "shadow-all shadow-primary-main"} text-md m-2 rounded-sm px-3 py-[1px] decoration-primary-main underline-offset-4 duration-300 hover:bg-white/10 hover:underline`}
          >
            <button>{value}</button>
          </nav>
        ))}
      </div>

      <HrLine />

      {/* Random BTN */}

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
