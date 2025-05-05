
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-mercalo-navy text-white">
      <div className="container-custom text-center">
        <h2 className="heading-lg mb-6">Ready to Transform Your Business?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Let's discuss how our AI, ERP, and automation solutions can drive growth,
          efficiency, and innovation in your organization.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button className="bg-mercalo-blue hover:bg-white hover:text-mercalo-navy" size="lg">
              Contact Us Today
            </Button>
          </Link>
          <Link to="/services">
            <Button 
              variant="outline" 
              className="bg-transparent text-white border-white hover:bg-white hover:text-mercalo-navy" 
              size="lg"
            >
              Explore Our Services
              <ArrowRight className="ml-1" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
