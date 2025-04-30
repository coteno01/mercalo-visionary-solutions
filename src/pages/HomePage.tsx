
import { Button } from "@/components/ui/button";
import { 
  BrainCircuit, 
  BarChart3, 
  Workflow, 
  Bot, 
  Building2, 
  Factory,
  LineChart,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-mercalo-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-6 animate-fade-in">
              <h1 className="heading-xl">
                <span className="text-gradient">Transforming</span> Business Through AI & ERP Solutions
              </h1>
              <p className="text-lg text-gray-700">
                Mercalo partners with industry leaders to tackle critical challenges, 
                enhance efficiency, and seize growth opportunities through innovative 
                technologies and tailored strategies.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/services">
                  <Button className="btn-primary" size="lg">
                    Discover Our Solutions
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-mercalo-purple rounded-full opacity-5 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="Mercalo Technology Dashboard" 
                className="rounded-lg shadow-xl relative z-10" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
            {/* AI Solutions */}
            <div className="bg-white p-6 rounded-xl shadow-md card-hover">
              <div className="bg-mercalo-light w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <BrainCircuit className="text-mercalo-purple" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Solutions</h3>
              <p className="text-gray-600 mb-4">
                Custom AI solutions that transform business processes and enhance decision-making capabilities.
              </p>
              <Link to="/services" className="text-mercalo-purple font-medium hover:text-mercalo-accent transition-colors flex items-center">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* AI Agents */}
            <div className="bg-white p-6 rounded-xl shadow-md card-hover">
              <div className="bg-mercalo-light w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Bot className="text-mercalo-purple" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Agents</h3>
              <p className="text-gray-600 mb-4">
                Intelligent agents that automate tasks, improve customer interactions, and drive operational efficiency.
              </p>
              <Link to="/services" className="text-mercalo-purple font-medium hover:text-mercalo-accent transition-colors flex items-center">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* ERP Implementation */}
            <div className="bg-white p-6 rounded-xl shadow-md card-hover">
              <div className="bg-mercalo-light w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="text-mercalo-purple" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">ERP Implementation</h3>
              <p className="text-gray-600 mb-4">
                Seamless ERP deployments that streamline operations and integrate with existing workflows.
              </p>
              <Link to="/services" className="text-mercalo-purple font-medium hover:text-mercalo-accent transition-colors flex items-center">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* Business Process Automation */}
            <div className="bg-white p-6 rounded-xl shadow-md card-hover">
              <div className="bg-mercalo-light w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Workflow className="text-mercalo-purple" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Process Automation</h3>
              <p className="text-gray-600 mb-4">
                Automated business processes that reduce costs, improve accuracy, and increase productivity.
              </p>
              <Link to="/services" className="text-mercalo-purple font-medium hover:text-mercalo-accent transition-colors flex items-center">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-24 bg-mercalo-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Industries We Serve</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our solutions are tailored to meet the unique challenges and opportunities in various sectors,
              with a special focus on the African manufacturing landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Manufacturing */}
            <div className="bg-white p-8 rounded-xl shadow-md card-hover">
              <Factory className="text-mercalo-purple mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
              <p className="text-gray-600">
                Optimize production processes, reduce downtime, and enhance quality control through 
                intelligent automation and predictive analytics.
              </p>
            </div>

            {/* Corporate */}
            <div className="bg-white p-8 rounded-xl shadow-md card-hover">
              <Building2 className="text-mercalo-purple mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Corporate</h3>
              <p className="text-gray-600">
                Streamline operations, improve decision-making, and enhance customer experiences
                with integrated ERP and AI solutions.
              </p>
            </div>

            {/* Finance */}
            <div className="bg-white p-8 rounded-xl shadow-md card-hover">
              <LineChart className="text-mercalo-purple mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Finance</h3>
              <p className="text-gray-600">
                Leverage data analytics and process automation to improve financial forecasting,
                compliance, and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
                <div className="flex items-start">
                  <CheckCircle className="text-mercalo-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Tailored Solutions</h3>
                    <p className="text-gray-700">
                      We develop customized solutions designed specifically for your business needs and industry challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-mercalo-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Expertise</h3>
                    <p className="text-gray-700">
                      Our team combines deep technical knowledge with industry expertise to deliver exceptional results.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-mercalo-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Innovation</h3>
                    <p className="text-gray-700">
                      We stay at the forefront of technological advancements to bring innovative solutions to your business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-mercalo-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Measurable Results</h3>
                    <p className="text-gray-700">
                      Our focus is on delivering quantifiable business improvements and return on investment.
                    </p>
                  </div>
                </div>
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-mercalo-darkpurple text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how our AI, ERP, and automation solutions can drive growth,
            efficiency, and innovation in your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-mercalo-accent hover:bg-mercalo-purple text-white" size="lg">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="text-white border-white hover:bg-white/10" size="lg">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
