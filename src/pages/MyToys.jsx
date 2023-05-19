import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import ToyCard from "../components/ToyCard";
import Loader from "../components/Loader";
const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [loading, SetLoading] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    SetLoading(true);
    fetch(`http://localhost:5000/myToys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        SetLoading(false);
      });
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 my-container place-items-center py-4">
      {toys.map((toy) => (
        <ToyCard toy={toy} />
      ))}
    </div>
  );
};

export default MyToys;
