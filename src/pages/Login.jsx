import React, { useContext, useState } from "react";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";

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
        const user = res.user;
        const loggedUser = { email: user.email };

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ loggedUser }),
        })
          .then((res) => res.json())
          .then((data) => {
            navigate(from);
          });
      })
      .catch((err) => console.log(err));
  };
  const handleGoogle = () => {
    popUpGoogle();
  };
  return (
    <div className="hero  my-container">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
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
              <button className="btn btn-primary">Login</button>
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
                New To Here? <Link to={"/register"}>Register</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
