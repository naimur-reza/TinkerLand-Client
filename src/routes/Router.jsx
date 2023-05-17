const { createBrowserRouter } = require("react-router-dom");
const { default: LoginLayout } = require("../layout/LoginLayout");
import { useNavigate, Navigate } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/home"} />,
      },
      {
        path: "/login",
        element: <Navigate to={"/home"} />,
      },
      {
        path: "/register",
        element: <Navigate to={"/home"} />,
      },
    ],
  },
  {
    path: "home",
    element: <Main />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
