import AboutCard from "./AboutCard";
import Banner from "./Banner";
import Loading from "../components/Loading";
import AuthContext from "../context/AuthContext";
import ContactCard from "./ContactCard";
import PopularProducts from "./PopularProducts";
import Team from "../components/Team";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import ServicesCard from "./services/ServicesCard";

export default function Home() {
  const authValue = useAuth();
  const { loading, theme } = authValue;

  if (loading) {
    return <Loading theme={theme}></Loading>;
  }
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Car Doctor | Home</title>
      </Helmet>
      {/* Banner Section Here */}

      <Banner />

      {/* About us section */}

      <AboutCard />

      {/* Services here */}

      <ServicesCard />

      {/* Contacts Here */}

      <ContactCard />

      {/* Popular Products */}

      <PopularProducts />

      {/* Team  */}

      <Team />

      {/* Core Features */}

      <Features />

      {/* Testimonial */}

      <Testimonial />
    </div>
  );
}
