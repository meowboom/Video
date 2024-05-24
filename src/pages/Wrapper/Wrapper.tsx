import React, { ReactNode, useEffect } from "react";
import { useFilms } from "../../storage/storage";
import { useFetchFilms } from "../../share/hooks";
import Loader from "../../share/Loader/Loader";

type Props = { children: ReactNode };

const Wrapper = ({ children }: Props) => {
  const { data } = useFetchFilms();
  const { films, setFilms } = useFilms();
  useEffect(() => data && setFilms(data), [data]);
  return (
    <>
      {films ? (
        <div className="h-full w-full px-24">{children}</div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Wrapper;
