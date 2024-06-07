import React, { useRef, useState, useEffect } from "react";

interface IBlockForm {
  title: string;
  value?: string;
  placeholder: string;
  type: string;
}

const BlockForForm = ({ title, value, placeholder, type }: IBlockForm) => {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);
  // console.log("value", value);
  // console.log("inputValue", inputValue);

  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  useEffect(() => setInputValue(value), [value]);
  const toggleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <label htmlFor="title">{title}</label>
      <input
        type={type}
        ref={inputRef}
        className={`cursor-pointer rounded-md bg-white/5 pl-2 text-primary-hover outline-none duration-500 hover:bg-primary-hover/20 focus:bg-white/10 ${
          isEdit ? "cursor-text" : "cursor-pointer"
        }`}
        placeholder={placeholder}
        value={inputValue}
        onChange={toggleInput}
        onClick={() => !isEdit && setIsEdit(true)}
      />
      <button
        type="button"
        onClick={() => setIsEdit((prev) => !prev)}
        className="rounded-sm px-3 py-[1px] text-sm decoration-primary-main underline-offset-4 duration-300 hover:bg-white/10 hover:underline"
      >
        edit
      </button>
    </div>
  );
};

export default BlockForForm;
