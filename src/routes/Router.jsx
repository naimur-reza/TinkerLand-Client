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
import ToyDetails from "../pages/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import Loader from "../components/Loader";
import UpdateToy from "../components/UpdateToy";

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
        loader: () => fetch("http://localhost:5000/totalToys"),
        element: <AllToys />,
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "addToys",
        element: (
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        ),
      },
      {
        path: "toyDetails/:id",
        element: <ToyDetails />,
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
      {
        path: "updateToy/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
        element: <UpdateToy />,
      },
      {
        path: "loader",
        element: <Loader />,
      },
    ],
  },
]);

export default router;
