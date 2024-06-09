import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import { Link } from "react-router-dom";
import Loader from "../../share/Loader/Loader";
import { IFilm } from "../../data/types";
import { useFilms } from "../../storage/films.storage";
// Temporary
import MyButton from "../../share/MyButton/MyButton";
import { useConstant } from "../../storage/constant.storage";

const DailyTop = () => {
  const { getDailyFilm } = useFilms();
  const dailyTopVideo: IFilm = getDailyFilm();
  // const { setIsNotification } = useConstant();
  return (
    <>
      {!dailyTopVideo ? (
        <Loader />
      ) : (
        <div className="mb-5">
          <div className=" mb-3 text-center text-2xl">Daily Top</div>
          <Link to={`/id${dailyTopVideo.id}`}>
            <VideoCard
              id={dailyTopVideo.id}
              isFavorite={dailyTopVideo.isFavorite}
              thumbnailUrl={dailyTopVideo.thumbnailUrl}
              rate={dailyTopVideo.rate}
              title={dailyTopVideo.title}
              description={dailyTopVideo.description}
              year={dailyTopVideo?.uploadTime.year}
            />
          </Link>
          {/* Temporary */}
          {/* <MyButton
            isFill={true}
            text="Click"
            onClick={() => setIsNotification(true)}
          /> */}
        </div>
      )}
    </>
  );
};

export default DailyTop;
