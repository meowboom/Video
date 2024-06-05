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
import { useFilms } from "../../storage/films.storage";

type Props = { children?: ReactNode };
const HomeScreen = ({ children }: Props) => {
  const { auth, isLogin } = useConstant();
  const { copyFilms } = useFilms();
  // ONLY TEST 
  const arr = [1, 2, 7];
  const first = () => {
    const newArr = copyFilms.map((film) => {
      if (arr.includes(Number(film.id))) {
        // Преобразуем film.id в число для точного сравнения
        return {
          ...film,
          isFavorite: true,
        };
      } else {
        return film;
      }
    });

    console.log(newArr); // Логируем обновленный массив
    return newArr; // Возвращаем обновленный массив, если нужно
  };
  first();
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
