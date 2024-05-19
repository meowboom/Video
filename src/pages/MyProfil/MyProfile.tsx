import React, { useRef } from "react";
import HrLine from "../../share/HrLine/HrLine";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import MyButton from "../../share/MyButton/MyButton";
import BlockForForm from "../../entities/BlockForForm/BlockForForm";
import CheckStatus from "../../share/CheckStatus/CheckStatus";

type Props = {};

const MyProfile = (props: Props) => {
  const formValue = [
    "Name: ",
    "Email: ",
    "Phone: ",
    "Password: ",
    "New password: ",
    "Repeat new password: ",
  ];
  const chooseFileRef = useRef<HTMLInputElement>(null);

  return (
    <main className="absolute left-0 flex h-screen w-full items-center justify-center bg-black/30">
      <div className="flex h-5/6 w-5/6 flex-col items-center justify-around rounded-md bg-primary-bg shadow-all shadow-white/20">
        <header className=" mb-2 flex h-1/5 w-full items-center justify-around pt-10 text-primary-main">
          <nav>
            <Link to={"/"}>
              <img src={Logo} alt="logo" className="size-20" />
            </Link>
          </nav>
          <h1 className="pb-24 text-4xl">My Profile</h1>
          <nav>
            <MyButton isFill={false} text="Log Out" />
          </nav>
        </header>
        <span className="mb-5 w-11/12">
          <HrLine />
        </span>
        <section className="flex h-3/5 w-full justify-around">
          <div className="flex w-3/5 flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-3">
              {formValue.map((title) => (
                <BlockForForm key={title} title={title} value="Max" />
              ))}
            </div>
            <div className="flex w-full justify-center gap-7 text-lg">
              <div>
                <span>Tariff plan: </span>
                <span>{"Base plan"}</span>
              </div>
              <div className="flex">
                <span className="pr-2 text-primary-main">Payment status:</span>
                <span>{<CheckStatus />}</span>
              </div>
              <button className="rounded-sm px-3 py-[1px] text-sm text-primary-main decoration-primary-main underline-offset-4 duration-300 hover:bg-white/10 hover:text-white hover:underline">
                change
              </button>
            </div>
          </div>
          <div className="flex w-2/5 flex-col items-center justify-center">
            <img
              src={Logo}
              alt="avatar"
              className="mb-4 h-full w-3/5 bg-white/40"
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
        <section className="h-1/6 text-sm">
          <MyButton isFill={true} text="Save change" />
          <MyButton isFill={false} text="Cancel" />
        </section>
      </div>
    </main>
  );
};

export default MyProfile;
