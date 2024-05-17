import React from "react";
import CategoryCard from "../../entities/CategoryCard/CategoryCard";

type Props = {};

const LeftBar = (props: Props) => {
  return (
    <div className=" fixed left-24 flex w-2/12 flex-col items-center justify-center ">
      <h2 className="mb-3 text-center text-2xl">Category</h2>
      <div>
        <CategoryCard title="Films" />
        <CategoryCard title="Serials" />
      </div>
    </div>
  );
};

export default LeftBar;
