import React, { useEffect, useState } from "react";
import VideoCard from "../../entities/VideoCard/VideoCard";
import SortBtn from "../../share/SortBtn/SortBtn";
import { BTN_FOR_SORT } from "../MainBody";
import { Link } from "react-router-dom";
import { IFilm } from "../../data/types";
import { useFilms } from "../../storage/storage";
import { uniqueKey } from "../../share/helpers";

const FilmCards = () => {
  const { copyFilms, filterFilmsByParams, sortByParams } = useFilms();
  const [isActive, setIsActive] = useState<null | string>(null);

  useEffect(() => filterFilmsByParams("films"), []);

  const renderFilmsCard = (arr: []) =>
    arr.map((film: IFilm) => (
      <Link key={uniqueKey()} to={`/id${film.id}`}>
        <VideoCard
          key={uniqueKey()}
          id={film.id}
          year={film?.uploadTime?.year}
          description={film.description}
          isFavorite={film.isFavorite}
          thumbnailUrl={film.thumbnailUrl}
          rate={film.rate}
          title={film.title}
        />
      </Link>
    ));

  return (
    <div className="pb-10">
      <div className="invisible mb-4 mt-1 flex w-full items-center justify-center lg:visible">
        {BTN_FOR_SORT.map(({ title, img }, id) => (
          <SortBtn
            isActive={isActive}
            title={title}
            img={img}
            key={id}
            onClick={() => {
              sortByParams(title);
              setIsActive(title);
            }}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-10" key={uniqueKey()}>
        {copyFilms.length === 0 && (
          <div className="flex h-56  animate-pulse items-center text-5xl text-primary-main">
            Film not found
          </div>
        )}
        {copyFilms.length > 0 && renderFilmsCard(copyFilms)}
      </div>
    </div>
  );
};

export default FilmCards;
