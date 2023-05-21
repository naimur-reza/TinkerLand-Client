import React, { useContext, useState } from "react";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { Button, Input } from "@material-tailwind/react";
import { toast } from "react-hot-toast";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { user, signIn, popUpGoogle } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();
  console.log(location);
  const from = location.state?.from || "/";
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    signIn(email, password)
      .then((res) => {
        navigate(from);
      })
      .catch((err) => toast.error(err.message));
  };
  const handleGoogle = () => {
    popUpGoogle();
  };
  return (
    <div className="hero  my-container pt-[110px]">
      <div className="hero-content flex-col lg:flex-row justify-between">
        <div className="text-center ">
          <img
            className="w-2/3 "
            src="https://i.ibb.co/z21HQ8k/6300830.jpg"
            alt=""
          />
        </div>
        <form
          onSubmit={handleLogin}
          className="card flex-shrink-0 w-full max-w-sm bg-base-100 shadow-lg">
          <div className="card-body ">
            <p>Login</p>
            <div className="form-control">
              <Input
                label="Email"
                required
                size="lg"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <Input
                required
                label="Password"
                type="password"
                size="lg"
                name="password"
                className="input input-bordered "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <Button type="submit" color="amber">
                Login
              </Button>
            </div>
            <div>
              <p className="text-center my-text">Or Login With</p>
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
                New To Here?{" "}
                <Link className="active" to={"/register"}>
                  Register
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
