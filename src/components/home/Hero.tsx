
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-mercalo-lightblue/10">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="heading-xl">
              <span className="text-gradient">Transforming</span> Business Through AI & ERP Solutions
            </h1>
            <p className="text-lg text-gray-700">
              Mercalo Consulting partners with industry leaders to tackle critical challenges, 
              enhance efficiency, and seize growth opportunities through innovative 
              technologies and tailored strategies.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/services">
                <Button className="btn-primary" size="lg">
                  Discover Our Solutions
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-mercalo-blue rounded-full opacity-5 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
              alt="Mercalo Technology Dashboard" 
              className="rounded-lg shadow-xl relative z-10" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
