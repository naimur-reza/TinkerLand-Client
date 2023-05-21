import React from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>TinkerLand | Blogs</title>
      </Helmet>
      <div className="pt-[100px] bg-gray-100">
        <div className="my-container ">
          <h1 className="text-3xl pb-3 font-semibold text-orange-600">Blogs</h1>
          <hr className="border" />
          <div data-aos="fade-up" className="py-10 space-y-3 ">
            {" "}
            <h1
              data-aos-delay="50"
              data-aos="fade-left"
              className="text-2xl font-semibold">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h1>
            <p
              data-aos-delay="50"
              data-aos="fade-left"
              className="text-gray-600">
              Refresh tokens allow you to balance your users' access needs with
              your organization's security practices. Access tokens help users
              get the resources they need to complete their tasks, but such
              tokens can also expose your organization to data compromise or
              other malicious actions if a hacker is able to steal them.
            </p>
            <h1
              data-aos-delay="100"
              data-aos="fade-right"
              className="text-2xl font-semibold">
              Compare SQL and NoSQL databases?
            </h1>
            <p
              data-aos-delay="100"
              data-aos="fade-right"
              className="text-gray-600">
              SQL databases are vertically scalable, while NoSQL databases are
              horizontally scalable. SQL databases are table-based, while NoSQL
              databases are document, key-value, graph, or wide-column stores.
              SQL databases are better for multi-row transactions, while NoSQL
              is better for unstructured data like documents or JSON
            </p>
            <h1
              data-aos-delay="200"
              data-aos="fade-right"
              className="text-2xl font-semibold">
              What is MongoDB aggregate and how does it work ?
            </h1>
            <p
              data-aos-delay="200"
              data-aos="fade-right"
              className="text-gray-600">
              What is Aggregation in MongoDB? Aggregation is a way of processing
              a large number of documents in a collection by means of passing
              them through different stages. The stages make up what is known as
              a pipeline. The stages in a pipeline can filter, sort, group,
              reshape and modify documents that pass through the pipeline.
            </p>
            <h1
              data-aos-delay="300"
              data-aos="fade-right"
              className="text-2xl font-semibold">
              What is express js? What is Nest JS?
            </h1>
            <p
              data-aos-delay="300"
              data-aos="fade-right"
              className="text-gray-600">
              Express is a minimalist and flexible framework that is easy to use
              and has a large community of developers. NestJS, on the other
              hand, is a newer framework that provides additional features such
              as dependency injection, a modular architecture, and an intuitive
              CLI. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit ab accusantium unde reprehenderit perferendis dolor
              nostrum. Harum assumenda sunt quis!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
