import { create } from "zustand";
import { IFilm, IFilmsStore } from "../data/types";

// Zustand Film Store

export const useFilms = create<IFilmsStore>((set, get) => ({
  films: [],
  copyFilms: [],
  setFilms: (films) => set({ films }),
  setCopyFilms: (copyFilms) => set({ copyFilms }),

  getFilm: (id: string) => get().films.find((film) => film.id === id),
  getDailyFilm: () =>
    get().films.toSorted((a, b) => Number(b.views) - Number(a.views))[0], //all worked but why mistake?
  filterFilmsByParams: (value: string) => {
    const filteredFilms = get().films.filter((film) => {
      // console.log(film.category === value.toLowerCase());

      return film?.category.toLowerCase() === value.toLowerCase();
    });
    get().setCopyFilms(filteredFilms);
  },

  // setSortByParams
}));


