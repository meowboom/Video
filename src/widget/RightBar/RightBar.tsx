import React from "react";
import DailyTop from "../../entities/Daily/DailyTop";
import {
  Notification,
  NotificationType,
} from "../../share/Notification/Notification";
import MyButton from "../../share/MyButton/MyButton";
import { useConstant } from "../../storage/constant.storage";

const RightBar = () => {
  const { setIsNotification } = useConstant();
  return (
    <aside className="fixed right-24 flex w-2/12 flex-col items-center  justify-center ">
      <DailyTop />
      <MyButton
        isFill={true}
        text="Notification"
        onClick={() => setIsNotification(true)}
      />
      <Notification
        key={1}
        message="You enter to system"
        title="Success"
        type={NotificationType.success}
      />
    </aside>
  );
};

export default RightBar;
