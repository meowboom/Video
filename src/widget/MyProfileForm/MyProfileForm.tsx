import React, { useEffect, useState } from "react";
import BlockForForm from "../../entities/BlockForForm/BlockForForm";
import { useUsers } from "../../storage/users.storage";
const MyProfileForm = () => {
  const { userData } = useUsers();
  const { email, name, phone } = userData;

  return (
    <form>
      {userData && (
        <section className="flex flex-col gap-3">
          <BlockForForm
            id="name"
            title="Name:"
            placeholder="Enter you name"
            type="text"
            value={name}
          />
          <BlockForForm
            id="email"
            title="Email:"
            placeholder="Enter you email"
            type="text"
            value={email}
          />
          <BlockForForm
            id="phone"
            title="Phone:"
            placeholder="Enter you phone"
            type="text"
            value={phone}
          />
          <BlockForForm
            id="pas"
            title="Password:"
            placeholder="Currently password"
            type="password"
          />
          <BlockForForm
            id="new_pas"
            title="New password:"
            placeholder=""
            type="password"
          />
          <BlockForForm
            id="rep_new_pas"
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
