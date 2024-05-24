import { ReactNode } from "react";
// import { sortByParams } from "../../share/helpers";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  HeartIcon,
} from "@heroicons/react/20/solid";

export enum ENUMSortBtn {
  lettersUp = "A-Z",
  lettersDown = "Z-A",
  ratingUp = "Ratting up",
  ratingDown = "Ratting down",
  yearUp = "Year up",
  yearDown = "Year down",
  favorite = "My favorite",
}

interface SortBtn {
  title: ENUMSortBtn;
  img?: any;
  // onClick: (sortMethods: ENUMSortBtn) => void;
}

type SortBtns = SortBtn[];

export const BTN_FOR_SORT: SortBtns = [
  {
    title: ENUMSortBtn.lettersUp,
    // onClick: () => sortByParams(ENUMSortBtn.lettersUp),
  },
  {
    title: ENUMSortBtn.lettersDown,
    // onClick: () => sortByParams(ENUMSortBtn.lettersDown),
  },
  {
    title: ENUMSortBtn.ratingUp,
    img: <ArrowUpIcon className="size-6" />,

    // onClick: () => sortByParams(ENUMSortBtn.ratingUp),
  },
  {
    title: ENUMSortBtn.ratingDown,
    img: <ArrowDownIcon className="size-6" />,
    // onClick: () => sortByParams(ENUMSortBtn.ratingDown),
  },
  {
    title: ENUMSortBtn.yearUp,
    img: <ArrowUpIcon className="size-6" />,
    // onClick: () => sortByParams(ENUMSortBtn.yearUp),
  },
  {
    title: ENUMSortBtn.yearDown,
    img: <ArrowDownIcon className="size-6" />,
    // onClick: () => sortByParams(ENUMSortBtn.yearDown),
  },
  {
    title: ENUMSortBtn.favorite,
    img: <HeartIcon className="size-6 text-rose-700" />,
    //   onClick: () => filterByParams(),
  },
];
