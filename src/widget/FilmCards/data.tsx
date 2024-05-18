export interface IFilm {
  posterURL: string;
  title: string;
  rate: number;
  description?: string;
  favorite: boolean;
  year: number;
  id?: string;
}

export type IFilms = IFilm[];

export const FILMS: IFilms = [
  {
    posterURL: "public/images/1.png",
    id: "1",
    title: "Avengers 1",
    rate: 6,
    favorite: true,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    year: 2023,
  },
  {
    posterURL: "public/images/1.png",
    id: "2",
    title: "Mvengers 2",
    rate: 2,
    favorite: false,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    year: 2022,
  },
  {
    posterURL: "public/images/1.png",
    id: "3",

    title: "Kvengers 3",
    rate: 5,
    favorite: true,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    year: 2021,
  },
  {
    posterURL: "public/images/1.png",
    id: "4",

    title: "Tvengers 4",
    rate: 8,
    favorite: false,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    year: 2024,
  },
  {
    posterURL: "public/images/1.png",
    id: "5",

    title: "Dvengers 5",
    rate: 1,
    favorite: false,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    year: 2020,
  },
  {
    posterURL: "public/images/1.png",
    id: "6",

    title: "Fvengers 6",
    rate: 9,
    favorite: true,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    year: 2012,
  },
  {
    posterURL: "public/images/1.png",
    id: "7",

    title: "Cvengers 7",
    rate: 7,
    favorite: false,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    year: 2011,
  },
  {
    posterURL: "public/images/1.png",
    id: "8",

    title: "Xvengers 8",
    rate: 4,
    favorite: false,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    year: 2005,
  },
];

// export const ONE_TEST_CARD: IFilm = {
//   posterURL: "public/images/1.png",
//   id: "9",

//   title: "Avengers: Age of galactic",
//   rate: 6,
//   favorite: false,
//   description:
//     "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
//   year: 2001,
// };
