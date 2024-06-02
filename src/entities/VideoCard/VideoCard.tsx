import React, { useState } from "react";
import HrLine from "../../share/HrLine/HrLine";
import "./index.css";
import { HeartIcon } from "@heroicons/react/20/solid";
import { IVideoCard } from "../../data/types";

const VideoCard = ({
  description,
  isFavorite,
  thumbnailUrl,
  rate,
  title,
  year,
}: IVideoCard) => {
  const [fav, setFav] = useState(isFavorite === "true" ? true : false);
  console.log(fav);

  return (
    <div className="flex h-[400px] w-64 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg bg-[#D9D9D9]/5 p-[2px] text-center shadow-all shadow-[#D9D9D9]/30 duration-500  hover:shadow-primary-hover">
      {/* IMG + Description */}
      <div className="mt-2">
        <div className="wrap">
          <div className="item">
            <div className="item-inner">
              {/* IMG Preview */}
              <div className="preview px-1">
                <img
                  src={thumbnailUrl}
                  alt={title}
                  className={`h-[298px] w-full rounded-md border-2 border-black/25 shadow-all shadow-black/30`}
                />
              </div>
              {/* Description */}
              <div className="description px-3">
                <div
                  className={`mb-[2px] h-[300px] w-full  rounded-md border border-black/25 bg-primary-main/95 px-3  text-sm shadow-all shadow-black/30 `}
                >
                  <div className="flex h-full w-full items-center justify-center text-center">
                    {description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-around">
        <h4 className="text-lg">
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </h4>
        {/* HR */}
        <span className="w-4/5">
          <HrLine />
        </span>
        {/* Rate */}
        <div className="mb-2 flex w-11/12 items-center justify-around text-sm">
          <div className="">
            <h5>
              Rate:{" "}
              <span
                className={`${Number(rate) > 5 ? "text-secondary-green" : "text-secondary-yellow"}`}
              >
                {rate}/10
              </span>
            </h5>
          </div>
          <div>
            <span>Year: </span>
            <span>{year}</span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setFav(!fav);
            }}
            className=" before:absolute before:translate-x-5 before:translate-y-1 before:rounded-lg before:bg-white/20 before:px-3 before:py-[2px] before:text-sm before:text-gray-300 before:opacity-0 before:duration-700  before:ease-in-out before:content-['favorite']  hover:before:opacity-100"
          >
            <HeartIcon
              className={`size-8 duration-300 hover:text-rose-300 ${fav ? "text-rose-700" : "text-white/50"} `}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
