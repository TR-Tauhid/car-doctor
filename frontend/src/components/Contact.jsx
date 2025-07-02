import React from "react";
import ContactCard from "../home/ContactCard";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Car Doctor | Contact</title>
      </Helmet>
      <ContactCard></ContactCard>
    </div>
  );
}
