import React, { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import eye from "/icons/eye.svg";
import eyeClose from "/icons/eye-close.svg";
import loginSVG from "/images/login/login.svg";
import { Helmet } from "react-helmet";
import axios from "axios";

export default function Login() {
  const [toggleEye, setToggleEye] = useState(true);
  const authValue = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    theme,
    notify,
    logInWithEmailPass,
    user,
    googleLogIn,
    githubLogIn,
    facebookLogIn,
    twitterLogIn,
  } = authValue;

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const email = form.get("email");
    const password = form.get("password");

    logInWithEmailPass(email, password)
      .then((res) => {
        if (res.user) {
          console.log(res.user);

          // Get jwt token from server

          axios.post("http://localhost:5000/jwt", user, {withCredentials: true}).then((res) => {
            console.log(res);

          });

          navigate(location?.state ? location.state.from : "/");
          notify(`Welcome ${res?.user?.displayName}...!!!`, "success");
        }
      })
      .catch((err) => notify(`${err.message}...!!!`, "error"));
  };

  const handleGoogleBtn = () => {
    googleLogIn()
      .then((res) => {
        if (res.user) {
          console.log(res.data);
          navigate(location?.state ? location.state.from : "/");
          notify(`Welcome ${res?.user?.displayName}...!!!`, "success");
        }
      })
      .catch((err) => notify(`${err.message}...!!!`, "error"));
  };

  const handleGithubBtn = () => {
    githubLogIn()
      .then((res) => {
        if (res.user) {
          console.log(res.data);
          navigate(location?.state ? location.state.from : "/");
          notify(`Welcome ${res?.user?.displayName}...!!!`, "success");
        }
      })
      .catch((err) => notify(`${err.message}...!!!`, "error"));
  };

  const handleFacebookBtn = () => {
    facebookLogIn()
      .then((res) => {
        if (res.user) {
          console.log(res.data);
          navigate(location?.state ? location.state.from : "/");
          notify(`Welcome ${res?.user?.displayName}...!!!`, "success");
        }
      })
      .catch((err) => notify(`${err.message}...!!!`, "error"));
  };

  const handleTwitterBtn = () => {
    twitterLogIn()
      .then((res) => {
        if (res.user) {
          console.log(res.data);
          navigate(location?.state ? location.state.from : "/");
          notify(`Welcome ${res?.user?.displayName}...!!!`, "success");
        }
      })
      .catch((err) => notify(`${err.message}...!!!`, "error"));
  };

  const toggleEyeBtn = (status) => {
    setToggleEye(status);
    notify("welcome", "success");
  };

  return (
    <div className="my-8">
      <Helmet>
        <title>Car Doctor | Login</title>
      </Helmet>
      <div className="hero">
        <div className={`hero-content flex-col lg:flex-row-reverse gap-x-14`}>
          <div className="max-sm:w-1/2 max-sm:mb-8">
            <img src={loginSVG} alt="Login Photo" />
          </div>

          <div className="card w-full max-w-sm shrink-0 shadow-2xl border-2 border-slate-400 rounded-4xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <form onSubmit={handleSubmitBtn} className="space-y-1">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input mb-6 w-full mx-auto text-black"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <label className="input validator mb-6 w-full">
                    <svg
                      className="h-[1em] opacity-50 text-black"
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
                      className="text-black"
                      name="password"
                      type={toggleEye ? "password" : "text"}
                      required
                      placeholder="Password"
                      minLength="8"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    />
                    <div className="w-2/12 flex items-center">
                      <button onClick={() => toggleEyeBtn(!toggleEye)}>
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
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button
                    type="submit"
                    className={`btn border-[#e5e5e5] btn-neutral rounded-2xl hover:shadow-sm hover:shadow-blue-300 hover:border-2 mb-8 w-full mx-auto ${
                      theme === "light"
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    }`}
                  >
                    <svg
                      aria-label="Email icon"
                      className="bg-white rounded-sm m-2 w-5"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="black"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </g>
                    </svg>
                    Login with Email
                  </button>

                  <div className="flex flex-col w-full space-y-4">
                    {/* GitHub */}
                    <button
                      onClick={handleGithubBtn}
                      type="button"
                      className={`btn border-[#e5e5e5] btn-neutral hover:shadow-sm hover:shadow-blue-300 hover:border-2 ${
                        theme === "light"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    >
                      <svg
                        aria-label="GitHub logo"
                        className="border border-white bg-black rounded-full"
                        width="22"
                        height="22"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="white"
                          d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                        ></path>
                      </svg>
                      Login with GitHub
                    </button>

                    {/* Google */}
                    <button
                      onClick={handleGoogleBtn}
                      type="button"
                      className={`btn border-[#e5e5e5] btn-neutral hover:shadow-sm hover:shadow-blue-300 hover:border-2 ${
                        theme === "light"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    >
                      <svg
                        aria-label="Google logo"
                        className="border bg-black rounded-full"
                        width="22"
                        height="22"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <g>
                          <path d="m0 0H512V512H0" fill="#fff"></path>
                          <path
                            fill="#34a853"
                            d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                          ></path>
                          <path
                            fill="#4285f4"
                            d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                          ></path>
                          <path
                            fill="#fbbc02"
                            d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                          ></path>
                          <path
                            fill="#ea4335"
                            d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                          ></path>
                        </g>
                      </svg>
                      Login with Google
                    </button>

                    {/* Facebook */}
                    <button
                      onClick={handleFacebookBtn}
                      type="button"
                      className={`btn  border-[#e5e5e5] btn-neutral text-white border hover:shadow-sm hover:shadow-blue-300 hover:border-2-[#e5e5e5] ${
                        theme === "light"
                          ? "bg-[#1A77F2] text-black"
                          : "bg-black text-white"
                      }`}
                    >
                      <svg
                        aria-label="Facebook logo"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="white"
                          d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
                        ></path>
                      </svg>
                      Login with Facebook
                    </button>

                    {/* X */}
                    <button
                      onClick={handleTwitterBtn}
                      type="button"
                      className={`btn border-[#e5e5e5] btn-neutral hover:shadow-sm hover:shadow-blue-300 hover:border-2 ${
                        theme === "light"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    >
                      <svg
                        aria-label="X logo"
                        width="16"
                        height="12"
                        viewBox="0 0 300 271"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
                        />
                      </svg>
                      Login with X
                    </button>
                  </div>
                </form>
                <div className="flex justify-around my-6">
                  {" "}
                  <h1>Don't have an account? </h1>
                  <Link
                    to={"/register"}
                    className="btn-link text-blue font-bold"
                  >
                    Register
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
