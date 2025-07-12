import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // check token in localstorage
  const token = localStorage.getItem("authToken");

  //   if token not exist, navigate login path
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  //   if token exist, show child component
  return children;
};

export default ProtectedRoute;
