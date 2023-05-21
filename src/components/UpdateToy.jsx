import { Fragment, useEffect, useState } from "react";
import { Button, DialogFooter, Input } from "@material-tailwind/react";
import "../../src/App.css";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Loader from "./Loader";

export default function UpdateToy() {
  const { register, handleSubmit } = useForm();
  const toy = useLoaderData();
  const navigate = useNavigation();
  if (navigate.state === "loading") {
    return <Loader />;
  }
  const {
    name,
    quantity,
    rating,
    description,
    sub_category,
    imageURl,
    price,
    _id,
  } = toy || {};
  const onSubmit = (data) => {
    fetch(`https://toys-server-chi.vercel.app/update/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Information Updated");
        }
      });
  };

  const [loading, setLoading] = useState(false);
  if (!toy) {
    return <Loader />;
  }
  return (
    <>
      <div className="pt-[120px] spider pb-10 px-5">
        <div className="bg-white/10 backdrop-blur-sm lg:w-1/2 px-8 py-4 mx-auto rounded-lg">
          <h1 className="text-3xl text-center font-semibold py-5 text-white">
            Update This Toy
          </h1>
          <form
            className="space-y-7 my-container "
            onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:flex gap-5 space-y-3 lg:space-y-0">
              <Input
                className="pb-2"
                color="white"
                defaultValue={name}
                size="lg"
                type="text"
                label="Name"
                {...register("name")}
              />
              <Input
                className="pb-2"
                defaultValue={sub_category}
                color="white"
                size="lg"
                label="Sub Category"
                {...register("sub_category")}
              />
            </div>

            <div className="lg:flex gap-5 space-y-3 lg:space-y-0">
              <Input
                className="pb-2"
                color="white"
                size="lg"
                label="Price"
                defaultValue={("$", price)}
                {...register("price")}
              />
              <Input
                className="pb-2"
                color="white"
                size="lg"
                label="Rating"
                defaultValue={rating}
                {...register("rating")}
              />
            </div>
            <div className="lg:flex gap-5 space-y-3 lg:space-y-0">
              <Input
                className="pb-2"
                color="white"
                size="lg"
                label="Available Quantity"
                defaultValue={quantity}
                {...register("quantity")}
              />
              <Input
                className="pb-2"
                color="white"
                size="lg"
                defaultValue={description}
                label="Detail Description"
                {...register("description")}
              />
            </div>
            <Input
              className="pb-2"
              color="white"
              defaultValue={imageURl}
              size="lg"
              type="text"
              label="Image URL"
              {...register("imageURl")}
            />

            <DialogFooter>
              <Link to={`/myToys`}>
                <Button variant="outlined" color="red" className="mr-1">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" variant="gradient" color="cyan">
                <span>Update</span>
              </Button>
            </DialogFooter>
          </form>
        </div>
      </div>
    </>
  );
}
