import React from "react";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-139px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
