import React, { ReactNode } from "react";
import Loader from "../../share/Loader/Loader";

type Props = { children: ReactNode };

const MainBody = ({ children }: Props) => {
  const isLoading = false;
  return (
    <main className={`${isLoading && "h-screen"} mx-auto w-7/12 `}>
      {isLoading ? <Loader /> : <div>{children}</div>}
    </main>
  );
};

export default MainBody;
