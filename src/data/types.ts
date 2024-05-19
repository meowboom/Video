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
  uploadTime: string;
  views: string;
  author: string;
  videoUrl: string;
  description: string;
  subscriber: string;
  isLive: boolean;
  screenshots: string[];
}

export interface IFilms extends Array<IFilm> {}
