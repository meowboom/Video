import React from "react";

import { XMarkIcon } from "@heroicons/react/16/solid";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { useConstant } from "../../storage/constant.storage";
import { useUsers } from "../../storage/users.storage";

const CheckStatus = () => {
  const { isLogin } = useConstant();
  const { user } = useUsers();
  return (
    <div>
      {isLogin && user?.paymentStatus === "paid" ? (
        <CheckBadgeIcon className="size-7 rounded-full bg-secondary-green/60" />
      ) : (
        <XMarkIcon className="size-7 rounded-full bg-red-500" />
      )}
    </div>
  );
};

export default CheckStatus;
