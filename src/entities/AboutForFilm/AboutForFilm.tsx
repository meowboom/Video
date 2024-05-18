import React from "react";
import HrLine from "../../share/HrLine/HrLine";
import { IFilm } from "../../widget/FilmCards/data";

type Props = { film: IFilm };

const AboutForFilm = ({ film }: Props) => {
  return (
    <div className="flex w-1/2 flex-col items-center text-center">
      <div className="my-5 text-4xl text-primary-main">{film.title}</div>
      <div className="my-4 p-3 text-xl">{film.description}</div>
      <div className="w-4/5 ">
        <HrLine />
      </div>
      <div className="my-10 flex flex-col gap-2 text-center">
        <span>
          <span className="text-lg">Categories: </span>
          <span className="text-md">Fantasy</span>
        </span>
        <span>
          <span className="text-lg">Author: </span>
          <span className="text-md">Massimo Naduti</span>
        </span>
        <span>
          <span className="text-lg">Actors: </span>
          <span className="text-md">
            Massimo Naduti, Massimo Naduti, Massimo Naduti, Massimo Naduti
          </span>
        </span>
        <span>
          <span className="text-lg">Country: </span>
          <span className="text-md">USA</span>
        </span>
        <span>
          <span className="text-lg">Year: </span>
          <span className="text-md">{film.year}</span>
        </span>
        <span>
          <span className="text-lg">Rating: </span>
          <span
            className={`${film.rate > 5 ? "text-secondary-green" : "text-secondary-yellow"}  `}
          >
            {film.rate}/10
          </span>
        </span>
      </div>
    </div>
  );
};

export default AboutForFilm;
