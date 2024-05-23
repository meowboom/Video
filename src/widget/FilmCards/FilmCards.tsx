import React, { FC, useState } from "react";
import VideoCard from "../../entities/VideoCard/VideoCard";
import SortBtn from "../../share/SortBtn/SortBtn";
import { BTN_FOR_SORT } from "../MainBody";
import { Link } from "react-router-dom";
import { IFilm } from "../../data/types";
import { useQuery } from "@tanstack/react-query";
import { FILMS_URL } from "../../data/data";
import { useFetch } from "../../share/hooks";

const FilmCards = () => {
  // будет прокидываться через стейт и тогда сортировка заработает

  const { data } = useQuery({
    queryKey: ["films"],
    queryFn: () => useFetch(FILMS_URL),
  });
  return (
    <div>
      <div className="invisible mb-4 mt-1 flex w-full items-center justify-center lg:visible">
        {BTN_FOR_SORT.map(({ title, img, onClick }, id) => (
          <SortBtn
            title={title}
            img={img}
            key={id}
            onClick={() => onClick(title)}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {data &&
          data.map((film: IFilm) => (
            <Link to={`/${film.title}`}>
              <VideoCard
                key={`${film.id}${film.views}`}
                id={film.id}
                year={film?.uploadTime?.year}
                description={film.description}
                isFavorite={film.isFavorite}
                thumbnailUrl={film.thumbnailUrl}
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
