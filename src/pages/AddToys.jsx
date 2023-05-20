import React, { useContext } from "react";
import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import "../../src/App.css";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
const AddToys = () => {
  const { user, loading } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="bg-cover  transformer min-h-[calc(100vh-96px)] pt-10 py-14">
      <div className="my-container ">
        <h1 className="text-center text-gray-200 pt-5  text-2xl w-[500px] tracking-wide  mx-auto">
          Add Toys: Expand Your Collection with Exciting New Additions
        </h1>
        <p className="px-20 text-center tracking-wide py-3 text-gray-400">
          Enhance your toy collection by adding new and exciting toys. Our 'Add
          Toys' page is the perfect destination for toy enthusiasts, collectors,
          and parents. Discover a diverse range of options, from action figures
          to puzzles and plush toys to board games
        </p>
        <form className="space-y-5 pt-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-5 ">
            <Input
              color="white"
              size="lg"
              className="text"
              label="Name"
              {...register("name")}
            />
            <Input
              color="white"
              size="lg"
              label="Sub Category"
              {...register("sub_category")}
            />
          </div>
          <div className="flex gap-5">
            <Input
              color="white"
              size="lg"
              label="Seller Name"
              {...register("seller_name")}
            />
            <Input
              color="white"
              size="lg"
              label="Email"
              value={user?.email}
              aria-disabled={true}
              {...register("email")}
            />
          </div>
          <div className="flex gap-5">
            <Input
              color="white"
              size="lg"
              label="Price"
              {...register("price")}
            />
            <Input
              color="white"
              size="lg"
              label="Rating"
              {...register("rating")}
            />
          </div>
          <div className="flex gap-5">
            <Input
              color="white"
              size="lg"
              label="Available Quantity"
              {...register("quantity")}
            />
            <Input
              color="white"
              size="lg"
              label="Detail Description"
              {...register("description")}
            />
          </div>
          <Input
            color="white"
            size="lg"
            className="text"
            label="Image URL"
            {...register("imageURl")}
          />
          <Button
            variant="gradient"
            color="deep-purple"
            fullWidth
            type="submit">
            Add This Toy
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
