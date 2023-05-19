import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import ToyCard from "../components/ToyCard";
const MyToys = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/myToys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 my-container place-items-center py-4">
      {toys.map((toy) => (
        <ToyCard toy={toy} />
      ))}
    </div>
  );
};

export default MyToys;
