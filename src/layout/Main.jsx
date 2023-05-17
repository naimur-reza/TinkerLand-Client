import React from "react";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
