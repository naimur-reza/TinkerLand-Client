import { useNavigate, Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import LoginLayout from "../layout/LoginLayout";
import Profile from "../pages/Profile";
import Blog from "../pages/Blog";
import AddToys from "../pages/AddToys";
import MyToys from "../pages/MyToys";
import AllToys from "../pages/AllToys";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   Element: <LoginLayout />,
  //   children: [
  //     {
  //       path: "/auth",
  //       element: <Navigate to={"/home"} />,
  //     },
  //     {
  //       path: "/auth/register",
  //       element: <Navigate to={"/home"} />,
  //     },
  //   ],
  // },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "allToys",
        element: <AllToys />,
      },
      {
        path: "myToys",
        element: <MyToys />,
      },
      {
        path: "addToys",
        element: <AddToys />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
