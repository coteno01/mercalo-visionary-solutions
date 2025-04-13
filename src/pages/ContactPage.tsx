
import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFormAndMap from "@/components/contact/ContactFormAndMap";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <ContactInfo />
      <ContactFormAndMap />
      <ContactFAQ />
      <ContactCTA />
    </div>
  );
};

export default ContactPage;
