import React, { ReactNode, useEffect } from "react";
import { useFilms } from "../../storage/storage";
import { useFetchFilms } from "../../share/hooks";
import Loader from "../../share/Loader/Loader";

type Props = { children: ReactNode };

const Wrapper = ({ children }: Props) => {
  const { data, isLoading } = useFetchFilms();
  const { films, setFilms } = useFilms();
  useEffect(() => data && setFilms(data), [data]);
  return (
    <>
      {isLoading && (
        <div className="flex h-screen w-full items-center justify-center">
          <Loader />
        </div>
      )}
      {films.length > 0 && !isLoading && (
        <div className="h-full w-full px-24">{children}</div>
      )}
    </>
  );
};

export default Wrapper;
