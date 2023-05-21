import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function Featured() {
  return (
    <>
      <div className="py-10 bg-black">
        <h1 className="text-3xl text-center font-semibold pb-8 text-gray-100">
          Featured <span className="text-orange-600">Toys</span>
        </h1>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={25}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper">
          <SwiperSlide>
            <img
              src="https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/804x804/products/2104/4636/Marvel_BlackPanther_Bust_01__11094.1680134577.jpg?c=1"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_US%2F7D035E28660842C49F96E6C5CF792E7F%2Fad74d46fa9e2e62ca6257e624b48e1fb1968a21b.jpg&w=828&q=75"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/804x804/products/2407/5538/CAP_AMERICA_SELECT_2__99284.1681745340.jpg?c=1"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1643639144-spiderman-1643639136.jpg?crop=1xw:1xh;center,top&resize=980:*"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cf.shopee.ph/file/792e926aecbdd281477e6f90c4a787cc"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.blacksbricks.de/images/product_images/original_images/shfnebula81.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2329/5267/Marvel_MrFantastic_AF_02__06759.1673366096.jpg?c=1?imbypass=on"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.shopify.com/s/files/1/1305/2183/products/ThorActionFigureNew2_1200x1200.jpg?v=1634310540"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
