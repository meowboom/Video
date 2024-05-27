import { create } from "zustand";
import { ICategoryStore } from "../../data/types";

export const categories = [
  "Comedy",
  "Science",
  "Drama",
  "Fantasy",
  "Action",
  "Romance",
  "Animation",
  "Adventure",
];

export const useCategory = create<ICategoryStore>((set) => ({
  activeCategory: "films",
  setActiveCategory: (value) => set({ activeCategory: value }),
}));
