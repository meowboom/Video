import React from "react";
import CategoryCard from "../../entities/CategoryCard/CategoryCard";

const LeftBar = () => {
  return (
    <aside className=" fixed left-24 flex w-2/12 flex-col items-center justify-center ">
      <h2 className="mb-3 text-center text-2xl">Category</h2>
      <div>
        <CategoryCard title="Films" />
        <CategoryCard title="Serials" />
      </div>
    </aside>
  );
};

export default LeftBar;
