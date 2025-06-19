import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes/Routes";
import { RouterProvider } from "react-router";
import AuthProvider from "./Provider/AuthProvider";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>
);
