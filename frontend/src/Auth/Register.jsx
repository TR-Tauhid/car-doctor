import React, { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { Link } from "react-router";
import { updateProfile } from "firebase/auth";
import eye from "/icons/eye.svg";
import loginSVG from "/images/login/login.svg";
import eyeClose from "/icons/eye-close.svg";

export default function Register() {
  const authValue = useContext(AuthContext);
  const [toggleEye, setToggleEye] = useState(true);
  const { notify, theme, createUserWithEmail } = authValue;

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const email = form.get("email");
    const name = form.get("name");
    const password = form.get("password");
    const photoURL = form.get("photoURL");

    createUserWithEmail(email, password, name, photoURL)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        });
        notify(`Welcome ${user?.displayName}...!!!`, "success");
      })
      .catch(() => notify("Something went wrong...!!!", "error"));
  };

  const toggleEyeBtn = (status) => {
    setToggleEye(status);
  };

  return (
    <div className="my-8">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-x-14">
          <div className="max-sm:w-1/2 max-sm:mb-8">
          <img src={loginSVG} alt="Register Photo" />
          </div>
          <div className="card  w-full max-w-sm shrink-0 shadow-2xl border-2 border-slate-400 rounded-4xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <form onSubmit={handleSubmitBtn} className="space-y-1">
                  <label className="label">User Name</label>
                  <label className="input validator mb-6">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </g>
                    </svg>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Username"
                      pattern="[A-Za-z][A-Za-z0-9\-]*"
                      minLength="3"
                      maxLength="30"
                      title="Only letters, numbers or dash"
                    />
                  </label>

                  <p className="validator-hint hidden">
                    Must be 3 to 30 characters
                    <br />
                    containing only letters, numbers or dash
                  </p>

                  <label className="label">Email</label>
                  <label className="input validator mb-6">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </g>
                    </svg>
                    <input
                      name="email"
                      type="email"
                      placeholder="example@google.com"
                      required
                    />
                  </label>
                  <div className="validator-hint hidden">
                    Enter valid email address
                  </div>

                  <label className="label">Password</label>
                  <label className="input validator mb-6">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                        <circle
                          cx="16.5"
                          cy="7.5"
                          r=".5"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                    <input
                      name="password"
                      type={toggleEye ? "password" : "text"}
                      required
                      placeholder="Password"
                      minLength="8"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    />
                    <div className="w-2/12 flex items-center">
                      <button
                        className=""
                        onClick={() => toggleEyeBtn(!toggleEye)}
                      >
                        <img
                          className="p-1"
                          src={toggleEye ? eye : eyeClose}
                          alt={toggleEye ? "Show" : "Hide"}
                        />
                      </button>
                    </div>
                  </label>
                  <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />
                    At least one number <br />
                    At least one lowercase letter <br />
                    At least one uppercase letter
                  </p>

                  <label className="label">Photo URL</label>
                  <label className="input validator">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </g>
                    </svg>
                    <input
                      type="url"
                      name="photoURL"
                      required
                      pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                      title="Must be valid URL"
                    />
                  </label>
                  <p className="validator-hint">Must be valid URL</p>
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button
                    type="submit"
                    className={`btn btn-neutral mt-4 w-full mx-auto border-[#e5e5e5] ${
                        theme === "light"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                  >
                    Register
                  </button>
                </form>

                <div className="flex justify-around my-6">
                  {" "}
                  <h1>Already have an account? </h1>
                  <Link to={"/login"} className="btn-link text-blue font-bold">
                    Log In
                  </Link>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
