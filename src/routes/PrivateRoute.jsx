/* eslint-disable react/prop-types */
import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  //   const from = location.state?.from?.pathName || "/";

  if (loading) {
    return (
      <progress
        className="progress progress-primary w-56"
        value="0"
        max="100"
      ></progress>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
