import React, { ReactNode } from "react";

type Props = { children: ReactNode };

const MainBody = ({ children }: Props) => {
  return (
    <main className="mx-auto w-7/12 ">
      <div>{children}</div>
    </main>
  );
};

export default MainBody;
