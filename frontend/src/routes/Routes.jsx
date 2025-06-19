import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Services from "../home/services/Services";
import Contact from "../components/Contact";
import ServiceDetails from "../components/ServiceDetails";
import Checkout from "../components/Checkout";
import AddService from "../components/AddService";
import About from "../home/About";
import Blogs from "../components/Blogs";
import ErrorPage from "../components/ErrorPage";
import Cart from "../components/Cart";
import PrivateRouter from "./PrivateRouter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: (
          <PrivateRouter>
            <About></About>
          </PrivateRouter>
        ),
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
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
      },
      {
        path: "/cart/:id",
        element: <Cart></Cart>,
      },
      {
        path: "/addService",
        element: <AddService></AddService>,
      },
    ],
  },
]);

export default router;
