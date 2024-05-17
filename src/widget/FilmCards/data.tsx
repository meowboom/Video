export interface IFilm {
  posterURL: string;
  title: string;
  rate: number;
  description?: string;
  favorite: boolean;
  year: number;
}

export type IFilms = IFilm[];

export const FILMS: IFilms = [
  {
    posterURL: "src/assets/img/1.png",
    title: "Avengers 1",
    rate: 6,
    favorite: true,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    year: 2023,
  },
  {
    posterURL: "src/assets/img/1.png",
    title: "Mvengers 2",
    rate: 2,
    favorite: false,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    year: 2022,
  },
  {
    posterURL: "src/assets/img/1.png",
    title: "Kvengers 3",
    rate: 5,
    favorite: true,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    year: 2021,
  },
  {
    posterURL: "src/assets/img/1.png",
    title: "Tvengers 4",
    rate: 8,
    favorite: false,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    year: 2024,
  },
  {
    posterURL: "src/assets/img/1.png",
    title: "Dvengers 5",
    rate: 1,
    favorite: false,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    year: 2020,
  },
  {
    posterURL: "src/assets/img/1.png",
    title: "Fvengers 6",
    rate: 9,
    favorite: true,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    year: 2012,
  },
  {
    posterURL: "src/assets/img/1.png",
    title: "Cvengers 7",
    rate: 7,
    favorite: false,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    year: 2011,
  },
  {
    posterURL: "src/assets/img/1.png",
    title: "Xvengers 8",
    rate: 4,
    favorite: false,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    year: 2005,
  },
];

export const ONE_TEST_CARD: IFilm = {
  posterURL: "src/assets/img/1.png",
  title: "Avengers: Age of galactic",
  rate: 6,
  favorite: false,
  description:
    "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
  year: 0,
};
