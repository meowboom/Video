import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { IFilm } from "../../data/types";
import { uniqueKey } from "../../share/helpers";
import { useConstant } from "../../storage/constant.storage";

const PosterForFilmPage = ({ film }: { film: IFilm }) => {
  const posters = [film?.thumbnailUrl, ...film?.preview?.screen];
  const { activeIMG, setActiveIMG } = useConstant();
  return (
    <div className="flex w-1/2 select-none flex-col items-center justify-center">
      {/* Poster */}
      <div>
        <img
          src={posters[activeIMG]}
          alt="poster"
          className="h-[550px] rounded-lg shadow-all shadow-black/70"
        />
      </div>
      {/* Posters Bar */}
      <section className="my-2 flex h-20 w-full items-center justify-center rounded-2xl bg-primary-main/20">
        <div
          onClick={() => activeIMG > 0 && setActiveIMG(activeIMG - 1)}
          className="m-1 ml-2 flex w-1/12 cursor-pointer items-center justify-center rounded-xl  py-4 duration-300 hover:bg-[#D9D9D9]/5 hover:text-primary-main"
        >
          <ArrowLeftIcon className="size-6" />
        </div>
        <div className=" mt-2 flex h-full w-10/12  items-center justify-around gap-3 overflow-hidden ">
          {posters.map((img, i) => (
            <div key={uniqueKey()}>
              <button
                onClick={() => setActiveIMG(i)}
                className={`${activeIMG === i ? "shadow-primary-main" : ""} rounded-xl shadow-all  duration-300 hover:shadow-primary-main`}
              >
                <img src={img} className="size-16 rounded-xl " alt="pre" />
              </button>
            </div>
          ))}
        </div>
        <div
          onClick={() =>
            activeIMG < posters.length - 1 && setActiveIMG(activeIMG + 1)
          }
          className="mr-2 flex w-1/12 cursor-pointer items-center justify-center rounded-xl  py-4 duration-300 hover:bg-[#D9D9D9]/5 hover:text-primary-main"
        >
          <ArrowRightIcon className="size-6" />
        </div>
      </section>
    </div>
  );
};

export default PosterForFilmPage;
