import React, { useContext } from "react";
import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import "../../src/App.css";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
const AddToys = () => {
  const { user, loading } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://toys-server-chi.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully Toy Added");
        }
      });
    console.log(data);
    reset();
  };

  return (
    <div className="bg-cover  transformer min-h-[calc(100vh-96px)] pt-[100px] py-14 ">
      <div className="my-container  bg-white/10 p-8 rounded-lg backdrop-blur-sm">
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
              {...register("name", { required: true })}
            />
            <Input
              color="white"
              size="lg"
              label="Sub Category"
              {...register("sub_category", { required: true })}
            />
          </div>
          <div className="flex gap-5">
            <Input
              color="white"
              size="lg"
              label="Seller Name"
              {...register("seller_name", { required: true })}
            />
            <Input
              color="white"
              size="lg"
              label="Email"
              value={user?.email}
              aria-disabled={true}
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex gap-5">
            <Input
              color="white"
              type="number"
              size="lg"
              label="Price"
              {...register("price", { valueAsNumber: true, required: true })}
            />
            <Input
              color="white"
              size="lg"
              label="Rating"
              {...register("rating", { required: true })}
            />
          </div>
          <div className="flex gap-5">
            <Input
              color="white"
              type="number"
              size="lg"
              label="Available Quantity"
              {...register("quantity", { required: true })}
            />
            <Input
              color="white"
              size="lg"
              label="Detail Description"
              {...register("description", { required: true })}
            />
          </div>
          <Input
            color="white"
            size="lg"
            type="url"
            className="text"
            label="Image URL"
            {...register("imageURl", { required: true })}
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
