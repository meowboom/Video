import React, { useEffect, useState } from "react";
import VideoCard from "../../entities/VideoCard/VideoCard";
import SortBtn from "../../share/SortBtn/SortBtn";
import { BTN_FOR_SORT } from "../MainBody";
import { Link } from "react-router-dom";
import { IFilm } from "../../data/types";
import { useFilms } from "../../storage/films.storage";
import { uniqueKey } from "../../share/helpers";
import { useConstant } from "../../storage/constant.storage";
import { useUsers } from "../../storage/users.storage";

const FilmCards = () => {
  const { copyFilms, filterFilmsByParams, sortByParams, setCopyFilms } =
    useFilms();
  const { sortActiveMethod, setSortActiveMethod, setActiveIMG } = useConstant();
  const { user } = useUsers();
  useEffect(() => filterFilmsByParams("films"), []);
  // ONLY TEST
  const updatesFIlms = (arr) => {
    const newArr = copyFilms.map((film) => {
      if (arr.includes(Number(film.id))) {
        // Преобразуем film.id в число для точного сравнения
        return {
          ...film,
          isFavorite: true,
        };
      } else {
        return film;
      }
    });

    return newArr; // Возвращаем обновленный массив, если нужно
  };

  const renderFilmsCard = (arr: []) =>
    arr.map((film: IFilm) => (
      <Link key={uniqueKey()} to={`/id${film.id}`}>
        <div onClick={() => setActiveIMG(0)}>
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
        </div>
      </Link>
    ));
  useEffect(() => {
    if (user) {
      const arr = updatesFIlms(user.favorite);
      console.log("arr", arr);
      setCopyFilms(arr);
      console.log("copyFilms", copyFilms);
    }
  }, [user]);

  return (
    <div className="pb-10">
      <div className="invisible mb-4 mt-1 flex w-full items-center justify-center lg:visible">
        {BTN_FOR_SORT.map(({ title, img }, id) => (
          <SortBtn
            isActive={sortActiveMethod}
            title={title}
            img={img}
            key={id}
            onClick={() => {
              sortByParams(title);
              setSortActiveMethod(title);
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
