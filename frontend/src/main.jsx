import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes/Routes";
import { RouterProvider } from "react-router";
import AuthProvider from "./provider/AuthProvider";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>
);
