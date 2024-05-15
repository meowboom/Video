import React, { ReactNode } from "react";
import Header from "../../widget/Header/Header";
import LeftBar from "../../widget/LeftBar/LeftBar";
import RightBar from "../../widget/RightBar/RightBar";
import HrLine from "../../share/HrLine/HrLine";

type Props = { children: ReactNode };

const HomeScreen = ({ children }: Props) => {
  return (
    <div className="h-screen w-full ">
      <Header />
      <HrLine />
      <div className="mt-5 flex w-full justify-between">
        <LeftBar />
        <main className="h-screen w-8/12">Main Content</main>
        <RightBar />
      </div>
    </div>
  );
};

export default HomeScreen;
