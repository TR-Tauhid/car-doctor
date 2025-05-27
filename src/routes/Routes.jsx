import {
  createBrowserRouter,
} from "react-router";

import Root from "../root";
import Home from "../home/Home";
import Login from "../Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
    ]
  },
  {
    path: "/login",
    element: <Login></Login>,
  }
]);

export default router;