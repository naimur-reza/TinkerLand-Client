import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import hulk from "../../assets/hulk.png";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import {
  Avatar,
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
    <div className="navbar bg-black/90  text-gray-100 z-10 px-20 ">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link>Home</Link>
            <Link>All Toys</Link>
            <Link>My Toys</Link>
            <Link>Add A Toys</Link>
            <Link>Blog</Link>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <img className="w-20" src={hulk} alt="" />
          <a className=" normal-case text-xl">TinkerLand</a>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          <Link to={"/"} className="">
            Home
          </Link>
          <Link to={"/allToys"} className="">
            All Toys
          </Link>
          <Link to={"/myToys"} className="">
            My Toys
          </Link>
          <Link to={"/addToys"} className=" ">
            Add A Toys
          </Link>
          <Link to={"/blog"} className="">
            Blog
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        <Menu placement="bottom">
          {user?.photoURL ? (
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
            <Tooltip content={user?.email} placement="left-start">
              <MenuHandler>
                <Link>
                  <FaUser className="text-lg " />
                </Link>
              </MenuHandler>
            </Tooltip>
          )}
          <MenuList>
            <MenuItem>
              <Link to={"/profile"}>Profile</Link>
            </MenuItem>
            <MenuItem>Inbox</MenuItem>
            {user ? (
              <MenuItem
                onClick={logOut}
                className="inline-flex items-center gap-2">
                {" "}
                <FaSignOutAlt /> Sign Out
              </MenuItem>
            ) : (
              <MenuItem className="inline-flex items-center gap-2">
                {" "}
                <FaSignInAlt /> <Link to={"/login"}>Sign In</Link>
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
