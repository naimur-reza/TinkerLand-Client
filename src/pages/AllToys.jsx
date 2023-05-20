import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import ToyCard from "../components/ToyCard";
import Loader from "../components/Loader";
import {
  Avatar,
  Card,
  IconButton,
  Tooltip,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaEye,
  FaPen,
  FaTrash,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router-dom";
const MyToys = () => {
  const [active, setActive] = useState(0);
  const [render, setRender] = useState(false);
  const [toys, setToys] = useState([]);
  const [loading, SetLoading] = useState(false);
  const { user } = useContext(AuthContext);
  // pagination work
  const { totalToys } = useLoaderData();
  const totalPages = Math.ceil(totalToys / 20);
  const iterator = [...Array(totalPages).keys()];
  console.log(iterator, totalPages);

  const TABLE_HEAD = ["#", "Image", "Name", "Quantity", "Price", "Rating", ""];
  useEffect(() => {
    SetLoading(true);
    fetch(`http://localhost:5000/toys?page=${active}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        SetLoading(false);
      });
  }, [active, render]);
  if (loading) {
    return <Loader />;
  }

  // handleUpdate toy form her

  const getItemProps = (index) => ({
    className: active === index ? "" : "bg-blue-gray-100 text-blue-gray-900",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === totalPages) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 0) return;

    setActive(active - 1);
  };

  console.log(active);
  return (
    <div className="grid  py-4 my-container">
      <Card className="overflow-scroll h-full w-full">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {toys.map(
              (
                { imageURl, sub_category, name, quantity, price, rating, _id },
                index
              ) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <p>{index + 1}</p>
                  </td>
                  <td className="p-4">
                    <Avatar
                      src={imageURl}
                      size="lg"
                      className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                    />
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal">
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal">
                      {quantity}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal">
                      {price}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal">
                      {rating}
                    </Typography>
                  </td>
                  <td className="p-4 flex  items-center gap-4 pt-6">
                    <Tooltip content="Details">
                      <Link to={`/toyDetails/${_id}`}>
                        <IconButton variant="outlined" color="gray">
                          <FaEye />
                        </IconButton>
                      </Link>
                    </Tooltip>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </Card>
      <footer>
        <div className="flex items-center gap-4 justify-center py-10">
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-2"
            onClick={prev}
            disabled={active === 0}>
            <FaArrowLeft strokeWidth={2} className="h-4 w-4" /> Previous
          </Button>
          <div className="flex items-center gap-2">
            {/* <IconButton {...getItemProps(1)}>1</IconButton>
                <IconButton {...getItemProps(2)}>2</IconButton>
                <IconButton {...getItemProps(3)}>3</IconButton>
                <IconButton {...getItemProps(4)}>4</IconButton>
                <IconButton {...getItemProps(5)}>5</IconButton> */}
            {iterator.map((item, index) => (
              <IconButton {...getItemProps(index)}>{item + 1}</IconButton>
            ))}
          </div>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-2"
            onClick={next}
            disabled={active === totalPages - 1}>
            Next
            <FaArrowRight strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default MyToys;
