
import { 
  BrainCircuit, 
  BarChart3, 
  Workflow, 
  Bot,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md card-hover">
      <div className="bg-mercalo-light w-14 h-14 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-mercalo-purple" size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to="/services" className="text-mercalo-purple font-medium hover:text-mercalo-accent transition-colors flex items-center">
        Learn More <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  );
};

const ServicesOverview = () => {
  const services = [
    {
      icon: BrainCircuit,
      title: "AI Solutions",
      description: "Custom AI solutions that transform business processes and enhance decision-making capabilities."
    },
    {
      icon: Bot,
      title: "AI Agents",
      description: "Intelligent agents that automate tasks, improve customer interactions, and drive operational efficiency."
    },
    {
      icon: BarChart3,
      title: "ERP Implementation",
      description: "Seamless ERP deployments that streamline operations and integrate with existing workflows."
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Automated business processes that reduce costs, improve accuracy, and increase productivity."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our Expertise</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We deliver comprehensive solutions that combine cutting-edge technology 
            with deep industry knowledge to drive your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
