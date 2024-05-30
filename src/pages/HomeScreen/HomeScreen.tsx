import React, { ReactNode } from "react";
import Header from "../../widget/Header/Header";
import LeftBar from "../../widget/LeftBar/LeftBar";
import RightBar from "../../widget/RightBar/RightBar";

type Props = { children?: ReactNode };

const HomeScreen = ({ children }: Props) => {

  return (
    <div className="h-full w-full ">
      <Header />
      <div className="pt-36">
        <div className="mt-5 flex w-full justify-center">
          <LeftBar />
          {children}
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
