import Routes from "./routes/Routes";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from 'react-toastify';
import AuthContext from "./context/AuthContext";
import useAuth from "./hooks/useAuth";

export default function Root() {
  const authValue = useAuth();
  const { theme } = authValue;
  return (
    <div className={`flex flex-col min-h-screen ${theme === "light" ? "bg-emerald-50 text-black" : "bg-black text-white"}`} >
      <ToastContainer/>
      <div className="w-full h-full mx-auto flex flex-col justify-between grow" >
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
}
