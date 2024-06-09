import { create } from "zustand";
import { ENUMSortBTN, IFilmsStore } from "../data/types";

// Zustand Film Store

export const useFilms = create<IFilmsStore>((set, get) => ({
  films: [],
  copyFilms: [],

  setFilms: (films) => set({ films }),
  setCopyFilms: (copyFilms) => set({ copyFilms }),
  setUpdateCopyFilmsByUser: (arr) => {
    const upd = get().copyFilms.map((film) => {
      if (arr.includes(Number(film.id))) {
        return { ...film, isFavorite: "true" };
      } else {
        return film;
      }
    });
    set({ copyFilms: upd });
  },

  getFilm: (id: string) => get().films.find((film) => film.id === id),

  getDailyFilm: () =>
    get().films.toSorted((a, b) => Number(b.views) - Number(a.views))[0], //all worked but why mistake?

  filterFilmsByParams: (value, arr) => {
    console.log(arr);
    const filteredFilms = get()
      .films.filter((film) => film?.category === value.toLowerCase().trim())
      .map((film) => {
        if (arr.includes(Number(film.id))) {
          return { ...film, isFavorite: "true" };
        } else {
          return film;
        }
      });

    console.log(filteredFilms);

    return get().setCopyFilms(filteredFilms);
  },

  sortByParams: (param: ENUMSortBTN) => {
    const validation = () => {
      if (param === ENUMSortBTN.lettersUp) {
        return get().copyFilms.sort((a, b) =>
          a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1,
        );
      } else if (param === ENUMSortBTN.lettersDown) {
        return get().copyFilms.sort((a, b) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1,
        );
      } else {
        return get().copyFilms.sort((a, b) => {
          switch (param) {
            case ENUMSortBTN.ratingUp:
              Number();
              return Number(a.rate) - Number(b.rate);
            case ENUMSortBTN.ratingDown:
              return Number(b.rate) - Number(a.rate);
            case ENUMSortBTN.yearUp:
              return Number(a.uploadTime.year) - Number(b.uploadTime.year);
            case ENUMSortBTN.yearDown:
              return Number(b.uploadTime.year) - Number(a.uploadTime.year);
            case ENUMSortBTN.favorite:
              return a.isFavorite === b.isFavorite ? 0 : a.isFavorite ? -1 : 1;
            default:
              return get().copyFilms;
          }
        });
      }
    };
    const validationArr = validation();
    console.log(validationArr);

    if (validationArr !== validationArr) {
      return get().setCopyFilms(validation());
    }
  },
}));
