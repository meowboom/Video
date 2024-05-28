import React, { useRef, useState, useEffect } from "react";

type Props = {
  title: string;
  value?: string;
  placeholder: string;
  type: string;
};

const BlockForForm = ({ title, value, placeholder, type }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <label htmlFor="">{title}</label>
      <input
        type={type}
        ref={inputRef}
        className={`cursor-pointer rounded-md bg-white/5 pl-2 text-primary-hover outline-none duration-500 hover:bg-primary-hover/20 focus:bg-white/10 ${
          isEdit ? "cursor-text" : "cursor-pointer"
        }`}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onClick={() => !isEdit && setIsEdit(true)}
      />
      <button
        onClick={() => setIsEdit((prev) => !prev)}
        className="rounded-sm px-3 py-[1px] text-sm decoration-primary-main underline-offset-4 duration-300 hover:bg-white/10 hover:underline"
      >
        edit
      </button>
    </div>
  );
};

export default BlockForForm;
