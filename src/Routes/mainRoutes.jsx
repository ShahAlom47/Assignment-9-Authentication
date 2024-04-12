import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import PrivetRoute from "./Privet Routes/PrivetRoute";
import UserProfile from "../Pages/Authentication/UserProfile";
import CardDetails from "../Pages/Details/CardDetails";
import ErrorPage from "../Pages/Error page/ErrorPage";
import Bookmarks from "../Pages/Bookmarks/Bookmarks";
import BookingList from "../Pages/Booking/BookingList";
import Booking from "../Pages/Booking/Booking";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage />,
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
        {
          path: "/estateDetails/:id",
          element: <PrivetRoute> <CardDetails></CardDetails></PrivetRoute>,
        },
        {
          path: "/bookmark",
          element: <PrivetRoute> <Bookmarks></Bookmarks></PrivetRoute>,
        },
        {
          path: "/bookinglist",
          element: <PrivetRoute><BookingList></BookingList></PrivetRoute>,
        },
        {
          path: "/booking/:id",
          element: <PrivetRoute><Booking></Booking></PrivetRoute>,
        },
        
       
      ],
    },
  ]);

  export default router;