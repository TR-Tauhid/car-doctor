import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../Context/AuthContext";
import logoBlack from "/icons/logoBlack.svg";
import logoWhite from "/icons/logoWhite.svg";
import axios from "axios";

const Navbar = () => {
  const [profileImgError, setProfileImgError] = useState(false);
  const authValue = useContext(AuthContext);
  const { theme, user, notify, setTheme, logOut, cart, setCart } = authValue;

  let menuItem = (
    <>
      <li>
        <NavLink
          className={`menu-style-unerline ${
            theme === "light" ? "bg-after-black" : "bg-after-white"
          }`}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`menu-style-unerline ${
            theme === "light" ? "bg-after-black" : "bg-after-white"
          }`}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`menu-style-unerline ${
            theme === "light" ? "bg-after-black" : "bg-after-white"
          }`}
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`menu-style-unerline ${
            theme === "light" ? "bg-after-black" : "bg-after-white"
          }`}
          to="/blogs"
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`menu-style-unerline ${
            theme === "light" ? "bg-after-black" : "bg-after-white"
          }`}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      {user?.uid === "68JNcuRz5Rhn9FSewm730fhaODo1" && (
        <>
          <li>
            <NavLink
              className={`menu-style-unerline ${
                theme === "light" ? "bg-after-black" : "bg-after-white"
              }`}
              to="/manageOrders"
            >
              Manage Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`menu-style-unerline ${
                theme === "light" ? "bg-after-black" : "bg-after-white"
              }`}
              to="/addService"
            >
              Add Service
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  const handleLogOutBtn = () => {
    logOut()
      .then(() => {
        notify(`Goodbye ${user?.displayName}...!!!`, "success");
      })
      .catch(() => notify("Something went wrong...!!!", "error"));
  };
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const errorProfileLink =
    "https://img.daisyui.com/images/profile/demo/batperson@192.webp";
  const handleProfileImgError = () => {
    setProfileImgError(true);
  };

  useEffect(() => {
    if (!user?.uid) {
      return;
    }
    axios
      .get(`http://localhost:5000/cart/${user?.uid}`)
      .then((res) => {
        setCart(res?.data);
      })
      .catch((err) => {
        notify(`Error: ${err.response.data.message}`, "error");
      });
  }, [user, notify, setCart]);

  return (
    <div className="my-6 w-11/12 mx-auto">
      <div className="navbar px-0 md:px-4 justify-between">
        <div className="navbar-start max-lg:grow md:justify-between md:w-auto mr-6">
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
              className="menu menu-sm bg-blur dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow-2xs border border-white text-shadow-custom"
            >
              {menuItem}
            </ul>
          </div>
          <Link to="/">
            <img
              className="p-1 md:p-3 rounded-xl md:rounded-3xl h-12 md:h-24 w-18 md:min-w-28"
              src={`${theme === "light" ? logoBlack : logoWhite}`}
              alt="Fallback icon"
            />
          </Link>
        </div>
        {user?.uid === "68JNcuRz5Rhn9FSewm730fhaODo1" ? (
          <div className="hidden menu menu-sm lg:flex">
            <ul className="menu menu-horizontal px-1 gap-x-5">{menuItem}</ul>
          </div>
        ) : (
          <div className="hidden navbar-center lg:flex ">
            <ul className="menu menu-horizontal min-[1440px]:gap-x-5">{menuItem}</ul>
          </div>
        )}

        <div className="navbar-end w-full max-sm:w-fit gap-x-2 md:w-auto lg:gap-x-4 justify-between items-center">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onClick={toggleTheme}
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          <a className="border-2 p-2 max-md:flex max-[1120px]:hidden bg-white md:px-7 md:py-4 c-btn max-sm:text-xs text-[#ff3811]">
            Appointment
          </a>

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

                <span
                  className={`badge badge-sm indicator-item ${
                    theme === "light"
                      ? "bg-indigo-500 text-white"
                      : "bg-black text-white"
                  }`}
                >
                  {cart?.length}
                </span>
              </div>
            </div>

            <div
              tabIndex={0}
              className="card card-compact dropdown-content  z-1 mt-3 w-52 shadow"
            >
              <div className="card-body bg-blur rounded-xl border border-white">
                <span className="text-lg font-bold">
                  {cart?.length} Item(s)
                </span>
                <span className="font-medium">
                  Subtotal: ${" "}
                  {cart.reduce(
                    (sum, item) => sum + parseFloat(item?.price || 0),
                    0
                  )}{" "}
                </span>
                <div className="card-actions">
                  <Link to={`/cart/${user?.uid}`}>
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="tooltip tooltip-left lg:tooltip-bottom"
                data-tip={user?.displayName}
              >
                <div className="avatar">
                  <div className="max-sm:w-12 w-20 rounded-full border-2 border-white">
                    <img
                      src={
                        profileImgError
                          ? errorProfileLink
                          : user?.photoURL || errorProfileLink
                      }
                      onError={handleProfileImgError}
                    />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content rounded-box z-1 min-w-40 hover:rounded-2xl shadow-sm"
              >
                <li className="hover:rounded-3xl">
                  <button
                    onClick={handleLogOutBtn}
                    className="btn btn-ghost bg-white text-black hover:text-white rounded-xl hover:rounded-2xl w-full"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"}>
              <div className="animate-bounce tooltip tooltip-bottom">
                <div className="tooltip-content">
                  <div className="font-black">Login!</div>
                </div>
                <div className="avatar">
                  <div className="max-sm:w-12 w-20 rounded-full border-2 border-white">
                    <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
