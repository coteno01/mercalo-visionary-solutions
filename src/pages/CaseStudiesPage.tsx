import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, LineChart } from "lucide-react";

const CaseStudiesPage = () => {
  // Case studies data
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Production Optimization for Manufacturing Plant",
      client: "AfriManufacture Ltd",
      industry: "Manufacturing",
      challenge: "Inefficient production processes leading to high waste and operational costs.",
      solution: "Implemented AI-driven predictive analytics and process automation.",
      results: [
        "32% reduction in production waste",
        "45% improvement in machinery uptime",
        "28% decrease in operational costs",
        "$1.2M annual savings"
      ],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "ERP Implementation for Regional Retail Chain",
      client: "NigeriaShop Group",
      industry: "Retail",
      challenge: "Disparate systems causing inventory management issues and hampered growth.",
      solution: "Comprehensive ERP implementation with custom modules for retail operations.",
      results: [
        "40% improvement in inventory accuracy",
        "60% reduction in stockouts",
        "25% increase in staff productivity",
        "Expansion to 5 new locations within 12 months"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Business Process Automation for Financial Services",
      client: "AfriFinance Corp",
      industry: "Financial Services",
      challenge: "Manual processes causing delays, errors, and customer dissatisfaction.",
      solution: "End-to-end process automation with AI-powered document processing.",
      results: [
        "75% reduction in processing time",
        "98% accuracy in document processing",
        "35% reduction in operational costs",
        "Customer satisfaction score increased from 3.5 to 4.8/5"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "AI Agents for Customer Support Transformation",
      client: "TelecomAfrica",
      industry: "Telecommunications",
      challenge: "Overwhelmed customer support team and long resolution times.",
      solution: "Implementation of AI agents for tier 1 support and intelligent routing.",
      results: [
        "85% of inquiries resolved without human intervention",
        "Average resolution time reduced from 24 hours to 15 minutes",
        "Support team capacity increased by 60%",
        "Customer satisfaction improved by 40%"
      ],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-mercalo-light">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Case <span className="text-gradient">Studies</span></h1>
            <p className="text-lg text-gray-700 mb-8">
              Explore how our solutions have helped organizations across various industries
              overcome challenges and achieve remarkable results.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/contact">
                <Button className="btn-primary">Discuss Your Project</Button>
              </Link>
              <Link to="/services">
                <Button variant="outline">Our Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-12 bg-mercalo-purple text-white shadow-lg">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2 text-white">30+</h3>
              <p className="text-white font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2 text-white">$15M+</h3>
              <p className="text-white font-medium">Client Savings</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2 text-white">40%</h3>
              <p className="text-white font-medium">Avg. Efficiency Improvement</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2 text-white">12</h3>
              <p className="text-white font-medium">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'order-1 md:order-2' : ''}`}>
                  <div className="inline-block bg-mercalo-light px-3 py-1 rounded-full text-mercalo-purple font-medium mb-4">
                    {study.industry}
                  </div>
                  <h3 className="heading-md mb-4">{study.title}</h3>
                  <p className="text-gray-600 font-medium mb-6">Client: {study.client}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-mercalo-purple mb-2">Challenge:</h4>
                    <p className="text-gray-700 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-bold text-mercalo-purple mb-2">Solution:</h4>
                    <p className="text-gray-700 mb-4">{study.solution}</p>
                    
                    <h4 className="text-lg font-bold text-mercalo-purple mb-2">Results:</h4>
                    <ul className="list-disc pl-5 text-gray-700 mb-6">
                      {study.results.map((result, i) => (
                        <li key={i} className="mb-1">{result}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="btn-primary">
                    View Full Case Study <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? 'order-2 md:order-1' : ''}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-mercalo-purple rounded-full opacity-5 blur-3xl"></div>
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="rounded-lg shadow-xl relative z-10" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 md:py-24 bg-mercalo-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Measurable Business Impact</h2>
              <p className="text-gray-700 mb-6">
                Our solutions are designed to deliver tangible, measurable results 
                that directly impact your bottom line and competitive positioning.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-mercalo-purple h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">85% of clients see ROI within 6 months</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-mercalo-purple h-2.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">60% average reduction in manual tasks</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-mercalo-purple h-2.5 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">40% average increase in operational efficiency</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-mercalo-purple h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">75% of clients expand their solution within 1 year</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact">
                <Button className="btn-primary">
                  Talk to Our ROI Experts
                </Button>
              </Link>
            </div>
            
            <div className="flex justify-center">
              <LineChart size={350} className="text-mercalo-purple" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Client Testimonials</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Hear directly from our clients about their experiences working with Mercalo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-mercalo-light p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <p className="font-bold">Michael Okafor</p>
                  <p className="text-sm text-gray-600">Operations Director, AfriManufacture</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                "Mercalo's solutions have been transformative for our manufacturing operations. 
                The ROI has far exceeded our expectations, and their team continues to provide
                exceptional support as our business evolves."
              </p>
            </div>
            
            <div className="bg-mercalo-light p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <p className="font-bold">Sarah Mensah</p>
                  <p className="text-sm text-gray-600">CTO, NigeriaShop Group</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                "The ERP implementation by Mercalo has unified our operations across 12 locations. 
                Their understanding of retail challenges and innovative approach to solving them
                has been instrumental in our recent growth."
              </p>
            </div>
            
            <div className="bg-mercalo-light p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <p className="font-bold">David Eze</p>
                  <p className="text-sm text-gray-600">CEO, AfriFinance Corp</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                "The process automation solutions from Mercalo have revolutionized how we handle
                financial documentation. We've seen dramatic improvements in accuracy, speed,
                and customer satisfaction."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-mercalo-navy text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 text-white">Ready to Achieve Similar Results?</h2>
          <p className="text-white max-w-2xl mx-auto mb-8">
            Let's discuss how Mercalo's solutions can address your specific challenges
            and help your business thrive.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-mercalo-accent hover:bg-white hover:text-mercalo-navy" size="lg">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant="outline" 
                className="bg-white text-mercalo-navy border-white hover:bg-mercalo-light hover:text-mercalo-navy" 
                size="lg"
              >
                Explore Our Services
                <ArrowRight className="ml-1" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
