import React from "react";
import HrLine from "../../share/HrLine/HrLine";
import { IFilm } from "../../data/types";

const AboutForFilm = ({ film }: { film: IFilm }) => {
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
          <span className="text-md">{film.genre}</span>
        </span>
        <span>
          <span className="text-lg">Author: </span>
          <span className="text-md">{film.author}</span>
        </span>
        <span>
          <span className="text-lg">Views: </span>
          <span className="text-md">{film.views}</span>
        </span>
        <span>
          <span className="text-lg">Year: </span>
          <span className="text-md">{film?.uploadTime.year}</span>
        </span>
        <span>
          <span className="text-lg">Rating: </span>
          <span
            className={`${Number(film.rate) > 5 ? "text-secondary-green" : "text-secondary-yellow"}  `}
          >
            {film.rate}/10
          </span>
        </span>
      </div>
    </div>
  );
};

export default AboutForFilm;
