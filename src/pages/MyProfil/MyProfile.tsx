import React, { useEffect, useRef, useState } from "react";
import HrLine from "../../share/HrLine/HrLine";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "../../share/MyButton/MyButton";
import CheckStatus from "../../share/CheckStatus/CheckStatus";
import { useConstant } from "../../storage/constant.storage";
import { useUsers } from "../../storage/users.storage";
import MyProfileForm from "../../widget/MyProfileForm/MyProfileForm";

const MyProfile = () => {
  const chooseFileRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState<string>();
  const { setIsLogin } = useConstant();
  const { user, setUser } = useUsers();
  const handleLogOut = () => {
    setUser(null);
    setIsLogin(false);
    navigate("/");
  };
  useEffect(
    () =>
      user?.avatar
        ? setAvatar(user?.avatar)
        : setAvatar("https://github.com/shadcn.png"),
    [],
  );
  return (
    <main className="absolute left-0 flex h-screen w-full items-center justify-center bg-black/30">
      <div className="flex h-5/6 w-5/6 flex-col items-center justify-around rounded-md bg-primary-bg shadow-all shadow-white/20">
        {/* Header section */}
        <header className=" flex h-1/5 w-full items-center justify-around pt-10 text-primary-main">
          <nav>
            <Link to={"/"}>
              <img
                src={Logo}
                alt="logo"
                width={98}
                height={98}
                className="rounded-full shadow-white duration-1000 hover:scale-110 hover:shadow-all"
              />
            </Link>
          </nav>
          <h1 className="text-4xl">My Profile</h1>
          <nav>
            <MyButton isFill={false} text="Log Out" onClick={handleLogOut} />
          </nav>
        </header>
        <span className="my-5 w-11/12">
          <HrLine />
        </span>
        {/* Form section */}
        <section className="flex h-3/5 w-full justify-around">
          {/* User data section */}
          <div className="flex w-3/5 flex-col items-center justify-center gap-4">
            {/* Form */}
            <MyProfileForm />
            <div className="flex w-full items-center justify-center gap-7 text-lg">
              <div>
                <span>Tariff plan: </span>
                <span className="underline underline-offset-4">
                  {"Base plan"}
                </span>
              </div>
              <div className="flex">
                <span className="pr-2 text-primary-main">Payment status:</span>
                <span>{<CheckStatus />}</span>
              </div>
              <Link
                to={"/tariff-plans"}
                className="rounded-sm px-3 pb-[3px] pt-[1px] text-sm text-primary-main decoration-primary-main underline-offset-4 duration-300 hover:bg-white/10 hover:text-white hover:underline"
              >
                change
              </Link>
            </div>
          </div>
          {/* Avatar section */}
          <div className="flex w-2/5 flex-col items-center justify-center">
            <img
              src={avatar}
              alt="avatar"
              className="w-max-[300px] h-max-[300px] mb-4 h-auto w-3/5 bg-white/40"
            />
            <button
              onClick={() =>
                chooseFileRef.current && chooseFileRef.current.click()
              }
              className="rounded-sm px-3 py-[1px] text-sm text-primary-main decoration-primary-main underline-offset-4 duration-300 hover:bg-white/10 hover:text-white hover:underline"
            >
              <input ref={chooseFileRef} type="file" className="hidden" />
              change
            </button>
          </div>
        </section>
        {/* Button section */}
        <section className="h-1/6 text-sm">
          <MyButton isFill={true} text="Save change" />
          <MyButton isFill={false} text="Cancel" />
        </section>
      </div>
    </main>
  );
};

export default MyProfile;
