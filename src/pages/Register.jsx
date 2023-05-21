import React, { useContext, useState } from "react";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { Button, Input } from "@material-tailwind/react";
const Register = () => {
  const { user, createUser, popUpGoogle } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PhotoURL, setPhotoURL] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    createUser(email, password);
  };
  const handleGoogle = () => {
    popUpGoogle();
  };
  console.log(user);
  return (
    <div className="hero min-h-screen my-container  pt-[110px]">
      <div className="hero-content flex-col lg:flex-row justify-between">
        <div className="text-center lg:text-left">
          <img
            className="w-2/3"
            src="https://i.ibb.co/z21HQ8k/6300830.jpg"
            alt=""
          />
        </div>
        <form
          onSubmit={handleRegister}
          className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100">
          <div className="card-body ">
            <p>Register</p>
            <div className="form-control">
              <Input
                label="Name"
                size="lg"
                required
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="Input border-2 rounded border-gray-2 border-2 rounded border-gray-200 "
              />
            </div>
            <div className="form-control">
              <Input
                required
                type="text"
                name="email"
                label="Email"
                size="lg"
                onChange={(e) => setEmail(e.target.value)}
                className="Input border-2 rounded border-gray-200 "
              />
            </div>
            <div className="form-control">
              <Input
                required
                label="Password"
                type="password"
                name="password"
                size="lg"
                className="Input border-2 rounded border-gray-200 "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>{" "}
            <div className="form-control">
              <Input
                required
                label="PhotoURL"
                type="text"
                name="PhotoURl"
                size="lg"
                className="Input  rounded border-gray-200 "
                onChange={(e) => setPhotoURL(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <Button onClick={handleRegister} variant="" color="amber">
                Register
              </Button>
            </div>
            <div>
              <p className="text-center my-text">Or Sign Up With</p>
              <div className="flex items-center justify-center gap-3 pt-3">
                <FaFacebook className="text-sky-600 cursor-pointer" size={28} />
                <FaLinkedin className="text-sky-700 cursor-pointer" size={28} />
                <FaGoogle
                  onClick={handleGoogle}
                  className="text-orange-600 cursor-pointer"
                  size={28}
                />
              </div>
              <p className="my-text text-center py-3">
                Already Have an Account?{" "}
                <Link className="active " to={"/login"}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
