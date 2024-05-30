import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import { FILMS_URL, USERS_URL } from "../../data/data";
import { IFilms, IUsers } from "../../data/types";

// hook for Fetching

export const useFetch = async <T>(URL: string): Promise<T> => {
  const { data } = await axios.get<T>(URL);
  return data;
};

// hook Getting Film

export const useFetchFilms = () => {
  return useQuery<IFilms>({
    queryKey: ["films"],
    queryFn: () => useFetch<IFilms>(FILMS_URL),
  });
};

// hook Getting User

export const useFetchUsers = () => {
  return useQuery<IUsers>({
    queryKey: ["users"],
    queryFn: () => useFetch(USERS_URL),
  });
};
