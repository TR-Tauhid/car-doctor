import React from "react";
import errorIcon from "/icons/error404.svg";
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <img src={errorIcon} alt="Error Photo" />
      </div>
      <div>
        <Link to={"/"}>
          <button className="btn btn-lg bg-black text-white ">Home</button>
        </Link>
      </div>
    </div>
  );
}
