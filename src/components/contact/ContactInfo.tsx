
import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-mercalo-light p-6 rounded-xl">
            <div className="w-12 h-12 bg-mercalo-purple rounded-full flex items-center justify-center mb-4">
              <Phone className="text-white" size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-700 mb-1">+254 100722504</p>
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
            <p className="text-gray-700 mb-1">Victoria Plaza, Westlands</p>
            <p className="text-gray-700">Nairobi, Kenya</p>
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
  );
};

export default ContactInfo;
