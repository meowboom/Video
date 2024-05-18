import React, { FC, useState } from "react";
import VideoCard from "../../entities/VideoCard/VideoCard";
import { IFilms } from "./data";
import SortBtn from "../../share/SortBtn/SortBtn";
import { BTN_FOR_SORT } from "../MainBody";
import { Link } from "react-router-dom";
interface IFilmCards {
  arr: IFilms;
}
const FilmCards: FC<IFilmCards> = ({ arr }) => {
  const [films, setFilms] = useState(arr);
  // будет прокидываться через стейт и тогда сортировка заработает
  return (
    <div>
      <div className="invisible mb-4 mt-1 flex w-full items-center justify-center lg:visible">
        {BTN_FOR_SORT.map(({ title, img, onClick }, id) => (
          <SortBtn title={title} img={img} key={id} onClick={onClick} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {films.map((film) => (
          <Link to={`/${film.title}`}>
            <VideoCard
              key={`${film.id}${film.rate}`}
              year={film.year}
              description={film.description}
              favorite={film.favorite}
              posterURL={film.posterURL}
              rate={film.rate}
              title={film.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FilmCards;
