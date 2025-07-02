import { Helmet } from "react-helmet";
import AboutCard from "../home/AboutCard";
export default function About() {
  return (
    <div>
      <Helmet><title>Car Doctor | About</title></Helmet>
      <AboutCard></AboutCard>
    </div>
  );
}
