import React from "react";
import CheckStatus from "../../share/CheckStatus/CheckStatus";
import UserName from "../../widget/Header/ThirdHeaderSection/UserAccount/UserAccountUserName&Dropdown/UserName";
import { useUsers } from "../../storage/users.storage";

const UserAccount = () => {
  const { user } = useUsers();
  return (
    <div className="flex items-center justify-center gap-4">
      <div>
        <img
          src={user?.avatar}
          width={70}
          height={70}
          alt="user-icon"
          className="rounded-full"
        />
      </div>
      <UserName />
      <CheckStatus />
    </div>
  );
};

export default UserAccount;
