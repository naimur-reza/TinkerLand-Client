import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  const images = [
    "https://i.ibb.co/xhxH5jm/Adventures-of-Deadpool-Deadpool-Custom-Action-Figure.jpg",
    "https://i.ibb.co/hCzM6mq/Mattel-MOTUC-Panthor-action-figure.jpg",
    "https://i.ibb.co/hXKGT3f/Anthony-s-Custom-Action-Figures.jpg",
    "https://i.ibb.co/bXGkJs5/Ben-Grimm-Marvel-Legends-Custom-Action-Figure.jpg",
    "https://i.ibb.co/wdvv8M1/Custom-Action-Figure-Tutorials.png",
    "https://i.ibb.co/xGZQXmQ/Online-Shopping-for-Popular-Electronics-Fashion-Home-Garden-Toys-Sports-Automobiles-and-More.jpg",
    "https://i.ibb.co/jwPgKL4/Red-Hulk-Marvel-Legends-Target-exclusive-action-figure-1.jpg",
    "https://i.ibb.co/2gkxpdM/34-99-US-Huong-Anime-Figures-25cm-Naruto-Shippuden-Uzumaki-Naruto-1-6-Scale-Face-Change-Pvc-Action-F.jpg",
    "https://i.ibb.co/FmNZxgK/Banda-SH-Figuarts-Avengers-Captain-America-About-155mm-ABS-u0026-PVC-Painted-Action-Figure.jpg",
    "https://i.ibb.co/3cqwyms/d6530d8e-0a88-4df3-8550-059f6a827a0d.jpg",
    "https://i.ibb.co/1ZtzMCC/DC-Godspeed-DC-Universe-Custom-Action-Figure.jpg",
    "https://i.ibb.co/5YKPmr8/Deathstroke-Anime-Style-DC-Universe-Custom-Action-Figure.jpg",
    "https://i.ibb.co/VYpsTZq/faf2430d-ba79-4c61-8816-a216f4cd8886.png",
    "https://i.ibb.co/Hp74mVx/Iron-Fist-Immortal-Weapon-Avengers-Custom-Action-Figure.png",
    "https://i.ibb.co/XzCwXFC/Marvel-Select-Red-Hulk-Action-Figure.jpg",
    "https://i.ibb.co/RSsPJwG/TAMASHII-NATIONS-Bandai-Robot-Spirits-Guardian-Bravo-Pacific-Rim-Uprising-Action-Figure.jpg",
    "https://i.ibb.co/Xk1xMKf/Teenage-Mutant-Ninja-Deadpool-Marvel-Custom-Action-Figure.jpg",
    "https://i.ibb.co/jwPgKL4/Red-Hulk-Marvel-Legends-Target-exclusive-action-figure-1.jpg",
    "https://i.ibb.co/Hp74mVx/Iron-Fist-Immortal-Weapon-Avengers-Custom-Action-Figure.png",
    "https://i.ibb.co/3cqwyms/d6530d8e-0a88-4df3-8550-059f6a827a0d.jpg",
  ];
  const delay = 600;
  return (
    <>
      <div className="bg-gray-100 pb-10 px-3">
        <h1 className="text-3xl font-bold pb-10 text-center pt-14">
          Action Figure <span className="text-orange-500">Gallery</span>
        </h1>
        <div className="my-container overflow-hidden">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 3, 750: 2, 900: 5 }}>
            <Masonry gutter="10px">
              {images.map((image, i) => (
                <img
                  className="hover:scale-105 duration-300"
                  key={i}
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos="fade-left"
                  delay={delay - 70}
                  src={image}
                  style={{ width: "100%", display: "block" }}
                  alt=""
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
};

export default Gallery;
