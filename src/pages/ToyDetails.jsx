import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Rating,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { FaDollarSign, FaStar } from "react-icons/fa";

export default function ToyDetails() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    setLoading(true);
    fetch(`https://toys-server-chi.vercel.app/toys/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  console.log(data);
  if (loading) {
    return <Loader />;
  }
  const {
    email,
    description,
    imageURl,
    rating,
    seller_name,
    sub_category,
    quantity,
    price,
    name,
  } = data || {};
  // picture, toy name, seller name, seller email, price, rating, available quantity, and detail description)
  console.log(data);
  return (
    <div className="pt-[110px] pb-5">
      <Card className="lg:flex-row  flex-col  w-full max-w-[48rem] my-container py-5 px-5 lg:px-0 lg:py-0 ">
        <CardHeader
          shadow={false}
          floated={false}
          className="lg:w-2/6  shrink-0 m-0 lg:rounded-r-none rounded-lg">
          <img src={imageURl} alt="image" className="w-full h-full object-" />
        </CardHeader>
        <CardBody>
          <p variant="h6" color="blue" className="uppercase mb-4">
            New Toy
          </p>
          <p color="blue-gray" className="mb-2 text-xl font-bold">
            {name}
          </p>
          <p color="blue-gray" className="mb-2">
            Seller: {seller_name}
          </p>
          <p color="blue-gray" className="mb-2">
            Email: {email}
          </p>
          <p color="blue-gray" className="mb-2 flex items-center gap-2">
            Price: <FaDollarSign />
            {price}
          </p>
          <p
            variant="h6"
            color="blue-gray"
            className="mb-2 flex items-center gap-2 ">
            Rating:
            <Rating value={4} readonly /> {rating}
          </p>
          <p variant="h6" color="blue-gray" className="mb-2">
            Quantity: {quantity}
          </p>
          <p color="gray" className="font-normal mb-8">
            {description}
          </p>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Learn More
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
}
