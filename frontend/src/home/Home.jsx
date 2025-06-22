import { useContext} from "react";
import About from "./About";
import Banner from "./Banner";
import Services from "./services/Services";
import Loading from "../components/Loading";
import AuthContext from "../Context/AuthContext";
import ContactCard from "./ContactCard";
import PopularProducts from "./PopularProducts";

export default function Home() {
  const authValue = useContext(AuthContext);
  const { loading, theme } = authValue;


  if (loading) {
    return <Loading theme={theme}></Loading>;
  }
  return (
    <div className="w-11/12 mx-auto">
      {/* Banner Section Here */}

      <Banner />

      {/* About us section */}

      <About />

      {/* Services here */}

      <Services />

      {/* Contacts Here */}

      <ContactCard />

      {/* Popular Products */}

      <PopularProducts />
    </div>
  );
}
