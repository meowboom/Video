import React, { useState } from "react";
import MyButton from "../../../../../share/MyButton/MyButton";

type Props = {};

const UserName = (props: Props) => {
  const userName = "Maksim";
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div>
        <div className="cursor-pointer ">
          <span className="mr-1 text-lg">Account:</span>
          <span className="text-xl font-bold text-primary-main underline underline-offset-4">
            {userName}
          </span>
        </div>
      </div>

      {/* Dropdown */}

      <div>
        <div
          className={`${isVisible ? "block" : "hidden"} absolute top-[57px] z-50`}
        >
          <div className="h-8" />
          <div className="h-72 w-40 rounded-md bg-[#464343] shadow-all shadow-white/30">
            <div className="flex h-full w-full flex-col items-center justify-around py-10">
              <a
                href="#"
                className="rounded-2xl p-2 decoration-primary-main underline-offset-4 duration-500 hover:bg-white/10 hover:underline "
              >
                Payment
              </a>
              <a
                href="#"
                className="rounded-2xl p-2 decoration-primary-main underline-offset-4 duration-500 hover:bg-white/10 hover:underline "
              >
                My Profile
              </a>
              <MyButton isFill={false} text="Log Out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserName;
