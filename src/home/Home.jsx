
import About from "./About";
import Banner from "./Banner";
import Services from "./services/Services";

export default function Home() {
  return (
    <div className="w-11/12 mx-auto">
      {/* Banner Section Here */}

      <Banner></Banner>

      {/* About us section */}

      <About></About>
      

      {/* Services here */}

      <Services></Services>

      {/*  */}
    </div>
  );
}
