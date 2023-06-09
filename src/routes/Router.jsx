import { useNavigate, Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
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
import ErrorPage from "../pages/errorPage";
import CustomerReview from "../components/CustomerReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "allToys",
        loader: () => fetch("https://toys-server-chi.vercel.app/totalToys"),
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
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "blogs",
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
          fetch(`https://toys-server-chi.vercel.app/toys/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateToy />
          </PrivateRoute>
        ),
      },
      {
        path: "loader",
        element: <Loader />,
      },
      {
        path: "featured",
        element: <CustomerReview />,
      },
    ],
  },
]);

export default router;
