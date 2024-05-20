import React from "react";
import PriceCards from "../../widget/PriceCards/PriceCards";
import HrLine from "../../share/HrLine/HrLine";

type Props = {};

const TariffPlans = (props: Props) => {
  return (
    <div className="flex h-screen w-full flex-col items-center">
      <div className="mt-5 p-10 text-center text-4xl text-primary-main">
        Pricing plans for teams of all sizes
      </div>
      <div className="w-11/12">
        <HrLine />
      </div>
      <div className="w-3/4 py-16 text-center text-lg">
        Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi
        iusto modi velit ut non voluptas in. Explicabo id ut laborum.
      </div>
      <PriceCards />
    </div>
  );
};

export default TariffPlans;
