import React from "react";
import PosterForFilmPage from "../../entities/PosterForFilmPage/PosterForFilmPage";
import AboutForFilm from "../../entities/AboutForFilm/AboutForFilm";
import { useQuery } from "@tanstack/react-query";
import { FILMS_URL } from "../../data/data";
import { useFetch } from "../../share/hooks";
import { useFilms } from "../../share/helpers";

// Need finalize video section and
const FilmPage = () => {
  // when do store selected film will be load

  const film = useFilms((state) => state.films[0]);
  console.log(film);

  return (
    <>
      {film && (
        <div>
          <div className="mt-10 flex h-full w-full flex-col items-center justify-center py-2">
            <div className="flex w-full">
              {/* Poster Bar */}
              <PosterForFilmPage film={film} />
              {/* About Films */}
              <AboutForFilm film={film} />
            </div>

            <div className="my-10 h-[500px] w-11/12 rounded-md  bg-black/60">
              video
            </div>
            {/* Reviews  */}
            {/* <div className="w-full border">other</div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default FilmPage;
