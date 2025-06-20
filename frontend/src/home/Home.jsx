import { useContext } from "react";
import About from "./About";
import Banner from "./Banner";
import Services from "./services/Services";
import Loading from "../components/Loading";
import AuthContext from "../Context/AuthContext";

export default function Home() {
  const authValue = useContext(AuthContext);
  const { loading, theme } = authValue;


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

      <Services></Services>

      {/*  */}
    </div>
  );
}
