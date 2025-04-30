
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesHero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-mercalo-light">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="heading-xl mb-6">Our <span className="text-gradient">Services</span></h1>
          <p className="text-lg text-gray-700 mb-8">
            We offer a comprehensive suite of technology solutions designed to transform your business,
            enhance efficiency, and drive sustainable growth.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button className="btn-primary">Request Consultation</Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="outline">View Case Studies</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
