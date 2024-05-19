// Fetch Hook

import axios from "axios";

export const useFetch = async <T>(URL: string): Promise<T> => {
  const { data } = await axios.get<T>(URL);
  return data;
};
