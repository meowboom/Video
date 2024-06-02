import React, { useEffect, useState } from "react";
import BlockForForm from "../../entities/BlockForForm/BlockForForm";
import { useUsers } from "../../storage/users.storage";

interface IForm {
  label: string;
  placeholder: string;
  type: string;
  value?: string;
}
const MyProfileForm = () => {
  const [formInputData, setFormInputData] = useState<IForm[]>([
    { label: "Name", placeholder: "Enter you name", type: "text" },
    { label: "Email", placeholder: "Enter you email", type: "text" },
    { label: "Phone", placeholder: "Enter you phone", type: "text" },
    { label: "Password", placeholder: "Currently password", type: "password" },
    { label: "New password:", placeholder: "", type: "password" },
    { label: "Repeat new password:", placeholder: "", type: "password" },
  ]);
  const { user } = useUsers();
  //   useEffect(() => {
  //     if (user) {
  //       setFormInputData((prevData) =>
  //         prevData.map((field) => {
  //           switch (field.label) {
  //             case "Name":
  //               return { ...field, value: user.name };
  //             case "Email":
  //               return { ...field, value: user.email };
  //             case "Phone":
  //               return { ...field, value: user.phone };
  //             default:
  //               return field;
  //           }
  //         }),
  //       );
  //     }
  //   }, [user]);

  return (
    <form className="flex flex-col gap-3">
      {formInputData.map((obj) => (
        <BlockForForm
          key={obj.label}
          title={obj.label}
          placeholder={obj.placeholder}
          type={obj.type}
          value={obj?.value}
        />
      ))}
    </form>
  );
};

export default MyProfileForm;
