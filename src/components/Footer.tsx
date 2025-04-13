
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mercalo-darkpurple text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-mercalo-accent">Mer</span>calo
            </h3>
            <p className="text-gray-300 mb-4">
              Empowering businesses through innovative AI, ERP, and automation solutions that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-mercalo-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-mercalo-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-mercalo-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-mercalo-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-mercalo-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-mercalo-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-mercalo-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-mercalo-accent transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-mercalo-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-mercalo-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-mercalo-accent transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-mercalo-accent transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-mercalo-accent transition-colors">
                  ERP Implementation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-mercalo-accent transition-colors">
                  Business Process Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-mercalo-accent transition-colors">
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-mercalo-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Business Avenue, Tech District, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-mercalo-accent flex-shrink-0" />
                <span className="text-gray-300">+234 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-mercalo-accent flex-shrink-0" />
                <a href="mailto:info@mercaloconsulting.com" className="text-gray-300 hover:text-mercalo-accent">info@mercaloconsulting.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Mercalo. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-mercalo-accent text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-mercalo-accent text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-mercalo-accent text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
