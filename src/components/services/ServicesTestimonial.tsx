
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ServicesTestimonial = () => {
  return (
    <section className="py-16 md:py-24 bg-mercalo-purple text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-8">What Our Clients Say</h2>
          <blockquote className="text-xl italic mb-6">
            "Mercalo's ERP implementation and AI solutions have transformed our manufacturing operations. 
            We've seen a 30% increase in efficiency and significant cost savings within just six months."
          </blockquote>
          <div className="flex items-center justify-center">
            <Avatar className="w-16 h-16 mr-4">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=80" 
                alt="Client" 
              />
              <AvatarFallback>MO</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="font-bold">Michael Okafor</p>
              <p className="text-mercalo-light">Operations Director, AfriManufacture Ltd</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTestimonial;
