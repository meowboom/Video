import React, { ReactNode } from "react";
import Header from "../../widget/Header/Header";
import LeftBar from "../../widget/LeftBar/LeftBar";
import RightBar from "../../widget/RightBar/RightBar";

type Props = { children: ReactNode };

const HomeScreen = ({ children }: Props) => {
  return (
    <div className="h-screen w-full ">
      <Header />
      <div className="flex justify-between">
        <LeftBar />
        <main>Main Content</main>
        <RightBar />
      </div>
    </div>
  );
};

export default HomeScreen;
