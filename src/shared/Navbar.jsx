import React from "react";
import { NavLink } from "react-router";

let menuItem = (
  <>
    <li>
      <NavLink>Home</NavLink>
    </li>
    <li>
      <NavLink>About</NavLink>
    </li>
    <li>
      <NavLink>Services</NavLink>
    </li>
    <li>
      <NavLink>Blog</NavLink>
    </li>
    <li>
      <NavLink>Contact</NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="my-6 w-11/12 mx-auto">
      <div className="navbar px-0 md:px-4 max-sm:flex-col justify-between">
        <div className="navbar-start max-lg:grow w-full justify-between md:w-auto max-sm:my-4">
          <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menuItem}
            </ul>
          </div>
          <img src="/icons/logo.svg" className="relative max-sm:right-6 mx-auto" />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>

        <div className="navbar-end w-full justify-between max-sm:flex-row-reverse md:w-auto gap-x-2 lg:gap-x-4 ">
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a className="btn border-2 px-7 py-4 c-btn text-[#ff3811]">Appointment</a>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
