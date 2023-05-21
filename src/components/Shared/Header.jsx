import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import hulk from "../../assets/hulk.png";
import logo from "../../assets/logo.png";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
} from "@material-tailwind/react";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="navbar bg-black/40 backdrop-blur-sm  text-gray-100 z-10 lg:px-20 absolute">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-black text-white rounded-box w-52 space-y-3">
            <Link
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/"}>
              Home
            </Link>
            <Link
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/allToys"}>
              All Toys
            </Link>
            <Link
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/myToys"}>
              My Toys
            </Link>
            <Link
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/addToys"}>
              Add A Toy
            </Link>
            <Link
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/blogs"}>
              Blogs
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <img className="w-14" src={logo} alt="" />
          <a className=" normal-case text-xl">TinkerLand</a>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink
            to={"/allToys"}
            className={({ isActive }) => (isActive ? "active" : "")}>
            All Toys
          </NavLink>
          <NavLink
            to={"/myToys"}
            className={({ isActive }) => (isActive ? "active" : "")}>
            My Toys
          </NavLink>
          <NavLink
            to={"/addToys"}
            className={({ isActive }) => (isActive ? "active" : "")}>
            Add A Toy
          </NavLink>
          <NavLink
            to={"/blogs"}
            className={({ isActive }) => (isActive ? "active" : "")}>
            Blogs
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <Menu placement="bottom">
          {user ? (
            <Tooltip content={user?.displayName}>
              <MenuHandler>
                <Avatar
                  withBorder={true}
                  className="p-0.5 cursor-pointer"
                  src={user?.photoURL}
                />
              </MenuHandler>
            </Tooltip>
          ) : (
            ""
          )}

          {user ? (
            <MenuList>
              <MenuItem>
                <Link to={"/profile"}>Profile</Link>
              </MenuItem>
              <MenuItem>Inbox</MenuItem>
              <MenuItem
                onClick={logOut}
                className="inline-flex items-center gap-2">
                {" "}
                <FaSignOutAlt /> Sign Out
              </MenuItem>
            </MenuList>
          ) : (
            <Link to={"/login"}>
              <Button
                variant="outlined"
                color="orange"
                size="sm"
                className="inline-flex items-center gap-2">
                {" "}
                <FaSignInAlt /> Sign In
              </Button>
            </Link>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Header;
