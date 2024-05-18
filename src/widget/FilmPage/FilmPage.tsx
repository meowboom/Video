import React from "react";
import { FILMS, IFilm } from "../FilmCards/data";
import PosterForFilmPage from "../../entities/PosterForFilmPage/PosterForFilmPage";
import AboutForFilm from "../../entities/AboutForFilm/AboutForFilm";

// Need finalize video section and
const FilmPage = () => {
  // when do store selected film will be load

  const film = FILMS.filter(({ id }) => id === "1");

  return (
    <div className="mt-10 flex h-full w-full flex-col items-center justify-center py-2">
      <div className="flex w-full">
        {/* Poster Bar */}
        <PosterForFilmPage film={film[0]} />
        {/* About Films */}
        <AboutForFilm film={film[0]} />
      </div>
      <div className="my-10 h-[500px] w-11/12 rounded-md  bg-black/60">
        video
      </div>
      {/* Reviews  */}
      {/* <div className="w-full border">other</div> */}
    </div>
  );
};

export default FilmPage;
