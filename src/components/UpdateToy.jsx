import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";

import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

export default function UpdateToy() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const toy = useLoaderData();
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
          setRender(!render);
        }
      });
  };
  return (
    <>
      <div className="pt-[120px] px-10">
        <h1 className="text-2xl text-center font-semibold py-5">
          Update This Toy
        </h1>
        <form className="space-y-5 " onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-5 ">
            <Input
              color="cyan"
              defaultValue={name}
              size="lg"
              className="text"
              label="Name"
              {...register("name")}
            />
            <Input
              defaultValue={sub_category}
              color="cyan"
              size="lg"
              label="Sub Category"
              {...register("sub_category")}
            />
          </div>

          <div className="flex gap-5">
            <Input
              color="cyan"
              size="lg"
              label="Price"
              defaultValue={("$", price)}
              {...register("price")}
            />
            <Input
              color="cyan"
              size="lg"
              label="Rating"
              defaultValue={rating}
              {...register("rating")}
            />
          </div>
          <div className="flex gap-5">
            <Input
              color="cyan"
              size="lg"
              label="Available Quantity"
              defaultValue={quantity}
              {...register("quantity")}
            />
            <Input
              color="cyan"
              size="lg"
              defaultValue={description}
              label="Detail Description"
              {...register("description")}
            />
          </div>
          <Input
            color="cyan"
            defaultValue={imageURl}
            size="lg"
            className="text"
            label="Image URL"
            {...register("imageURl")}
          />
          <hr />
          <DialogFooter>
            <Button variant="text" color="red" className="mr-1">
              <span>Cancel</span>
            </Button>
            <Button type="submit" variant="gradient" color="cyan">
              <span>Update</span>
            </Button>
          </DialogFooter>
        </form>
      </div>
    </>
  );
}
