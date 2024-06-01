import React, { useEffect, useRef, useState } from "react";
import MyButton from "../../share/MyButton/MyButton";

export interface IRegister {
  title: string;
}

const Register = ({ title }: IRegister) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmRef = useRef<HTMLInputElement | null>(null);

  const handleRegister = () => {
    const currentName = nameRef?.current?.value || "User";
    const currentEmail = emailRef?.current?.value || "";
    const currentPassword = passwordRef?.current?.value || "";
    const currentConfirm = confirmRef?.current?.value || "";

    setName(currentName);
    setEmail(currentEmail);
    setPassword(currentPassword);
    setConfirm(currentConfirm);

    if (
      currentPassword === currentConfirm &&
      currentName &&
      currentEmail &&
      currentPassword
    ) {
      const newUser = {
        name: currentName,
        email: currentEmail,
        password: currentPassword,
      };
      console.log(newUser);
    } else {
      console.log("Password not match");
    }
  };
  return (
    <div className="flex h-[97%] w-full justify-end rounded-l-full">
      <div className="my-10 flex w-11/12 flex-col items-center justify-around rounded-l-full bg-primary-bg py-10 shadow-all shadow-white/20">
        <div className="ml-20 flex  items-center justify-center">
          <h2 className="text-3xl text-primary-main">{title}</h2>
        </div>
        <div className="mr-16 flex w-full flex-col items-end justify-center gap-4 text-xl">
          <div className="flex items-center justify-center">
            <label className="pr-2 text-lg">Name:</label>
            <input
              ref={nameRef}
              type="text"
              className="border-b border-primary-hover/40 bg-transparent py-[1px] pl-2  text-primary-hover outline-none duration-300 placeholder:text-lg placeholder:text-white/20 focus:rounded-md focus:bg-white/10 "
              placeholder="Maksim"
            />
          </div>

          <div className="flex items-center justify-center">
            <label className="pr-2 text-lg">Email:</label>
            <input
              ref={emailRef}
              type="text"
              className="border-b border-primary-hover/40 bg-transparent py-[1px] pl-2  text-primary-hover outline-none duration-300 placeholder:text-lg placeholder:text-white/20 focus:rounded-md focus:bg-white/10 "
              placeholder="textmax@gmail.com"
            />
          </div>

          <div className="flex items-center justify-center">
            <label className="pr-2 text-lg">Password:</label>
            <input
              ref={passwordRef}
              type="password"
              className="border-b border-primary-hover/40 bg-transparent py-[1px] pl-2  text-primary-hover outline-none duration-300 placeholder:text-lg placeholder:text-white/20 focus:rounded-md focus:bg-white/10 "
              placeholder="sadasdasd123"
            />
          </div>
          <div className="flex items-center justify-center">
            <label className="pr-2 text-lg">Confirm:</label>
            <input
              ref={confirmRef}
              type="password"
              className="border-b border-primary-hover/40 bg-transparent py-[1px] pl-2  text-primary-hover outline-none duration-300 placeholder:text-lg placeholder:text-white/20 focus:rounded-md focus:bg-white/10 "
              placeholder="sadasdasd123"
            />
          </div>
        </div>
        {/* temporarily */}

        <div className="flex flex-col">
          <span>Name:{name}</span>
          <span>Email:{email}</span>
          <span>Password:{password}</span>
        </div>
        <div className="ml-20">
          <MyButton isFill={true} text="Register" onClick={handleRegister} />
        </div>
      </div>
    </div>
  );
};

export default Register;
