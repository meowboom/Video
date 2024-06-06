import React, { ReactNode } from "react";
import Header from "../../widget/Header/Header";
import LeftBar from "../../widget/LeftBar/LeftBar";
import RightBar from "../../widget/RightBar/RightBar";
import Login from "../../widget/LogIn/Login";
import Auth from "../Auth/Auth";
import { useConstant } from "../../storage/constant.storage";
import Register from "../../widget/Register/Register";
import {
  Notification,
  NotificationType,
} from "../../share/Notification/Notification";

type Props = { children?: ReactNode };
const HomeScreen = ({ children }: Props) => {
  const { auth, isLogin } = useConstant();

  return (
    <div className="h-full w-full ">
      <Header />
      <div className="pt-36">
        <div className="mt-5 flex w-full justify-center">
          <LeftBar />
          {children}
          <RightBar />
          <Auth
            children={
              auth === "Register" ? (
                <Register title="Register" />
              ) : auth === "Log In" ? (
                <Login title="Login" />
              ) : (
                ""
              )
            }
          />
        </div>
      </div>
      {isLogin && (
        <Notification
          key={1}
          message="You enter to system"
          title="Success"
          type={NotificationType.success}
        />
      )}
    </div>
  );
};

export default HomeScreen;
