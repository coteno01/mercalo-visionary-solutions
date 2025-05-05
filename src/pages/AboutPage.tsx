import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Lightbulb, 
  Users, 
  Award,
  Clock,
  BarChart4,
  ThumbsUp,
  ArrowRight
} from "lucide-react";

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: "John Adeyemi",
      position: "CEO & Founder",
      bio: "15+ years experience in AI and business transformation.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80"
    },
    {
      name: "Sarah Nwosu",
      position: "CTO",
      bio: "Expert in AI systems and ERP implementation.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80"
    },
    {
      name: "David Okonkwo",
      position: "Head of Business Solutions",
      bio: "Specialist in business process optimization.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80"
    },
    {
      name: "Amina Ibrahim",
      position: "Lead Data Scientist",
      bio: "AI researcher with focus on manufacturing applications.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=400&q=80"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-mercalo-light">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">About <span className="text-gradient">Mercalo</span></h1>
            <p className="text-lg text-gray-700 mb-8">
              We are a team of innovators, technologists, and industry experts dedicated to transforming 
              businesses through AI-driven ERP solutions and business process automation.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/contact">
                <Button className="btn-primary">Contact Us</Button>
              </Link>
              <Link to="/services">
                <Button variant="outline">Our Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2018, Mercalo began with a mission to bridge the gap between advanced 
                technology and practical business applications, specifically in the African context.
              </p>
              <p className="text-gray-700 mb-4">
                We recognized that while many enterprises were eager to embrace digital transformation, 
                they lacked the tailored solutions and guidance needed to implement these technologies effectively.
              </p>
              <p className="text-gray-700 mb-4">
                Starting with a focus on manufacturing, we expanded our expertise to serve various 
                industries, always maintaining our commitment to delivering solutions that create 
                meaningful business impact and drive sustainable growth.
              </p>
              <p className="text-gray-700">
                Today, we're proud to be at the forefront of AI and ERP innovation, helping organizations 
                across Africa leverage technology to overcome challenges and seize new opportunities.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-mercalo-purple rounded-full opacity-5 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" 
                alt="Mercalo Team" 
                className="rounded-lg shadow-xl relative z-10" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-mercalo-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Core Principles</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              These guiding principles shape how we approach our work and partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-md card-hover">
              <Target className="text-mercalo-purple mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To deliver tailored technology solutions that foster growth, 
                competitive advantage, and positive societal impact for our clients.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-md card-hover">
              <Eye className="text-mercalo-purple mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading catalyst for technological advancement in African 
                business, driving innovation and prosperity across the continent.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-xl shadow-md card-hover">
              <Lightbulb className="text-mercalo-purple mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <p className="text-gray-600">
                Excellence, integrity, innovation, collaboration, and 
                commitment to creating solutions with lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Meet Our Team</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our diverse team combines expertise in technology, business strategy, 
              and industry knowledge to deliver exceptional solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-56 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-mercalo-purple font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 md:py-24 bg-mercalo-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Why Partner With Us</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We bring unique value to our partnerships through our expertise, approach, and commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Expertise */}
            <div className="bg-white p-6 rounded-xl shadow-md card-hover">
              <div className="bg-mercalo-light w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Users className="text-mercalo-purple" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of industry-specific challenges and opportunities, 
                especially in the African manufacturing sector.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white p-6 rounded-xl shadow-md card-hover">
              <div className="bg-mercalo-light w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Award className="text-mercalo-purple" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation Focus</h3>
              <p className="text-gray-600">
                Cutting-edge approaches that combine proven technologies with 
                innovative methods tailored to your specific needs.
              </p>
            </div>

            {/* Results */}
            <div className="bg-white p-6 rounded-xl shadow-md card-hover">
              <div className="bg-mercalo-light w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <BarChart4 className="text-mercalo-purple" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                Focused on delivering measurable business outcomes and 
                sustainable improvement to our client operations.
              </p>
            </div>

            {/* Support */}
            <div className="bg-white p-6 rounded-xl shadow-md card-hover">
              <div className="bg-mercalo-light w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <ThumbsUp className="text-mercalo-purple" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                Long-term partnership approach with continuous support, 
                training, and technology updates for lasting success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-mercalo-navy text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Partner with Mercalo?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Start your digital transformation journey with a team that understands your 
            industry and is committed to your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-mercalo-blue hover:bg-white hover:text-mercalo-navy" size="lg">
                Get in Touch
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button 
                variant="outline" 
                className="bg-white text-mercalo-navy border-white hover:bg-mercalo-light hover:text-mercalo-navy" 
                size="lg"
              >
                View Our Case Studies
                <ArrowRight className="ml-1" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
