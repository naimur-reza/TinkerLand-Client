import { Carousel } from "@material-tailwind/react";

export default function Banner() {
  return (
    <Carousel
      className=" h-[100vh]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}>
      <img
        src="https://i.ibb.co/0F3Rjjs/chris-hardy-H5-Ffv4-I5-ZMI-unsplash.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        alt="image 2"
        src="https://i.ibb.co/kDYhGQ8/mateusz-waclawek-t2b2sv-Mf8ek-unsplash.jpg"
        className="h-full w-full object-cover"
      />
      <img
        src="https://i.ibb.co/ZzJy0SW/rachit-khurana-V3gb-V-ke-H10-unsplash.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
