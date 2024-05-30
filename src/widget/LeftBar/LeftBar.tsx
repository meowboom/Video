import React from "react";
import CategoryCard from "../../entities/CategoryCard/CategoryCard";
import { Link } from "react-router-dom";

const LeftBar = () => {
  return (
    <aside className="fixed left-24 mt-3 flex w-2/12 flex-col items-center justify-center">
      <div>
        <Link to={"/"}>
          <CategoryCard />
        </Link>
      </div>
    </aside>
  );
};

export default LeftBar;
