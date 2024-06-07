import { create } from "zustand";
import { IUser, IUserData, IUsers } from "../data/types";

// Zustand Users Store

export interface IUsersStore {
  users: IUsers | null;
  usersCopy: IUsers | null;
  user: IUser | null;
  userData: IUserData | null;
  setUsers: (value: IUsers) => void;
  setUsersCopy: (value: IUsers) => void;
  setUser: (value: IUser) => void;
  setUserData: (value: IUserData) => void;
  userPushFav: (id: string | number) => void;
  userRemoveFav: (id: string | number) => void;
}

export const useUsers = create<IUsersStore>((set, get) => ({
  users: null,
  usersCopy: null,
  user: null,
  userData: null,

  setUsers: (users) => set({ users }),
  setUsersCopy: (usersCopy) => set({ usersCopy }),
  setUser: (user) => set({ user }),
  setUserData: (userData) => set({ userData }),

  userPushFav: (id) => get().user?.favorite.push(Number(id)),
  userRemoveFav: (id) => {
    const newFav = get().user?.favorite.filter(
      (idFilm) => Number(idFilm) !== Number(id),
    );

    return set({ user: { ...get().user, favorite: newFav } });
  },
}));
