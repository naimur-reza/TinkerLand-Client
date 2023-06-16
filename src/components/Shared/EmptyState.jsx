import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const EmptyState = () => {
  return (
    <div className="pt-52 text-center">
      <p className="text-3xl font-semibold text-yellow-400"> No Toys Added</p>
      <Link to={"/"}>
        <Button color="light-blue" variant="outlined" className="mt-7 mr-5">
          Back To Home
        </Button>
      </Link>
      <Link to={"/addToys"}>
        <Button color="blue" className="mt-7">
          Add A Toy
        </Button>
      </Link>
    </div>
  );
};

export default EmptyState;
