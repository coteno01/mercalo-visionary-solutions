
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type FeatureProps = {
  title: string;
  description: string;
};

const Feature = ({ title, description }: FeatureProps) => {
  return (
    <div className="flex items-start">
      <CheckCircle className="text-mercalo-purple mt-1 mr-3 flex-shrink-0" size={20} />
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseSection = () => {
  const features = [
    {
      title: "Tailored Solutions",
      description: "We develop customized solutions designed specifically for your business needs and industry challenges."
    },
    {
      title: "Expertise",
      description: "Our team combines deep technical knowledge with industry expertise to deliver exceptional results."
    },
    {
      title: "Innovation",
      description: "We stay at the forefront of technological advancements to bring innovative solutions to your business."
    },
    {
      title: "Measurable Results",
      description: "Our focus is on delivering quantifiable business improvements and return on investment."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
              alt="Mercalo Team Collaboration" 
              className="rounded-lg shadow-xl" 
            />
          </div>
          <div>
            <h2 className="heading-lg mb-6">Why Choose Mercalo?</h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <Feature key={index} title={feature.title} description={feature.description} />
              ))}
            </div>
            <div className="mt-8">
              <Link to="/about">
                <Button className="btn-primary">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
