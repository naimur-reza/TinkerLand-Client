import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import Loader from "../components/Loader";
import {
  Avatar,
  Card,
  IconButton,
  Option,
  Select,
  Tooltip,
  Typography,
  rating,
} from "@material-tailwind/react";
import { FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2/src/sweetalert2.js";
import UpdateToy from "../components/UpdateToy";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const MyToys = () => {
  // delete and re-render state
  const [render, setRender] = useState(false);

  // modal state
  const [open, setOpen] = useState(false);
  const handleOpen = (id) => {
    setOpen(!open);
  };

  // /set Toy state
  const [toys, setToys] = useState([]);

  // loading State
  const [loading, SetLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const { user } = useContext(AuthContext);
  const TABLE_HEAD = [
    "#",
    "Image",
    "Name",
    "Quantity",
    "Price",
    "Rating",
    "Edit",
    "Action",
    "",
  ];
  useEffect(() => {
    SetLoading(true);
    fetch(
      `https://toys-server-chi.vercel.app/myToys?email=${user?.email}&text=${filter}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        SetLoading(false);
      });
  }, [render, filter]);
  if (loading) {
    return <Loader />;
  }
  console.log(filter);
  // handleUpdate toy form her
  const handleDelete = (id) => {
    Swal.fire({
      title: "Want to delete this toy?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toys-server-chi.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setRender(!render);
              toast.success(`Deleted Successfully`);
            }
          });
      }
    });
  };

  const handleSort = (e) => {
    const text = e.target.value;
    setFilter(text);
  };
  return (
    <>
      <Helmet>
        <title>TinkerLand | My Toys</title>
      </Helmet>
      <div className="thor h-[100vh]">
        <div className="grid  py-4 my-container pt-[110px]">
          <div className="flex justify-between items-center py-5">
            <h1 className="text-xl text-white">My Toys</h1>
            <select
              onChange={handleSort}
              className="select select-bordered w-1/3 lg:max-w-xs  text-gray-600">
              <option disabled selected>
                Filter
              </option>
              <option>Price: Low To High</option>
              <option>Price: High To Low</option>
            </select>
          </div>
          <Card className="overflow-scroll h-full w-full">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
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
                {toys.map((toy, index) => (
                  <tr key={index} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <p>{index + 1}</p>
                    </td>
                    <td className="p-4">
                      <Avatar
                        src={toy?.imageURl}
                        size="lg"
                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                      />
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal">
                        {toy?.name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal">
                        {toy?.quantity}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal">
                        $ {toy?.price}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal">
                        {toy?.rating}
                      </Typography>
                    </td>
                    <td className="">
                      <Link to={`/updateToy/${toy._id}`}>
                        <IconButton
                          className="ml-3"
                          variant="outlined"
                          color="gray">
                          <FaPen />
                        </IconButton>
                      </Link>
                    </td>
                    <td>
                      <IconButton
                        className="ml-3"
                        onClick={() => handleDelete(toy?._id)}
                        color="red">
                        <FaTrash />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MyToys;
