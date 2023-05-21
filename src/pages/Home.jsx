import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import SubCategory from "../components/SubCategory";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TinkerLand | Home</title>
      </Helmet>
      <Banner />
      <Gallery />
      <SubCategory />
    </div>
  );
};

export default Home;
