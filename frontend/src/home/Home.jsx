import { useEffect, useState } from "react";
import About from "./About";
import Banner from "./Banner";
import Services from "./Services";
import axios from "axios";

export default function Home() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((res) => {
        setServices(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
