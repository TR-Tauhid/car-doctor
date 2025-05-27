import {
  createBrowserRouter,
} from "react-router";

import Root from "../root";
import Home from "../home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },
]);

export default router;