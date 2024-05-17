import React, { ReactNode } from "react";
import Loader from "../../share/Loader/Loader";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  HeartIcon,
} from "@heroicons/react/20/solid";

type Props = { children: ReactNode };

export enum SortBtn {
  lettersUp = "A-Z",
  lettersDown = "Z-A",
  ratingUp = "Ratting up",
  ratingDown = "Ratting down",
  yearUp = "Year up",
  yearDown = "Year down",
  favorite = "My favorite",
}

const MainBody = ({ children }: Props) => {
  const isLoading = false;
  // повесить сортировку на кнопки + доработать кнопки при нажатии эктив
  return (
    <main className={`${isLoading && "h-screen"} mx-auto w-7/12 `}>
      <div className="mb-4 mt-1 flex w-full items-center justify-center ">
        <div className="mr-4 flex cursor-pointer items-center justify-center rounded-lg bg-white/5 px-4 py-1 duration-300 hover:bg-white/10 hover:text-primary-main">
          <span className="mr-2 text-sm duration-300 " id={SortBtn.lettersUp}>
            {SortBtn.lettersUp}
          </span>
        </div>
        <div className="mr-4 flex cursor-pointer items-center justify-center rounded-lg bg-white/5 px-4 py-1 duration-300 hover:bg-white/10 hover:text-primary-main">
          <span className="mr-2 text-sm " id={SortBtn.lettersDown}>
            {SortBtn.lettersDown}
          </span>
        </div>
        <div className="mr-4 flex cursor-pointer items-center justify-center rounded-lg bg-white/5 px-2 py-1 duration-300 hover:bg-white/10 hover:text-primary-main">
          <span className="mr-1 text-sm" id={SortBtn.ratingUp}>
            {SortBtn.ratingUp}
          </span>
          <ArrowUpIcon className="size-6" />
        </div>
        <div className="mr-4 flex cursor-pointer items-center justify-center rounded-lg bg-white/5 px-2 py-1 duration-300 hover:bg-white/10 hover:text-primary-main">
          <span className="mr-1 text-sm" id={SortBtn.ratingDown}>
            {SortBtn.ratingDown}
          </span>
          <ArrowDownIcon className="size-6" />
        </div>
        <div className="mr-4 flex cursor-pointer items-center justify-center rounded-lg bg-white/5 px-2 py-1 duration-300 hover:bg-white/10 hover:text-primary-main">
          <span className="mr-1 text-sm" id={SortBtn.yearUp}>
            {SortBtn.yearUp}
          </span>
          <ArrowUpIcon className="size-6" />
        </div>
        <div className="mr-4 flex cursor-pointer items-center justify-center rounded-lg bg-white/5 px-2 py-1 duration-300 hover:bg-white/10 hover:text-primary-main">
          <span className="mr-1 text-sm" id={SortBtn.yearDown}>
            {SortBtn.yearDown}
          </span>
          <ArrowDownIcon className="size-6" />
        </div>
        <div className="mr-4 flex cursor-pointer items-center justify-center rounded-lg bg-white/5 px-2 py-1 duration-300 hover:bg-white/10 hover:text-primary-main">
          <span className="mr-1 text-sm" id={SortBtn.favorite}>
            {SortBtn.favorite}
          </span>
          <HeartIcon className={`size-6 text-rose-700`} />
        </div>
      </div>
      {isLoading ? <Loader /> : <div>{children}</div>}
    </main>
  );
};

export default MainBody;
