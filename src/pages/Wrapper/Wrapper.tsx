import React, { ReactNode } from "react";

type Props = { children: ReactNode };

const Wrapper = ({ children }: Props) => {
  return <div className="h-full w-full px-24">{children}</div>;
};

export default Wrapper;
