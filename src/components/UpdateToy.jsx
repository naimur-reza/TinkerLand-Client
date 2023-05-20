import { Fragment, useState } from "react";
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

export default function UpdateToy({ open, handleOpen }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // fetch("http://localhost:5000/toys", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    toast.success("Done");
  };
  return (
    <Fragment>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Update Your Toy.</DialogHeader>
        <DialogBody divider>
          <form className="space-y-5 pt-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-5 ">
              <Input
                color="cyan"
                size="lg"
                className="text"
                label="Name"
                {...register("name")}
              />
              <Input
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
                {...register("price")}
              />
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
            <Input
              color="cyan"
              size="lg"
              className="text"
              label="Image URL"
              {...register("imageURl")}
            />
            <hr />
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1">
                <span>Cancel</span>
              </Button>
              <Button
                type="submit"
                variant="gradient"
                color="cyan"
                onClick={handleOpen}>
                <span>Update</span>
              </Button>
            </DialogFooter>
          </form>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
