import React from "react";
import ServicesCard from "../home/services/ServicesCard";
import { Helmet } from "react-helmet-async";
export default function Services() {
  return (
    <div>
      <Helmet>
        <title>Car Doctor | Services</title>
      </Helmet>
      <ServicesCard></ServicesCard>
    </div>
  );
}
