
import React from "react";
import ContactForm from "./ContactForm";
import ContactMapSection from "./ContactMapSection";

const ContactFormAndMap = () => {
  return (
    <section className="py-16 bg-mercalo-light">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Map */}
          <ContactMapSection />
        </div>
      </div>
    </section>
  );
};

export default ContactFormAndMap;
