import { useNavigate, Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import LoginLayout from "../layout/LoginLayout";

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

export default router;
