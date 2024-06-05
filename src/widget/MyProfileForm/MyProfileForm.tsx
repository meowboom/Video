import React, { useEffect, useState } from "react";
import BlockForForm from "../../entities/BlockForForm/BlockForForm";
import { useUsers } from "../../storage/users.storage";
interface IMyProfileForm {
  clearAll: boolean;
}
const MyProfileForm = ({ clearAll }: IMyProfileForm) => {
  const [currentName, setCurrentName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentPhone, setCurrentPhone] = useState("");
  const { user } = useUsers();

  useEffect(() => {
    if (clearAll) {
      setCurrentName("");
      setCurrentEmail("");
      setCurrentPhone("");
    }
  }, [clearAll]);
  useEffect(() => {
    if (user) {
      setCurrentName(user?.userInfo?.name);
      setCurrentEmail(user?.userInfo?.email);
      setCurrentPhone(user?.userInfo?.phone);
    }
  }, [user]);
  return (
    <form>
      {user && (
        <section className="flex flex-col gap-3">
          <BlockForForm
            title="Name:"
            placeholder="Enter you name"
            type="text"
            value={currentName}
          />
          <BlockForForm
            title="Email:"
            placeholder="Enter you email"
            type="text"
            value={currentEmail}
          />
          <BlockForForm
            title="Phone:"
            placeholder="Enter you phone"
            type="text"
            value={currentPhone}
          />
          <BlockForForm
            title="Password:"
            placeholder="Currently password"
            type="password"
          />
          <BlockForForm title="New password:" placeholder="" type="password" />
          <BlockForForm
            title="Repeat new password:"
            placeholder=""
            type="password"
          />
        </section>
      )}
    </form>
  );
};

export default MyProfileForm;
