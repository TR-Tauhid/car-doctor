import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import logoWhite from "/icons/logoWhite.svg";
import logoBlack from "/icons/logoBlack.svg";
import { FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router";

export default function Footer() {
  const authValue = useContext(AuthContext);
  const { theme } = authValue;
  return (
    <div>
      <footer
        className={`footer max-sm:flex sm:footer-horizontal text-base-content p-4 md:p-10 border-t-2 mx-auto border-slate-400 ${
          theme === "light"
            ? "bg-emerald-50 text-black"
            : "bg-black text-white "
        }`}
      >
        <div className="flex max-sm:flex-col justify-around w-full">
          <div className=" space-y-5">
            <div>
              <img src={theme === "light" ? logoBlack : logoWhite} alt="Logo" />
            </div>
            <div className="text-base leading-7 max-w-80">
              <p>
                Edwin Diaz is a software and web technologies engineer, a life
                coach trainer who is also a serial .
              </p>
            </div>
            <div className="flex gap-x-2 my-5 text-base">
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#9997a542] ">
                <FaGoogle className="grow" />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#9997a542] ">
                <AiFillTwitterCircle className="grow" />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#9997a542] ">
                <FaInstagram className="grow" />
              </div>
              <div className="link rounded-full h-9 w-9 flex justify-between items-center bg-[#9997a542] ">
                <FaLinkedin className="grow" />
              </div>
            </div>
          </div>

          <div className="leading-6 md:leading-10">
            <h1 className="font-semibold text-xl mb-5">About</h1>

            <Link to="/">
              <p>Home </p>
            </Link>
            <Link to="/services">
              <p>Service</p>
            </Link>
            <Link to="/contact">
              <p>Contact</p>
            </Link>
          </div>
          <div className="leading-6 md:leading-10">
            <h1 className="font-semibold text-xl mb-5">Company</h1>
            <Link to="#">
              <p>Why Car Doctor</p>
            </Link>
            <Link to="/about">
              <p>About</p>
            </Link>
          </div>
          <div className="leading-6 md:leading-10">
            <h1 className="font-semibold text-xl mb-5">Support</h1>

            <Link to="#">
              <p>Support Center</p>
            </Link>
            <Link to="#">
              <p>Feedback</p>
            </Link>
            <Link to="#">
              <p> Accesbility</p>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
