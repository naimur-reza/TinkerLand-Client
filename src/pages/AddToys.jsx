import { Input } from "@material-tailwind/react";
import React from "react";

const AddToys = () => {
  return (
    <div className="my-container">
      <h1 className="text-center pt-5  text-2xl w-[500px] tracking-wide  mx-auto">
        Add Toys: Expand Your Collection with Exciting New Additions
      </h1>
      <p className="px-20 text-center tracking-wide py-3 text-gray-700">
        Enhance your toy collection by adding new and exciting toys. Our 'Add
        Toys' page is the perfect destination for toy enthusiasts, collectors,
        and parents. Discover a diverse range of options, from action figures to
        puzzles and plush toys to board games
      </p>
      <form className="space-y-5">
        <div className="flex gap-5 ">
          <Input color="cyan" size="lg" label="Image URL" />
          <Input color="cyan" size="lg" label="Seller Name" />
        </div>
        <div className="flex gap-5">
          <Input color="cyan" size="lg" label="Email" />
          <Input color="cyan" size="lg" label="Sub Category" />
        </div>
        <div className="flex gap-5">
          <Input color="cyan" size="lg" label="Price" />
          <Input color="cyan" size="lg" label="Rating" />
        </div>
        <div className="flex gap-5">
          <Input color="cyan" size="lg" label="Available Quantity" />
          <Input color="cyan" size="lg" label="Detail Description" />
        </div>
      </form>
    </div>
  );
};

export default AddToys;
