import React, { useEffect, useState } from "react";

import ToyCard from "../components/ToyCard";
import Loader from "../components/Loader";
const AllToys = () => {
  const [loading, SetLoading] = useState(false);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    SetLoading(true);
    fetch("http://localhost:5000/toys")
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
    <div className="grid grid-cols-1 lg:grid-cols-3 my-container py-10 gap-5">
      {toys.map((toy) => (
        <ToyCard key={toy._id} toy={toy} />
      ))}
    </div>
  );
};

export default AllToys;
