import { Spinner } from "@material-tailwind/react";
import React from "react";

const Loader = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <Spinner color="teal" className="h-10 w-10" />
    </div>
  );
};

export default Loader;
