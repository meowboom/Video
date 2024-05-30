import { create } from "zustand";

export interface IUseConstant {
  sortActiveMethod: null | string;
  priceVariant: boolean; //true = year false = month
  activeCategory: string;
  genre: string | null;
  activeIMG: number;

  setSortActiveMethod: (value: null | string) => void;
  setPriceVariant: (value: boolean) => void;
  setActiveCategory: (value: string) => void;
  setGenre: (value: string | null) => void;
  setActiveIMG: (value: number) => void;
}

export const useConstant = create<IUseConstant>((set) => ({
  sortActiveMethod: null,
  priceVariant: true,
  activeCategory: "films",
  genre: null,
  activeIMG: 0,

  setSortActiveMethod: (sortActiveMethod) => set({ sortActiveMethod }),
  setPriceVariant: (priceVariant) => set({ priceVariant }),
  setActiveCategory: (activeCategory) => set({ activeCategory }),
  setGenre: (genre) => set({ genre }),
  setActiveIMG: (activeIMG) => set({ activeIMG }),
}));
