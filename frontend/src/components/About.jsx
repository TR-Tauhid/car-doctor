import { Helmet } from "react-helmet-async";
import AboutCard from "../home/AboutCard";
export default function About() {
  return (
    <div>
      <Helmet><title>Car Doctor | About</title></Helmet>
      <AboutCard></AboutCard>
    </div>
  );
}
