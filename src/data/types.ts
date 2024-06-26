// ------------------------  For Users ------------------------------------------------
export interface IUserData {
  name: string;
  password: string;
  email: string;
  phone: string;
}
export interface IUser {
  id: number;
  userInfo: IUserData;
  tariff: string;
  avatar: string;
  paymentStatus: string;
  favorite: [];
}

export interface IUsers extends Array<IUser> {}

// ------------------------  For Films ------------------------------------------------

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
    screen: string[];
    trailer: string;
  };
}

export interface IFilms extends Array<IFilm> {}

// ------------------------  For Zustand  ------------------------------------------------

// Films Store

export interface IFilmsStore {
  films: IFilms | [];
  copyFilms: IFilms | [];

  setFilms: (films: IFilms) => void | unknown | undefined | null | any;
  setCopyFilms: (
    changedFilms: IFilms,
  ) => void | unknown | undefined | null | any;
  getFilm: (id: string) => any;
  getDailyFilm: () => IFilm;
  filterFilmsByParams: (value: string, arr: [] | undefined) => any;
  sortByParams: (param: ENUMSortBTN) => any;
  setUpdateCopyFilmsByUser: (value: any) => any;
}

export enum ENUMSortBTN {
  lettersUp = "A-Z",
  lettersDown = "Z-A",
  ratingUp = "Ratting up",
  ratingDown = "Ratting down",
  yearUp = "Year up",
  yearDown = "Year down",
  favorite = "My favorite",
}

export interface ISortBTN {
  title: ENUMSortBTN;
  img?: any;
  isActive?: string | null;
  onClick?: () => void | undefined;
}

export interface ISortBTNs extends Array<ISortBTN> {}

// ------------------------  Video Card  ------------------------------------------------

export interface IVideoCard {
  title: string;
  thumbnailUrl: string;
  description: string;
  isFavorite: string;
  rate: string;
  year: string;
  id: string | number | any;
}

// ------------------------  Price Cards  ------------------------------------------------

export enum EPriceCard {
  base = "Freelancer",
  pro = "Startup",
  individual = "Enterprise",
}

export interface IPriceCard {
  tariff: EPriceCard;
  description: string;
  price: number;
  advantage?: string[];
  isActive: boolean;
  boughtTariff?: "" | "pro" | "individual" | "based";
}
