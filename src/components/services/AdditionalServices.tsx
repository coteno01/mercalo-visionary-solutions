
import { Link } from "react-router-dom";
import { Database, Cloud, Shield, ArrowRight } from "lucide-react";

const AdditionalServices = () => {
  // Additional services data
  const additionalServices = [
    {
      icon: <Database size={24} />,
      title: "Data Management",
      description: "Comprehensive data solutions from architecture to analytics."
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Migration",
      description: "Secure and efficient transition to cloud-based operations."
    },
    {
      icon: <Shield size={24} />,
      title: "Cybersecurity",
      description: "Robust security measures to protect your business assets."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-mercalo-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Additional Services</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Complementary solutions to enhance your technology ecosystem and maximize business value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md card-hover">
              <div className="bg-mercalo-light w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <div className="text-mercalo-purple">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to="/contact" className="text-mercalo-purple font-medium hover:text-mercalo-accent transition-colors flex items-center">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
