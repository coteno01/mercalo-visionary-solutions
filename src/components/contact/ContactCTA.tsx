
import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactCTA = () => {
  const scrollToContactForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-mercalo-navy text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Schedule a consultation with our experts to discuss how our solutions can 
              address your specific challenges and help you achieve your business objectives.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-mercalo-blue mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-gray-300">Personalized solutions tailored to your needs</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-mercalo-blue mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-gray-300">Expert guidance from industry specialists</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-mercalo-blue mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-gray-300">Comprehensive implementation and support</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-mercalo-blue mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-gray-300">Measurable results and ROI</p>
              </div>
            </div>
            <div className="mt-8">
              <Button 
                className="bg-mercalo-blue hover:bg-white hover:text-mercalo-navy" 
                size="lg"
                onClick={scrollToContactForm}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Request a Call Back</h3>
            <form>
              <div className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Phone Number"
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Best Time to Call"
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>
                <Button className="w-full bg-white text-mercalo-navy hover:bg-gray-100">
                  Request Call Back
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
