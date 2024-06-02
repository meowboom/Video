import React from "react";
import { Navigate } from "react-router-dom";
import { useConstant } from "../../storage/constant.storage";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isLogin } = useConstant();

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
