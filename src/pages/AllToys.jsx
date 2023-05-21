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
  Input,
} from "@material-tailwind/react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaEye,
  FaPen,
  FaSearch,
  FaTrash,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router-dom";
const MyToys = () => {
  const [active, setActive] = useState(0);
  const [render, setRender] = useState(false);
  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, SetLoading] = useState(false);
  const { user } = useContext(AuthContext);
  // pagination work
  const { totalToys } = useLoaderData();
  const totalPages = Math.ceil(totalToys / 20);
  const iterator = [...Array(totalPages).keys()];

  const TABLE_HEAD = ["#", "Image", "Name", "Quantity", "Price", "Rating", ""];
  useEffect(() => {
    SetLoading(true);
    fetch(`https://toys-server-chi.vercel.app/toys?page=${active}`)
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
  console.log(search);
  const handleSearch = () => {
    SetLoading(true);
    fetch(`https://toys-server-chi.vercel.app/toys?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        SetLoading(false);
      });
  };
  return (
    <div className="thor">
      <div className="grid  py-4 my-container pt-[110px] ">
        <div className="flex  justify-between items-center px-3 py-5">
          <div>All Toys</div>
          <div className="flex items-center gap-2">
            <Input
              onChange={(e) => setSearch(e.target.value)}
              size="lg"
              color="white"
              label="Search Toy"
            />
            <Button
              onClick={handleSearch}
              variant="outlined"
              size="lg"
              className="flex justify-center">
              <FaSearch />
            </Button>
          </div>
        </div>
        <Card className="overflow-scroll h-full w-full  bg-white/10 backdrop-blur-sm">
          <table className="w-full  min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={index}
                    className="border-b bg-white/10 border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      className="font-normal  leading-none text-gray-100">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {toys.map(
                (
                  {
                    imageURl,
                    sub_category,
                    name,
                    quantity,
                    price,
                    rating,
                    _id,
                  },
                  index
                ) => (
                  <tr key={index} className="even:bg-blue-gray-50/50">
                    <td className="p-4 text-gray-100">
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
                        className="font-normal text-gray-100">
                        {name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-100">
                        {quantity}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-100">
                        $ {price}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-100">
                        {rating}
                      </Typography>
                    </td>
                    <td className="p-4 flex  items-center gap-4 pt-6">
                      <Tooltip content="Details">
                        <Link to={`/toyDetails/${_id}`}>
                          <IconButton variant="" color="orange">
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
              color="white"
              className="flex items-center gap-2"
              onClick={prev}
              disabled={active === 0}>
              <FaArrowLeft strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex items-center gap-2">
              {iterator.map((item, index) => (
                <IconButton variant="cyan" {...getItemProps(index)}>
                  {item + 1}
                </IconButton>
              ))}
            </div>
            <Button
              variant="text"
              color="white"
              className="flex items-center gap-2"
              onClick={next}
              disabled={active === totalPages - 1}>
              Next
              <FaArrowRight strokeWidth={2} className="h-4 w-4" />
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MyToys;
