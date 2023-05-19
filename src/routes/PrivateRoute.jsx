import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
