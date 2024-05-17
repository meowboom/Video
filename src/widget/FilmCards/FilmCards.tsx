import React, { FC, useState } from "react";
import VideoCard from "../../entities/VideoCard/VideoCard";
import { IFilms } from "./data";
interface IFilmCards {
  arr: IFilms;
}
const FilmCards: FC<IFilmCards> = ({ arr }) => {
  const [films, setFilms] = useState(arr);
  // будет прокидываться через стейт и тогда сортировка заработает
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {films.map(
        ({ description, favorite, posterURL, rate, title, year }, i) => (
          <VideoCard
            key={i}
            year={year}
            description={description}
            favorite={favorite}
            posterURL={posterURL}
            rate={rate}
            title={title}
          />
        ),
      )}
    </div>
  );
};

export default FilmCards;
