import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <Carousel
      transition={{ duration: 3, type: "tween" }}
      className="h-[400px] lg:h-[100vh]"
      autoplay
      autoplayDelay={5500}>
      <div className="relative h-full w-full ">
        <img
          src="https://i.ibb.co/kQgp50b/action-figures-7243788-1920.jpg"
          alt="image 1"
          className="h-full w-full object-center"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              Endless Fun for Kids
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 tracking-wide">
              Discover the Perfect Toys for Every Age and Interest
            </Typography>
            <div className="flex justify-center gap-2">
              <Link to={"/allToys"}>
                <Button size="md" color="white">
                  Explore
                </Button>
              </Link>
              <Button size="sm" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full ">
        <img
          src="https://i.ibb.co/0F3Rjjs/chris-hardy-H5-Ffv4-I5-ZMI-unsplash.jpg"
          alt="image 1"
          className="h-full w-full object-fill"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              Imagination Unleashed
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80">
              Ignite Creativity with our Exciting Range of Toys and Games
            </Typography>
            <div className="flex justify-center gap-2">
              <Link to={"/allToys"}>
                <Button size="md" color="white">
                  Explore
                </Button>
              </Link>
              <Button size="md" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/kDYhGQ8/mateusz-waclawek-t2b2sv-Mf8ek-unsplash.jpg"
          alt="image 2"
          className="h-full w-full object-fill"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              Toys Galore!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80">
              Explore a World of Playfulness and Adventure
            </Typography>
            <div className="flex gap-2">
              <Link to={"/allToys"}>
                <Button size="md" color="white">
                  Explore
                </Button>
              </Link>
              <Button size="md" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/ZzJy0SW/rachit-khurana-V3gb-V-ke-H10-unsplash.jpg"
          alt="image 3"
          className="h-full w-full object-fill"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              Unforgettable Childhood Memories
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80">
              Find Classic and Modern Toys that Make Every Moment Magical
            </Typography>
            <div className="flex gap-2">
              <Link to={"/allToys"}>
                <Button size="md" color="white">
                  Explore
                </Button>
              </Link>
              <Button size="md" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/fr63bZW/freestocks-CH6-cfi-Y2-Yo-unsplash.jpg"
          alt="image 3"
          className="h-full w-full object-fill"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              Educational Entertainment
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80">
              Learning is Fun with our Engaging and Educational Toys
            </Typography>
            <div className="flex gap-2">
              <Link to={"/allToys"}>
                <Button size="md" color="white">
                  Explore
                </Button>
              </Link>
              <Button size="md" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
