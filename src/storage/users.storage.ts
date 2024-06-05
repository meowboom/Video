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
}

export const useUsers = create<IUsersStore>((set) => ({
  users: null,
  usersCopy: null,
  user: null,
  userData: null,

  setUsers: (users) => set({ users }),
  setUsersCopy: (usersCopy) => set({ usersCopy }),
  setUser: (user) => set({ user }),
  setUserData: (userData) => set({ userData }),
}));
