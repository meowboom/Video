import React from "react";
import PosterForFilmPage from "../../entities/PosterForFilmPage/PosterForFilmPage";
import AboutForFilm from "../../entities/AboutForFilm/AboutForFilm";
import { useFilms } from "../../storage/films.storage";
import { useLocation } from "react-router-dom";
import Loader from "../../share/Loader/Loader";

const FilmPage = () => {
  const { getFilm } = useFilms();
  const { pathname } = useLocation();
  const filmId = pathname
    .split("")
    .filter((val) => Number(val))
    .join("");
  const film = getFilm(filmId);

  return (
    <div className="mt-10">
      {!film && <Loader />}
      {film && (
        <div className="flex h-full w-full flex-col items-center justify-center py-2">
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
      )}
    </div>
  );
};

export default FilmPage;
