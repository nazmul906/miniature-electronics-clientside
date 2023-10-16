/* eslint-disable no-unused-vars */
/* eslint-disable no-import-assign */
import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../pages/Home/Home/Home";

import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

import ToyDetails from "../pages/shared/ToyDetail/ToyDetails";
import AllToys from "../pages/shared/AllToy/AllToys";
import MyToy from "../pages/shared/MyToy/MyToy";
import AddToy from "../pages/shared/AddToy/AddToy";
import UpdateToy from "../pages/shared/Update/UpdateToy";
import Error from "../pages/Error/Error";
// import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "alltoy",
        element: <AllToys></AllToys>,
      },
      {
        path: "addtoy",
        element: <AddToy></AddToy>,
      },
      {
        path: "mytoy",
        element: <MyToy></MyToy>,
      },
      {
        path: "mytoy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(
            `https://miniature-electronics-serverside-iw1dgtwpn-nazmul906.vercel.app/singletoy/${params.id}`
          ),
      },
      {
        path: "toydetails/:id",
        element: <ToyDetails></ToyDetails>,
        // loader: ({ params }) =>
        //   fetch(`https://miniature-electronics-serverside-iw1dgtwpn-nazmul906.vercel.app/singletoy/${params.id}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //       console.log(data);
        //     })
        //     .catch((error) => {
        //       console.error("Error fetching toy details:", error);
        //     }),
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);

export default router;
