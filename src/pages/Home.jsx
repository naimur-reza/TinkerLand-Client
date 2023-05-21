import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import SubCategory from "../components/SubCategory";
import { Helmet } from "react-helmet";
import Featured from "../components/Featured";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TinkerLand | Home</title>
      </Helmet>
      <Banner />
      <Gallery />
      <SubCategory />
      <Featured />
    </div>
  );
};

export default Home;
