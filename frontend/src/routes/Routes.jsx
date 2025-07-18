import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Contact from "../components/Contact";
import ServiceDetails from "../components/ServiceDetails";
import Checkout from "../components/Checkout";
import AddService from "../components/AddService";
import Blogs from "../components/Blogs";
import ErrorPage from "../components/ErrorPage";
import Cart from "../components/Cart";
import PrivateRouter from "./PrivateRouter";
import ManageOrders from "../components/ManageOrders";
import About from "../components/About";
import Services from "../components/Services";
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
        element: (
          <PrivateRouter>
            <ServiceDetails></ServiceDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/manageOrders/",
        element: (
          <PrivateRouter>
            <ManageOrders></ManageOrders>
          </PrivateRouter>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRouter>
            <Checkout></Checkout>
          </PrivateRouter>
        ),
      },
      {
        path: "/cart/:id",
        element: (
          <PrivateRouter>
            <Cart></Cart>
          </PrivateRouter>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRouter>
            <AddService></AddService>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
