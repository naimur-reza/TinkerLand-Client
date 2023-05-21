import { Spinner } from "@material-tailwind/react";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Loader = () => {
  return (
    <div className="min-h-[calc(100vh-96px)] flex items-center justify-center">
      <ScrollRestoration />
      <Spinner color="teal" className="h-10 w-10" />
    </div>
  );
};

export default Loader;
