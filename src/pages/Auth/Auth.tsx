import React from "react";
import src from "../../assets/logo.png";
import { Link } from "react-router-dom";
import MyButton from "../../share/MyButton/MyButton";

const Auth = () => {
  const handleButtonClick = (event: any) => {
    event.preventDefault();
    console.log("Button clicked!");
  };
  return (
    <Link to={"/"}>
      <div className="item-center mt-44 flex size-[500px] flex-col justify-center gap-10 bg-primary-bg">
        <div>Auth</div>
        <div>
          <img src={src} alt="src" />
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
          voluptates laborum alias exercitationem et distinctio. Non magnam
          repellat, dicta voluptates magni esse. Amet at omnis facere! Nobis
          nisi ab reiciendis?
        </div>

        <MyButton isFill={true} text="PUSH ME" onClick={handleButtonClick} />
      </div>
    </Link>
  );
};

export default Auth;
