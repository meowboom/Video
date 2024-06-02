import React, { useState } from "react";
import MyButton from "../../../../../share/MyButton/MyButton";
import { Link } from "react-router-dom";
import { useConstant } from "../../../../../storage/constant.storage";
import { useUsers } from "../../../../../storage/users.storage";

const UserName = () => {
  const { isLogin, setIsLogin } = useConstant();
  const { user, setUser } = useUsers();
  const [isVisible, setIsVisible] = useState(false);
  const handleLogOut = () => {
    setUser(null);
    setIsLogin(false);
  };

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div>
        <div className="cursor-pointer ">
          <span className="mr-1 text-lg">Account:</span>
          <span className="text-xl font-bold text-primary-main underline underline-offset-4">
            {isLogin && user?.name}
          </span>
        </div>
      </div>

      {/* Dropdown */}

      <div>
        <div
          className={`${isVisible ? "visible opacity-100" : "invisible  scale-75 opacity-0"} absolute top-[57px] z-50 duration-500`}
        >
          <div className="h-8" />
          <div className="h-72 w-40 rounded-md bg-[#464343] shadow-all shadow-white/30">
            <div className="flex h-full w-full flex-col items-center justify-around py-10">
              <Link
                to={"/tariff-plans"}
                className="rounded-2xl p-2 decoration-primary-main underline-offset-4 duration-500 hover:bg-white/10 hover:underline "
              >
                Payment
              </Link>
              <Link
                to={"/my-profile"}
                className="rounded-2xl p-2 decoration-primary-main underline-offset-4 duration-500 hover:bg-white/10 hover:underline "
              >
                My Profile
              </Link>

              <MyButton isFill={false} text="Log Out" onClick={handleLogOut} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserName;
