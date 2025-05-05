
import React from "react";

const ServicesTestimonial = () => {
  return (
    <section className="py-16 md:py-24 bg-mercalo-light">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="heading-lg mb-12 text-mercalo-navy">What Our Clients Say</h2>
          
          <div className="relative bg-white p-8 md:p-12 rounded-xl shadow-lg">
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <svg className="w-12 h-12 text-mercalo-blue opacity-20" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-xl md:text-2xl font-medium text-gray-700 mb-8">
                Mercalo's AI solutions have revolutionized our manufacturing process. We've seen a 35% 
                increase in efficiency and significant cost reductions within just six months.
              </p>
              <div className="flex items-center justify-center">
                <img 
                  src="/lovable-uploads/df898811-e8f2-48f9-9b15-fc68ab7bec29.png" 
                  alt="John Smith" 
                  className="w-16 h-16 rounded-full object-cover mr-4" 
                />
                <div className="text-left">
                  <h4 className="font-bold text-mercalo-navy">Samuel Okafor</h4>
                  <p className="text-gray-600">Manufacturing Director, TechniPlus Industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTestimonial;
