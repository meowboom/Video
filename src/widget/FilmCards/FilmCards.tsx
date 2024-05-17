import React, { FC } from "react";
import VideoCard from "../../entities/VideoCard/VideoCard";
import { IFilms } from "./data";
interface IFilmCards {
  arr: IFilms;
}
const FilmCards: FC<IFilmCards> = ({ arr }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {arr.map(({ description, favorite, posterURL, rate, title }, i) => (
        <VideoCard
          key={i}
          description={description}
          favorite={favorite}
          posterURL={posterURL}
          rate={rate}
          title={title}
        />
      ))}
    </div>
  );
};

export default FilmCards;
