import { useEffect, useState } from "react";
import About from "./About";
import Banner from "./Banner";
import Services from "./Services";

export default function Home() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
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
