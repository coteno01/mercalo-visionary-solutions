
import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const SocialLinks = () => {
  return (
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
  );
};

export default SocialLinks;
