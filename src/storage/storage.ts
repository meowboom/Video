import { create } from "zustand";
import { IFilmsStore } from "../data/types";

// Zustand Film Store

export const useFilms = create<IFilmsStore>((set, get) => ({
  films: [],
  setFilms: (films) => set({ films }),
  getFilm: (id: string) => get().films.find((film) => film.id === id),
  getDailyFilm: () =>
    get().films.toSorted((a, b) => Number(b.views) - Number(a.views))[0], //all worked but why mistake?
  // setSortByParams
}));
