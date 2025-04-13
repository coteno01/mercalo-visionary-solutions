import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  CheckCircle 
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a production environment, this would send the data to a server
      // For now, we'll simulate sending an email to info@mercaloconsulting.com
      console.log("Sending message to info@mercaloconsulting.com");
      console.log("Form data:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent Successfully",
        description: "Your message has been sent to info@mercaloconsulting.com. We'll get back to you as soon as possible.",
        duration: 5000
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error Sending Message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-mercalo-light">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Get in <span className="text-gradient">Touch</span></h1>
            <p className="text-lg text-gray-700 mb-8">
              We're here to answer your questions and discuss how our solutions
              can help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-mercalo-light p-6 rounded-xl">
              <div className="w-12 h-12 bg-mercalo-purple rounded-full flex items-center justify-center mb-4">
                <Phone className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-700 mb-1">+234 123 456 7890</p>
              <p className="text-gray-700">+234 987 654 3210</p>
            </div>
            
            <div className="bg-mercalo-light p-6 rounded-xl">
              <div className="w-12 h-12 bg-mercalo-purple rounded-full flex items-center justify-center mb-4">
                <Mail className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-700 mb-1">info@mercaloconsulting.com</p>
              <p className="text-gray-700">support@mercaloconsulting.com</p>
            </div>
            
            <div className="bg-mercalo-light p-6 rounded-xl">
              <div className="w-12 h-12 bg-mercalo-purple rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-700 mb-1">123 Business Avenue</p>
              <p className="text-gray-700">Tech District, Lagos, Nigeria</p>
            </div>
            
            <div className="bg-mercalo-light p-6 rounded-xl">
              <div className="w-12 h-12 bg-mercalo-purple rounded-full flex items-center justify-center mb-4">
                <Clock className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2">Working Hours</h3>
              <p className="text-gray-700 mb-1">Monday - Friday: 9AM - 5PM</p>
              <p className="text-gray-700">Saturday: 10AM - 2PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-mercalo-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="heading-md mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 123 456 7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Please provide details about your inquiry..."
                    rows={5}
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            {/* Map */}
            <div className="flex flex-col">
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-80 flex-1">
                {/* This would be replaced with an actual map component in a real application */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-4">
                    <MapPin size={40} className="mx-auto text-mercalo-purple mb-2" />
                    <p className="text-gray-700">Interactive map would be integrated here</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-mercalo-light flex items-center justify-center text-mercalo-purple hover:bg-mercalo-purple hover:text-white transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-mercalo-light flex items-center justify-center text-mercalo-purple hover:bg-mercalo-purple hover:text-white transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-mercalo-light flex items-center justify-center text-mercalo-purple hover:bg-mercalo-purple hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-mercalo-light flex items-center justify-center text-mercalo-purple hover:bg-mercalo-purple hover:text-white transition-colors">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Find answers to commonly asked questions about our services and solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-mercalo-light p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">What industries do you serve?</h3>
              <p className="text-gray-700">
                We serve a wide range of industries including manufacturing, finance, retail, 
                healthcare, and more, with a special focus on the African manufacturing sector.
              </p>
            </div>
            
            <div className="bg-mercalo-light p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">How long does implementation typically take?</h3>
              <p className="text-gray-700">
                Implementation timelines vary based on solution complexity and scope. ERP implementations 
                typically take 3-6 months, while AI solutions can range from 2 weeks to 3 months.
              </p>
            </div>
            
            <div className="bg-mercalo-light p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Do you offer post-implementation support?</h3>
              <p className="text-gray-700">
                Yes, we provide comprehensive post-implementation support, including training, 
                maintenance, updates, and ongoing optimization to ensure long-term success.
              </p>
            </div>
            
            <div className="bg-mercalo-light p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">What makes Mercalo different from other providers?</h3>
              <p className="text-gray-700">
                Our deep understanding of the African business landscape, combined with our expertise 
                in AI and ERP solutions, allows us to deliver uniquely tailored solutions with measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-mercalo-darkpurple text-white">
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
                  <CheckCircle className="text-mercalo-accent mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-300">Personalized solutions tailored to your needs</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-mercalo-accent mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-300">Expert guidance from industry specialists</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-mercalo-accent mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-300">Comprehensive implementation and support</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-mercalo-accent mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-300">Measurable results and ROI</p>
                </div>
              </div>
              <div className="mt-8">
                <Button 
                  className="bg-mercalo-accent hover:bg-white hover:text-mercalo-purple" 
                  size="lg"
                  onClick={() => {
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
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
                  <Button className="w-full bg-white text-mercalo-purple hover:bg-gray-100">
                    Request Call Back
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
