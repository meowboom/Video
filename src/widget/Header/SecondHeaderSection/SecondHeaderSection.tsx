import React, { useEffect, useState } from "react";
import { useFilms } from "../../../storage/storage";

const SecondHeaderSection = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { films, setCopyFilms } = useFilms();

  useEffect(() => {
    const filteredFilms = films.filter((film) =>
      film.title.toLowerCase().trim().includes(inputValue.toLowerCase().trim()),
    );
    if (filteredFilms.length === 0) {
      setCopyFilms([]);
    } else {
      setCopyFilms(filteredFilms);
    }
    if (inputValue === "") {
      setCopyFilms(films);
    }
  }, [inputValue]);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex h-12 w-4/5 items-center justify-center  ">
        <input
          onChange={({ target }) => setInputValue(target.value)}
          type="text"
          value={inputValue}
          placeholder="Search..."
          className="h-12 w-10/12 cursor-pointer rounded-l-[20px] border-2 border-primary-main border-r-transparent bg-white/15 pl-4 text-xl text-primary-hover outline-none  duration-500 placeholder:text-xl placeholder:text-gray-400 hover:bg-white/20 focus:bg-white/30 focus:placeholder:text-transparent "
        />
        <button className="rounded-r-[20px] border border-primary-main bg-white/5 p-[9px]  px-5 duration-500 hover:bg-primary-main">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SecondHeaderSection;
