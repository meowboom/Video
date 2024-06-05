import { XCircleIcon } from "@heroicons/react/20/solid";
import React, { useEffect } from "react";
import { useConstant } from "../../storage/constant.storage";

interface INotification {
  title: string;
  message: string;
  type?: string;
}

export enum NotificationType {
  info = "bg-blue-100 border-blue-500 text-blue-700",
  success = "bg-green-100 border-green-500 text-green-700",
  warning = "bg-yellow-100 border-yellow-500 text-yellow-700",
  error = "bg-red-100 border-red-500 text-red-700",
}

export const Notification = ({
  title,
  message,
  type = NotificationType.success,
}: INotification) => {
  const { isNotification, setIsNotification } = useConstant();
  useEffect(() => {
    let timer: any;
    if (isNotification) {
      timer = setTimeout(() => setIsNotification(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [isNotification]);
  return (
    <div
      className={`${isNotification ? "flex" : "hidden"} fixed bottom-20 right-20 items-center  border-l-4 bg-white/90 p-4 ${type} rounded-md shadow-md`}
    >
      <div className="flex-grow">
        <p className="font-bold">{title}</p>
        <p>{message}</p>
      </div>
      <button
        onClick={() => setIsNotification(false)}
        className="ml-4 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <XCircleIcon className="h-5 w-5" />
      </button>
    </div>
  );
};
