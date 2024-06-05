import React from "react";
import DailyTop from "../../entities/Daily/DailyTop";
import { useConstant } from "../../storage/constant.storage";

const RightBar = () => {
  const { setIsNotification } = useConstant();
  return (
    <aside className="fixed right-24 flex w-2/12 flex-col items-center  justify-center ">
      <DailyTop />
     
      
    </aside>
  );
};

export default RightBar;
