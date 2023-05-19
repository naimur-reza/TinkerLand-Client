import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../components/Loader";

export default function ToyDetails() {
  const data = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }
  console.log(navigation.state);
  const {
    email,
    description,
    imageURl,
    rating,
    seller_name,
    sub_category,
    quantity,
    price,
  } = data;
  console.log(data);
  return (
    <Card className="flex-row w-full max-w-[48rem] my-container py-5">
      <CardHeader
        shadow={false}
        floated={false}
        className="w-2/5 shrink-0 m-0 rounded-r-none">
        <img
          src={imageURl}
          alt="image"
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="blue" className="uppercase mb-4">
          startups
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {sub_category}
        </Typography>
        <Typography color="gray" className="font-normal mb-8">
          {description}
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}
