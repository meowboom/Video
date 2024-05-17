import React, { ReactNode } from "react";
import Loader from "../../share/Loader/Loader";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";

type Props = { children: ReactNode };

const MainBody = ({ children }: Props) => {
  const isLoading = false;

  return (
    <main className={`${isLoading && "h-screen"} mx-auto w-7/12 `}>
      <div className="mb-4 mt-1 flex w-full items-center justify-center ">
        <div className="mr-4 flex cursor-pointer items-center justify-center rounded-lg bg-white/5 px-4 py-1 duration-300 hover:bg-white/10 hover:text-primary-main">
          <span className="mr-2 text-sm duration-300 ">A-Z</span>
        </div>
        <div className="mr-4 flex cursor-pointer items-center justify-center rounded-lg bg-white/5 px-4 py-1 duration-300 hover:bg-white/10 hover:text-primary-main">
          <span className="mr-2 text-sm ">Z-A</span>
        </div>
        <div className="mr-4 flex cursor-pointer items-center justify-center rounded-lg bg-white/5 px-4 py-1 duration-300 hover:bg-white/10 hover:text-primary-main">
          <span className="mr-1 text-sm">Rating</span>
          <ArrowUpIcon className="size-6" />
        </div>
        <div className="mr-4 flex cursor-pointer items-center justify-center rounded-lg bg-white/5 px-4 py-1 duration-300 hover:bg-white/10 hover:text-primary-main">
          <span className="mr-1 text-sm">Rating</span>
          <ArrowDownIcon className="size-6" />
        </div>
        <div className="mr-4 flex cursor-pointer items-center justify-center rounded-lg bg-white/5 px-4 py-1 duration-300 hover:bg-white/10 hover:text-primary-main">
          <span className="mr-1 text-sm">Year</span>
          <ArrowUpIcon className="size-6" />
        </div>
        <div className="mr-4 flex cursor-pointer items-center justify-center rounded-lg bg-white/5 px-4 py-1 duration-300 hover:bg-white/10 hover:text-primary-main">
          <span className="mr-1 text-sm">Year</span>
          <ArrowDownIcon className="size-6" />
        </div>
      </div>
      {isLoading ? <Loader /> : <div>{children}</div>}
    </main>
  );
};

export default MainBody;
