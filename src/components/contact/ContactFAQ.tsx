
import React from "react";

const ContactFAQ = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Find answers to commonly asked questions about our services and solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-mercalo-light p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">What industries do you serve?</h3>
            <p className="text-gray-700">
              We serve a wide range of industries including manufacturing, finance, retail, 
              healthcare, and more, with a special focus on the African manufacturing sector.
            </p>
          </div>
          
          <div className="bg-mercalo-light p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">How long does implementation typically take?</h3>
            <p className="text-gray-700">
              Implementation timelines vary based on solution complexity and scope. ERP implementations 
              typically take 3-6 months, while AI solutions can range from 2 weeks to 3 months.
            </p>
          </div>
          
          <div className="bg-mercalo-light p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Do you offer post-implementation support?</h3>
            <p className="text-gray-700">
              Yes, we provide comprehensive post-implementation support, including training, 
              maintenance, updates, and ongoing optimization to ensure long-term success.
            </p>
          </div>
          
          <div className="bg-mercalo-light p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">What makes Mercalo different from other providers?</h3>
            <p className="text-gray-700">
              Our deep understanding of the African business landscape, combined with our expertise 
              in AI and ERP solutions, allows us to deliver uniquely tailored solutions with measurable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
