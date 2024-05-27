import React from "react";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { useFilms } from "../../../storage/storage";

const FirstHeaderSection = () => {
  const { setCopyFilms, films } = useFilms();
  return (
    <div className="flex w-full items-center justify-center ">
      <Link to={"/"} className="lg:w-1/3" onClick={() => setCopyFilms(films)}>
        <img
          width={98}
          height={98}
          src={Logo}
          alt="logo"
          className="rounded-full shadow-white duration-1000 hover:scale-110 hover:shadow-all"
        />
      </Link>
    </div>
  );
};

export default FirstHeaderSection;
