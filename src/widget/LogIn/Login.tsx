import React from "react";
import MyButton from "../../share/MyButton/MyButton";

export interface ILogin {
  title: string;
}
const Login = ({ title }) => {
  return (
    <div className="flex h-[97%] w-full justify-end rounded-l-full">
      <div className="my-10 flex w-11/12 flex-col items-center justify-around rounded-l-full bg-primary-bg py-20 shadow-all shadow-white/20">
        <div className="ml-20 flex items-center justify-center">
          <h2 className="text-3xl text-primary-main">{title}</h2>
        </div>
        <div className="mr-16 flex w-full flex-col items-end justify-center gap-4 text-xl">
          <div className="flex items-center justify-center">
            <label htmlFor="" className="pr-2 text-lg">
              Email:
            </label>
            <input
              type="text"
              className="border-b border-primary-hover/40 bg-transparent py-1 pl-2  text-primary-hover outline-none duration-300 placeholder:text-lg placeholder:text-white/20 focus:rounded-md focus:bg-white/10 "
              placeholder="textmax@gmail.com"
            />
          </div>

          <div className="flex items-center justify-center">
            <label htmlFor="" className="pr-2 text-lg">
              Password:
            </label>
            <input
              type="password"
              className="border-b border-primary-hover/40 bg-transparent py-1 pl-2  text-primary-hover outline-none duration-300 placeholder:text-lg placeholder:text-white/20 focus:rounded-md focus:bg-white/10 "
              placeholder="sadasdasd123"
            />
          </div>
        </div>
        <div className="ml-20">
          <MyButton isFill={true} text="Sign In" />
        </div>
      </div>
    </div>
  );
};

export default Login;
