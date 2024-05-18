import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import { FILMS } from "../../widget/FilmCards/data";

type Props = {};

const DailyTop = (props: Props) => {
   const dailyTopVideo = FILMS.sort((a, b) => b.rate - a.rate)[0];

  return (
    <div className="mb-5">
      <div className=" mb-3 text-center text-2xl">Daily Top</div>
      <div>
        <VideoCard
          favorite={dailyTopVideo.favorite}
          posterURL={dailyTopVideo.posterURL}
          rate={dailyTopVideo.rate}
          title={dailyTopVideo.title}
          description={dailyTopVideo.description}
          year={dailyTopVideo.year}
        />
      </div>
    </div>
  );
};

export default DailyTop;
