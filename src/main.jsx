
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import router from "./routes/Routes";
import { RouterProvider } from "react-router";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
