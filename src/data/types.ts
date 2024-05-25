// Backend
export interface IUser {
  id: number;
  name: string;
  password: string;
  email: string;
  phone: string;
  tariff: string;
  avatar: string;
  paymentStatus: string;
}

export interface IUsers extends Array<IUser> {}

export interface IFilm {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  uploadTime: {
    day: string;
    month: string;
    year: string;
  };
  views: string;
  author: string;
  videoUrl: string;
  description: string;
  isFavorite: string;
  rate: string;
  category: string;
  genre: string;
  preview: {
    screen: [];
    trailer: string;
  };
}

export interface IFilms extends Array<IFilm> {}

// For Zustand
export interface IFilmsStore {
  films: IFilms;
  // copyFilms: IFilms;
  setFilms: (films: IFilms) => void | unknown | undefined | null | any;
  // setCopyFilms: (films: IFilms) => void | unknown | undefined | null | any;

  getFilm: (id: string) => any;
  // setFilterByCategory: (category: string) => void;
  getDailyFilm: () => IFilm;
}
