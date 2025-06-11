import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Services from "../home/services/Services";
import Contact from "../components/Contact";
import ServiceDetails from "../components/ServiceDetails";
import Checkout from "../components/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/ServiceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
      }
    ],
  },
]);

export default router;
