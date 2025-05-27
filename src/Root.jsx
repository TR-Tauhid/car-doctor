import React from "react";
import Routes from "./routes/Routes";
import Navbar from "./shared/Navbar";
import Footer from "./shared/footer";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
}
