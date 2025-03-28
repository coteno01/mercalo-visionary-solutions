
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BrainCircuit, 
  Bot, 
  BarChart3, 
  Workflow, 
  Database, 
  Cloud,
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ServicesPage = () => {
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

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
    <div className="flex flex-col">
      {/* Hero Section */}
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

      {/* Main Services */}
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
                      src={`https://images.unsplash.com/photo-${1487058792275 + index * 1000}-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80`} 
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

      {/* Additional Services */}
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

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Approach</h2>
              <p className="text-gray-700 mb-6">
                We believe in a collaborative, results-driven approach that ensures our solutions
                are perfectly aligned with your business objectives and deliver tangible value.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mercalo-light flex items-center justify-center mr-4">
                    <span className="text-mercalo-purple font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Discovery & Assessment</h3>
                    <p className="text-gray-700">
                      We thoroughly analyze your business processes, challenges, and objectives to gain a comprehensive understanding.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mercalo-light flex items-center justify-center mr-4">
                    <span className="text-mercalo-purple font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Solution Design</h3>
                    <p className="text-gray-700">
                      Our team develops a customized solution blueprint tailored to your specific needs and goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mercalo-light flex items-center justify-center mr-4">
                    <span className="text-mercalo-purple font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Implementation</h3>
                    <p className="text-gray-700">
                      We execute the solution with minimal disruption to your operations, ensuring a smooth transition.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mercalo-light flex items-center justify-center mr-4">
                    <span className="text-mercalo-purple font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Continuous Support</h3>
                    <p className="text-gray-700">
                      Our partnership doesn't end at implementation—we provide ongoing support, training, and optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                alt="Our Approach" 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-mercalo-purple text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-8">What Our Clients Say</h2>
            <blockquote className="text-xl italic mb-6">
              "Mercalo's ERP implementation and AI solutions have transformed our manufacturing operations. 
              We've seen a 30% increase in efficiency and significant cost savings within just six months."
            </blockquote>
            <div className="flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=80" 
                alt="Client" 
                className="w-16 h-16 rounded-full object-cover mr-4" 
              />
              <div className="text-left">
                <p className="font-bold">Michael Okafor</p>
                <p className="text-mercalo-light">Operations Director, AfriManufacture Ltd</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-mercalo-darkpurple text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how our services can address your specific challenges 
            and help you achieve your business objectives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-mercalo-accent hover:bg-mercalo-purple text-white" size="lg">
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="outline" className="text-white border-white hover:bg-white/10" size="lg">
                Explore Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
