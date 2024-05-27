import React from "react";
import CategoryCard from "../../entities/CategoryCard/CategoryCard";
import { Link } from "react-router-dom";

const LeftBar = () => {
  return (
    <aside className="fixed left-24 flex w-2/12 flex-col items-center justify-center ">
      <h2 className="mb-3 text-center text-2xl">Category</h2>
      <div>
        <Link to={"/"}>
          <CategoryCard />
        </Link>
      </div>
    </aside>
  );
};

export default LeftBar;
