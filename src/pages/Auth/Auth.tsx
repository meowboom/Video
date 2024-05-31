import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useConstant } from "../../storage/constant.storage";

interface IAuth {
  children: React.ReactNode;
}

const Auth = ({ children }: IAuth) => {
  const { auth, setAuth } = useConstant();
  return (
    <div
      className={`${auth !== null && "-translate-x-[0%]"} fixed right-0 z-50 flex h-3/4 w-4/12 translate-x-full transform items-center justify-end rounded-l-full bg-white/20 py-5 pl-5 transition-transform duration-500  ease-in-out`}
    >
      <div className=" flex h-full w-full items-center justify-center rounded-l-full bg-primary-bg/90 shadow-all shadow-black">
        <XMarkIcon
          className="absolute right-6 top-6 size-10 cursor-pointer duration-300 hover:text-primary-hover"
          onClick={() => setAuth(null)}
        />
        {children}
      </div>
    </div>
  );
};

export default Auth;
