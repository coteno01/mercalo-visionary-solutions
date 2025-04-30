
import React from "react";
import { MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";

const ContactMapSection = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-xl shadow-md overflow-hidden h-80 flex-1">
        {/* Interactive map with a link to the actual Google Maps location */}
        <div className="w-full h-full bg-gray-200 relative group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <a 
              href="https://maps.app.goo.gl/dtG8AXtRb8pCwSSq9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-mercalo-purple px-4 py-2 rounded-md font-medium shadow-lg hover:bg-mercalo-light"
            >
              View on Google Maps
            </a>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <MapPin size={40} className="text-mercalo-purple mb-2" />
            <p className="text-gray-700">Victoria Plaza, Westlands, Nairobi</p>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817082640123!2d36.8107!3d-1.2644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTUnNTEuOCJTIDM2wrA0OCczOC41IkU!5e0!3m2!1sen!2sus!4v1619890709232!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            title="Mercalo office location"
            className="z-0"
          ></iframe>
        </div>
      </div>
      
      <SocialLinks />
    </div>
  );
};

export default ContactMapSection;
