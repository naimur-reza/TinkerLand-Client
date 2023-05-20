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
    fetch(`http://localhost:5000/update/${_id}`, {
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
      <div className="pt-[120px] spider">
        <h1 className="text-3xl text-center font-semibold py-5 text-white">
          Update This Toy
        </h1>
        <form
          className="space-y-5 my-container"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-5 ">
            <Input
              color="white"
              defaultValue={name}
              size="lg"
              className="text"
              label="Name"
              {...register("name")}
            />
            <Input
              defaultValue={sub_category}
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
              label="Price"
              defaultValue={("$", price)}
              {...register("price")}
            />
            <Input
              color="white"
              size="lg"
              label="Rating"
              defaultValue={rating}
              {...register("rating")}
            />
          </div>
          <div className="flex gap-5">
            <Input
              color="white"
              size="lg"
              label="Available Quantity"
              defaultValue={quantity}
              {...register("quantity")}
            />
            <Input
              color="white"
              size="lg"
              defaultValue={description}
              label="Detail Description"
              {...register("description")}
            />
          </div>
          <Input
            color="white"
            defaultValue={imageURl}
            size="lg"
            className="text"
            label="Image URL"
            {...register("imageURl")}
          />
          <hr />
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
    </>
  );
}
