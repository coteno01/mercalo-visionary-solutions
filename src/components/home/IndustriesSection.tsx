
import { 
  Factory, 
  Building2, 
  LineChart 
} from "lucide-react";

type IndustryCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const IndustryCard = ({ icon: Icon, title, description }: IndustryCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md card-hover">
      <Icon className="text-mercalo-purple mb-4" size={32} />
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const IndustriesSection = () => {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Optimize production processes, reduce downtime, and enhance quality control through intelligent automation and predictive analytics."
    },
    {
      icon: Building2,
      title: "Corporate",
      description: "Streamline operations, improve decision-making, and enhance customer experiences with integrated ERP and AI solutions."
    },
    {
      icon: LineChart,
      title: "Finance",
      description: "Leverage data analytics and process automation to improve financial forecasting, compliance, and operational efficiency."
    }
  ];

  return (
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
          {industries.map((industry, index) => (
            <IndustryCard 
              key={index} 
              icon={industry.icon} 
              title={industry.title} 
              description={industry.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
