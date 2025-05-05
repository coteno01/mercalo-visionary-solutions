
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServicesCtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-mercalo-navy text-white">
      <div className="container-custom text-center">
        <h2 className="heading-lg mb-6">Ready to Transform Your Business?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Let's discuss how our services can address your specific challenges 
          and help you achieve your business objectives.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button className="bg-mercalo-blue hover:bg-white hover:text-mercalo-navy" size="lg">
              Schedule a Consultation
            </Button>
          </Link>
          <Link to="/case-studies">
            <Button 
              variant="outline" 
              className="bg-transparent text-white border-white hover:bg-white hover:text-mercalo-navy" 
              size="lg"
            >
              Explore Success Stories
              <ArrowRight className="ml-1" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCtaSection;
