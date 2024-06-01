import React, { useEffect, useRef, useState } from "react";
import MyButton from "../../share/MyButton/MyButton";

export interface ILogin {
  title: string;
}
const Login = ({ title }: ILogin) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const handelClick = () => {
    if (loginRef.current && passwordRef.current) {
      setLogin(loginRef.current.value);
      setPassword(passwordRef.current.value);
    }
  };
  return (
    <div className="flex h-[97%] w-full justify-end rounded-l-full">
      <div className="my-10 flex w-11/12 flex-col items-center justify-around rounded-l-full bg-primary-bg py-20 shadow-all shadow-white/20">
        <div className="ml-20 flex items-center justify-center">
          <h2 className="text-3xl text-primary-main">{title}</h2>
        </div>
        <div className="mr-16 flex w-full flex-col items-end justify-center gap-4 text-xl">
          <div className="flex items-center justify-center">
            <label id="email" className="pr-2 text-lg">
              Email:
            </label>
            <input
              ref={loginRef}
              type="text"
              className="border-b border-primary-hover/40 bg-transparent py-1 pl-2  text-primary-hover outline-none duration-300 placeholder:text-lg placeholder:text-white/20 focus:rounded-md focus:bg-white/10 "
              placeholder="textmax@gmail.com"
            />
          </div>

          <div className="flex items-center justify-center">
            <label id="password" className="pr-2 text-lg">
              Password:
            </label>
            <input
              ref={passwordRef}
              type="password"
              className="border-b border-primary-hover/40 bg-transparent py-1 pl-2  text-primary-hover outline-none duration-300 placeholder:text-lg placeholder:text-white/20 focus:rounded-md focus:bg-white/10 "
              placeholder="sadasdasd123"
            />
          </div>
        </div>
        {/* temporarily */}
        <div className="flex flex-col">
          <span>Login: {login}</span>
          <span>Password: {password}</span>
        </div>
        <div className="ml-20">
          <MyButton isFill={true} text="Sign In" onClick={handelClick} />
        </div>
      </div>
    </div>
  );
};

export default Login;
