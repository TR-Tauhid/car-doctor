import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import router from "./routes/Routes";
import { RouterProvider } from "react-router";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRouter from "./routes/PrivateRouter";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <PrivateRouter>
      <RouterProvider router={router} />
    </PrivateRouter>
  </AuthProvider>
);
