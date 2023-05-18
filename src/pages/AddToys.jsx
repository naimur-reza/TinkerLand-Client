import React from "react";
import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

const AddToys = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-5 ">
          <Input
            color="cyan"
            size="lg"
            label="Image URL"
            {...register("imageURl")}
          />
          <Input
            color="cyan"
            size="lg"
            label="Seller Name"
            {...register("seller_name")}
          />
        </div>
        <div className="flex gap-5">
          <Input color="cyan" size="lg" label="Email" {...register("email")} />
          <Input
            color="cyan"
            size="lg"
            label="Sub Category"
            {...register("sub_category")}
          />
        </div>
        <div className="flex gap-5">
          <Input color="cyan" size="lg" label="Price" {...register("price")} />
          <Input
            color="cyan"
            size="lg"
            label="Rating"
            {...register("rating")}
          />
        </div>
        <div className="flex gap-5">
          <Input
            color="cyan"
            size="lg"
            label="Available Quantity"
            {...register("quantity")}
          />
          <Input
            color="cyan"
            size="lg"
            label="Detail Description"
            {...register("description")}
          />
        </div>
        <Button fullWidth type="submit">
          Add This Toy
        </Button>
      </form>
    </div>
  );
};

export default AddToys;
