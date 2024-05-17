export interface IFilm {
  posterURL: string;
  title: string;
  rate: number;
  description?: string;
  favorite: boolean;
}

export type IFilms = IFilm[];

export const FILMS: IFilms = [
  {
    posterURL: "src/assets/img/1.png",
    title: "Avengers",
    rate: 6,
    favorite: true,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
  },
  {
    posterURL: "src/assets/img/1.png",
    title: "Avengers",
    rate: 2,
    favorite: false,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
  },
  {
    posterURL: "src/assets/img/1.png",
    title: "Avengers",
    rate: 5,
    favorite: true,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
  },
  {
    posterURL: "src/assets/img/1.png",
    title: "Avengers",
    rate: 8,
    favorite: false,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
  },
  {
    posterURL: "src/assets/img/1.png",
    title: "Avengers",
    rate: 1,
    favorite: false,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
  },
  {
    posterURL: "src/assets/img/1.png",
    title: "Avengers",
    rate: 9,
    favorite: true,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
  },
  {
    posterURL: "src/assets/img/1.png",
    title: "Avengers",
    rate: 7,
    favorite: false,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
  },
  {
    posterURL: "src/assets/img/1.png",
    title: "Avengers",
    rate: 4,
    favorite: false,
    description:
      "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
  },
];

export const ONE_TEST_CARD: IFilm = {
  posterURL: "src/assets/img/1.png",
  title: "Avengers: Age of galactic",
  rate: 6,
  favorite: true,
  description:
    "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
};
