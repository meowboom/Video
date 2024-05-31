import React, { ReactNode } from "react";

interface IWrapper {
  children: ReactNode;
}

const Wrapper = ({ children }: IWrapper) => {
  return <div className="h-full w-full px-24">{children}</div>;
};

export default Wrapper;
