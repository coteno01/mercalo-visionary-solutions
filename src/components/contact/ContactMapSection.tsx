
import React from "react";
import { MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";

const ContactMapSection = () => {
  return (
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
      
      <SocialLinks />
    </div>
  );
};

export default ContactMapSection;
