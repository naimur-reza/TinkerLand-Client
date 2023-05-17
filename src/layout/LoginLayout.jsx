import React from "react";
import Header from "../components/Shared/Header";
import { Outlet } from "react-router-dom";
const LoginLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LoginLayout;
