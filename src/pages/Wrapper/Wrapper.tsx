import React, { ReactNode, useEffect } from "react";
import { useFilms } from "../../storage/films.storage";
import { useFetchFilms, useFetchUsers } from "../../share/hooks";
import Loader from "../../share/Loader/Loader";
import { useUsers } from "../../storage/users.storage";

type Props = { children: ReactNode };

const Wrapper = ({ children }: Props) => {
  const { data: filmsData, isLoading: isLoadingFilms } = useFetchFilms();
  const { data: usersData, isLoading: isLoadingUsers } = useFetchUsers();
  const { films, setFilms } = useFilms();
  const { setUsers, setUsersCopy } = useUsers();

  useEffect(() => {
    filmsData && setFilms(filmsData);
    usersData && setUsers(usersData);
    usersData && setUsersCopy(usersData);
  }, [filmsData, usersData]);
  return (
    <>
      {isLoadingFilms && isLoadingUsers && (
        <div className="flex h-screen w-full items-center justify-center">
          <Loader />
        </div>
      )}
      {films.length > 0 && !isLoadingFilms && !isLoadingUsers && (
        <div className="h-full w-full px-24">{children}</div>
      )}
    </>
  );
};

export default Wrapper;
