import { create } from "zustand";
import { IFilmsStore } from "../data/types";

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
    const filteredFilms = get().films.filter(
      (film) => film?.category === value.toLowerCase().trim(),
    );
    console.log("now");

    // return get().setCopyFilms(filteredFilms);
    return get().setCopyFilms(filteredFilms);
  },

  // setSortByParams
}));
