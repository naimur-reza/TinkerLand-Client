import React, { useEffect } from "react";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-139px)] ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
