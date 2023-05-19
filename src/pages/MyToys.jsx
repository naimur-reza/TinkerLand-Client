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
  rating,
} from "@material-tailwind/react";
import { FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
const MyToys = () => {
  const [render, setRender] = useState(false);
  const [toys, setToys] = useState([]);
  const [loading, SetLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const TABLE_HEAD = ["#", "Image", "Name", "Quantity", "Price", "Rating", ""];
  useEffect(() => {
    SetLoading(true);
    fetch(`http://localhost:5000/myToys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        SetLoading(false);
      });
  }, [render]);
  if (loading) {
    return <Loader />;
  }

  // handleUpdate toy form here
  const handleUpdate = () => {};
  const handleDelete = (id) => {
    Swal.fire({
      title: "Want to delete this toy?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setRender(!render);
            }
          });
      }
    });
  };

  return (
    <div className="grid  py-4 my-container">
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
            {toys.map(
              (
                { imageURl, sub_category, quantity, price, rating, _id },
                index
              ) => (
                <tr key={sub_category} className="even:bg-blue-gray-50/50">
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
                      {sub_category}
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
                    <Tooltip content="Update Toy">
                      <IconButton
                        onClick={handleUpdate}
                        variant="outlined"
                        color="gray">
                        <FaPen />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Delete Toy">
                      <IconButton onClick={() => handleDelete(_id)} color="red">
                        <FaTrash />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default MyToys;
