import React, { ReactNode, useEffect } from "react";
import Loader from "./share/Loader/Loader";
import { useFetchFilms, useFetchUsers } from "./share/hooks";
import { useFilms } from "./storage/films.storage";
import { useUsers } from "./storage/users.storage";
import { useConstant } from "./storage/constant.storage";

interface IApp {
  children: ReactNode;
}

const App = ({ children }: IApp) => {
  const { data: filmsData, isLoading: isLoadingFilms } = useFetchFilms();
  const { data: usersData, isLoading: isLoadingUsers } = useFetchUsers();
  const { films, setFilms } = useFilms();
  const { setUsers, setUsersCopy, user } = useUsers();
  const { setIsLogin } = useConstant();
  useEffect(() => {
    user && setIsLogin(true);
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
        <>{children}</>
      )}
    </>
  );
};

export default App;
