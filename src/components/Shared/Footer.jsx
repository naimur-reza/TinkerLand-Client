import { Typography } from "@material-tailwind/react";
import logo from "../../assets/hulk.png";

export default function Footer() {
  return (
    <footer className="w-full p-8 bg-black ">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
        <div>
          {" "}
          <img src={logo} alt="logo-ct" className="w-14 mx-auto" />
          <h1 className="text-white font-semibold">TinkerLand</h1>
        </div>
        <ul className="flex flex-wrap items-center  gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-white-50" />
      <Typography color="white" className="text-center font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
    </footer>
  );
}
