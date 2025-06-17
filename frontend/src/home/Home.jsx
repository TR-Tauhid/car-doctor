import { useContext, useEffect, useState } from "react";
import About from "./About";
import Banner from "./Banner";
import Services from "./services/Services";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import Loading from "../components/Loading";

export default function Home() {
  const authValue = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const { notify, loading, theme } = authValue;

  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        notify(`${err.message}...!!!`, "error");
        console.log(err);
      });
  }, []);

  if(loading) {
    return <Loading theme={theme}></Loading>
  }
  return (
    <div className="w-11/12 mx-auto">
      {/* Banner Section Here */}

      <Banner></Banner>

      {/* About us section */}

      <About></About>

      {/* Services here */}

      <Services services={services}></Services>

      {/*  */}
    </div>
  );
}
