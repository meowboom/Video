import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FILMS_URL } from "../../data/data";
import { IFilms } from "../../data/types";

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
