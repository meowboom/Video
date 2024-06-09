import { create } from "zustand";
import { IUser, IUserData, IUsers } from "../data/types";
import { persist } from "zustand/middleware";

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

export const useUsers = create<IUsersStore>()(
  persist(
    (set, get) => ({
      users: null,
      usersCopy: null,
      user: null,
      userData: null,

      setUsers: (users) => set({ users }),
      setUsersCopy: (usersCopy) => set({ usersCopy }),
      setUser: (user) => set({ user }),
      setUserData: (userData) => set({ userData }),

      userPushFav: (id) => {
        const user = get().user;
        if (user && user.favorite) {
          set({
            user: {
              ...user,
              favorite: [...user.favorite, Number(id)],
            },
          });
        }
      },

      userRemoveFav: (id) => {
        const user = get().user;
        if (user && user.favorite) {
          const newFav = user.favorite.filter(
            (idFilm) => Number(idFilm) !== Number(id),
          );
          set({ user: { ...user, favorite: newFav } });
        }
      },
      setUpdateUserData: (id, value) => {
        const userData = get().userData;
        const setUserData = get().setUserData;
        switch (id) {
          case "name":
            userData?.name !== value &&
              set({ userData: { ...userData, name: value } });
            break;
          case "email":
            userData?.name !== value &&
              set({ userData: { ...userData, email: value } });
            break;
          case "phone":
            userData?.name !== value &&
              set({ userData: { ...userData, phone: value } });
            break;
          default:
            break;
        }
      },
    }),
    {
      name: "user-store",
    },
  ),
);
