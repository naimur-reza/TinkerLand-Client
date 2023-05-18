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
  const { _id, sub_category, seller_name, price, rating, imageURl, quantity } =
    toy;
  return (
    <Card className="w-96 overflow-hidden">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={imageURl}
          className="w-full h-full object-cover hover:scale-110 duration-300 "
        />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <Typography color="blue-gray" className="font-medium text-lg">
            {sub_category}
          </Typography>
          <Typography color="blue-gray" className="font-medium text-xl">
            ${price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-medium text-md mb-1 opacity-75 ">
          Seller: {seller_name}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75">
          Available Quantity: {quantity}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/toyDetails/${_id}`}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ToyCard;
