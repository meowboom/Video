import React, { ReactNode, useState } from "react";
import Loader from "../../share/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { FILMS_URL } from "../../data/data";
import { useFetch } from "../../share/hooks";

type Props = { children: ReactNode };

const MainBody = ({ children }: Props) => {
  const { isLoading } = useQuery({
    queryKey: ["films"],
    queryFn: () => useFetch(FILMS_URL),
  });

  return (
    <main className={`${isLoading && "h-screen"} mx-auto w-7/12 `}>
      {isLoading ? <Loader /> : <div>{children}</div>}
    </main>
  );
};

export default MainBody;
