import React, { useRef, useState, useEffect } from "react";
import { useConstant } from "../../storage/constant.storage";

interface IBlockForm {
  title: string;
  value?: string;
  placeholder: string;
  type: string;
  id: string;
}

const BlockForForm = ({ id, title, value, placeholder, type }: IBlockForm) => {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const { setIsBtnDisable } = useConstant();
  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  useEffect(() => setInputValue(value), [value]);
  useEffect(
    () => (inputValue === "" ? setIsBtnDisable(true) : setIsBtnDisable(false)),
    [inputValue],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const emptyValueClass =
    inputValue === "" && (id === "name" || id === "phone" || id === "email")
      ? "before:opacity-100 before:content-empty-message"
      : "before:opacity-0 before:content-['']";

  return (
    <div
      className={` ${emptyValueClass} relative flex items-center justify-end gap-2 before:absolute before:translate-x-56 before:translate-y-1 before:rounded-lg before:bg-primary-main before:px-3 before:py-[2px] before:text-sm before:text-gray-300 before:duration-700 before:ease-in-out`}
      id={id}
    >
      <label htmlFor={id}>{title}</label>
      <input
        type={type}
        ref={inputRef}
        className={`cursor-pointer rounded-md bg-white/5 pl-2 text-primary-hover outline-none duration-500 hover:bg-primary-hover/20 focus:bg-white/10 ${
          isEdit ? "cursor-text" : "cursor-pointer"
        }`}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
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
