import { XMarkIcon } from "@heroicons/react/16/solid";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import React, { FC } from "react";

type Props = {};

const CheckStatus: FC<Props> = () => {
  const isPaid = true;
  return (
    <div>
      {isPaid ? (
        <CheckBadgeIcon className="size-7 rounded-full bg-secondary-green/60" />
      ) : (
        <XMarkIcon className="size-7 rounded-full bg-red-500" />
      )}
    </div>
  );
};

export default CheckStatus;
