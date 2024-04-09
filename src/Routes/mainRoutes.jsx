import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import PrivetRoute from "./Privet Routes/PrivetRoute";
import UserProfile from "../Pages/Authentication/UserProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/userProfile",
          element: <PrivetRoute> <UserProfile></UserProfile></PrivetRoute>,
        },
      ],
    },
  ]);

  export default router;