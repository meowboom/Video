import { create } from "zustand";
import { IUser, IUsers } from "../data/types";

// Zustand Users Store

export interface IUsersStore {
  users: [];
  usersCopy: [];
  user: {};
  setUsers: (value: any) => void;
  setUsersCopy: (value: any) => void;
  setUser: (value: IUser) => void;
}
export const useUsers = create<IUsersStore>((set) => ({
  users: [],
  usersCopy: [],

  user: {},

  setUsers: (users) => set({ users }),
  setUsersCopy: (usersCopy) => set({ usersCopy }),
  setUser: (user) => set({ user }),
}));
