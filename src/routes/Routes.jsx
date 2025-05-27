import {
  createBrowserRouter,
} from "react-router";

import Root from "../root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
]);

export default router;