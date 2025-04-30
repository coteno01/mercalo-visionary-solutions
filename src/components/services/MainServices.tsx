
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BrainCircuit, 
  Bot, 
  BarChart3, 
  Workflow,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const MainServices = () => {
  // Main services data
  const mainServices = [
    {
      icon: <BrainCircuit size={32} />,
      title: "AI Solutions",
      description: "Custom AI solutions that transform business processes and enhance decision-making capabilities.",
      benefits: [
        "Predictive analytics for informed decision-making",
        "Intelligent automation of complex tasks",
        "Data-driven insights for strategic planning",
        "Custom ML models tailored to your business needs"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Bot size={32} />,
      title: "AI Agents",
      description: "Intelligent agents that automate tasks, improve customer interactions, and drive operational efficiency.",
      benefits: [
        "24/7 automated customer support",
        "Process automation with intelligent agents",
        "Seamless integration with existing systems",
        "Continuous learning and improvement"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "ERP Implementation",
      description: "Seamless ERP deployments that streamline operations and integrate with existing workflows.",
      benefits: [
        "End-to-end implementation and support",
        "Integration with existing systems",
        "Customization for specific business needs",
        "Staff training and knowledge transfer"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Workflow size={32} />,
      title: "Business Process Automation",
      description: "Automated business processes that reduce costs, improve accuracy, and increase productivity.",
      benefits: [
        "Workflow optimization and automation",
        "Reduced operational costs",
        "Improved accuracy and consistency",
        "Enhanced employee productivity"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our Core Services</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We specialize in providing tailored solutions that address your specific business challenges
            and help you capitalize on opportunities for growth.
          </p>
        </div>

        <div className="space-y-16">
          {mainServices.map((service, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'order-1 md:order-2' : ''}`}>
                <div className="bg-mercalo-light w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <div className="text-mercalo-purple">{service.icon}</div>
                </div>
                <h3 className="heading-md mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <div className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="text-mercalo-purple mt-1 mr-3 flex-shrink-0" size={18} />
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <Button className="btn-primary">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
              <div className={`${index % 2 === 1 ? 'order-2 md:order-1' : ''}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-mercalo-purple rounded-full opacity-5 blur-3xl"></div>
                  <img 
                    src={service.image}
                    alt={service.title} 
                    className="rounded-lg shadow-xl relative z-10" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServices;
