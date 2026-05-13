import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes/Routes";
import { RouterProvider } from "react-router";
import AuthProvider from "./provider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </AuthProvider>
);
