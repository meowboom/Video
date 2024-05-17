import React from "react";
import { IFilm } from "../../widget/FilmCards/data";
import HrLine from "../../share/HrLine/HrLine";
import "./index.css";
import { HeartIcon } from "@heroicons/react/20/solid";

const VideoCard = ({
  description,
  favorite,
  posterURL,
  rate,
  title,
  year,
}: IFilm) => {
  return (
    <div
      id={`${year}`}
      className="flex h-[380px] w-64 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg bg-[#D9D9D9]/5 p-[2px] text-center shadow-all shadow-[#D9D9D9]/30 duration-500  hover:shadow-primary-hover"
    >
      <div>
        <div className="wrap">
          <div className="item">
            <div className="item-inner">
              {/* Img Preview */}
              <div className="preview px-1">
                <img
                  src={posterURL}
                  alt={title}
                  className={`mb-[2px] h-[300px] w-full rounded-md border-2 border-black/25 shadow-all shadow-black/30`}
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
      <h4 className="mb-1">{title}</h4>
      <span className="mb-[6px] w-56">
        <HrLine />
      </span>
      <div className="flex w-full items-center">
        <div className="flex w-2/3 justify-end">
          <h5>
            Rate:{" "}
            <span
              className={`${rate > 5 ? "text-secondary-green" : "text-secondary-yellow"}`}
            >
              {rate}/10
            </span>
          </h5>
        </div>
        <div className=" mr-4  flex w-1/3  items-center justify-end before:absolute before:translate-x-[74px] before:rounded-lg before:bg-white/20 before:px-3 before:py-[2px] before:text-sm before:text-gray-300 before:opacity-0 before:duration-700  before:ease-in-out before:content-['favorite']  hover:before:opacity-100">
          <HeartIcon
            className={`size-9  duration-300 hover:text-rose-300 ${favorite ? "text-rose-700" : "text-white/50"} `}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
