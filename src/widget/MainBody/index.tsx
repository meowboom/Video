import {
  ArrowUpIcon,
  ArrowDownIcon,
  HeartIcon,
} from "@heroicons/react/20/solid";

import { ENUMSortBTN, ISortBTNs } from "../../data/types";

export const BTN_FOR_SORT: ISortBTNs = [
  {
    title: ENUMSortBTN.lettersUp,
  },
  {
    title: ENUMSortBTN.lettersDown,
  },
  {
    title: ENUMSortBTN.ratingUp,
    img: <ArrowUpIcon className="size-6" />,
  },
  {
    title: ENUMSortBTN.ratingDown,
    img: <ArrowDownIcon className="size-6" />,
  },
  {
    title: ENUMSortBTN.yearUp,
    img: <ArrowUpIcon className="size-6" />,
  },
  {
    title: ENUMSortBTN.yearDown,
    img: <ArrowDownIcon className="size-6" />,
  },
  {
    title: ENUMSortBTN.favorite,
    img: <HeartIcon className="size-6 text-rose-700" />,
  },
];
