import React, { useState } from "react";
import { FILMS, IFilm } from "../../widget/FilmCards/data";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

type Props = { film: IFilm };

const PosterForFilmPage = ({ film }: Props) => {
  const [activeImg, setActiveImg] = useState(1);

  return (
    <div className="flex w-1/2 select-none flex-col items-center justify-center">
      <div>
        <img
          src={film.posterURL}
          alt="poster"
          className="h-[550px] rounded-lg shadow-all shadow-black/70"
        />
      </div>
      <div className="my-2 flex h-20 w-full items-center justify-center rounded-2xl bg-primary-main/20 px-1">
        <div
          onClick={() => activeImg > 1 && setActiveImg(activeImg - 1)}
          className="m-1 ml-2 flex w-1/12 cursor-pointer items-center justify-center rounded-xl  py-4 duration-300 hover:bg-[#D9D9D9]/5 hover:text-primary-main"
        >
          <ArrowLeftIcon className="size-6" />
        </div>
        <div className="flex w-10/12 justify-around">
          <button
            onClick={() => setActiveImg(1)}
            className={`${activeImg === 1 ? "shadow-primary-main" : "shadow-white/40"} rounded-xl shadow-all  duration-300 hover:shadow-primary-main`}
          >
            <img
              src={film.posterURL}
              className="size-16 rounded-xl "
              alt="pre"
            />
          </button>
          <button
            onClick={() => setActiveImg(2)}
            className={`${activeImg === 2 ? "shadow-primary-main" : "shadow-white/40"} rounded-xl shadow-all  duration-300 hover:shadow-primary-main`}
          >
            <img
              src={film.posterURL}
              className="size-16 rounded-xl "
              alt="pre"
            />
          </button>
          <button
            onClick={() => setActiveImg(3)}
            className={`${activeImg === 3 ? "shadow-primary-main" : "shadow-white/40"} rounded-xl shadow-all  duration-300 hover:shadow-primary-main`}
          >
            <img
              src={film.posterURL}
              className="size-16 rounded-xl "
              alt="pre"
            />
          </button>
          <button
            onClick={() => setActiveImg(4)}
            className={`${activeImg === 4 ? "shadow-primary-main" : "shadow-white/40"} rounded-xl shadow-all  duration-300 hover:shadow-primary-main`}
          >
            <img
              src={film.posterURL}
              className="size-16 rounded-xl "
              alt="pre"
            />
          </button>
        </div>
        <div
          onClick={() => activeImg < 4 && setActiveImg(activeImg + 1)}
          className="mr-2 flex w-1/12 cursor-pointer items-center justify-center rounded-xl  py-4 duration-300 hover:bg-[#D9D9D9]/5 hover:text-primary-main"
        >
          <ArrowRightIcon className="size-6" />
        </div>
      </div>
    </div>
  );
};

export default PosterForFilmPage;
