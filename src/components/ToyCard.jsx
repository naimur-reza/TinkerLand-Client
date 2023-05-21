import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const ToyCard = ({ toy }) => {
  const {
    _id,
    sub_category,
    name,
    seller_name,
    price,
    rating,
    imageURl,
    quantity,
  } = toy;
  return (
    <Card className="w-96 overflow-hidden bg-white/10 backdrop-blur-sm">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={imageURl}
          className="w-full h-full object-cover hover:scale-110 duration-300 "
        />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <Typography color="amber" className="font-medium text-lg">
            {name}
          </Typography>
          <Typography className="font-medium text-xl text-gray-200">
            ${price}
          </Typography>
        </div>
        <Typography
          variant="small"
          className="font-medium text-md mb-1 opacity-75  text-gray-200">
          Seller: {seller_name}
        </Typography>
        <Typography
          variant="small"
          className="font-normal opacity-75 text-gray-200">
          Available Quantity: {quantity}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/toyDetails/${_id}`}>
          <Button
            ripple={false}
            fullWidth={true}
            color="amber"
            className=" text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ToyCard;
