import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">
            Nirmala Global
          </h2>
          <p className="text-sm text-gray-300">
            Corporate IT Solutions Pvt. Ltd.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Your trusted partner in IT, Networking, Surveillance & Surveys.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-3 text-cyan-300">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
            <li><Link to="/pages/legal/about-us" className="hover:text-cyan-400">About Us</Link></li>
            <li><Link to="/pages/legal/contact-us" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-medium mb-3 text-cyan-300">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/it" className="hover:text-cyan-400">IT & Hardware</Link></li>
            <li><Link to="/services/networking" className="hover:text-cyan-400">Networking & Server</Link></li>
            <li><Link to="/services/camera" className="hover:text-cyan-400">Camera & Surveillance</Link></li>
            <li><Link to="/services/survey" className="hover:text-cyan-400">Survey & Property</Link></li>
            <li><Link to="/services/pipeline" className="hover:text-cyan-400">Pipeline Solutions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-medium mb-3 text-cyan-300">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-cyan-400" />
              +91-9876543210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-cyan-400" />
              support@nirmalaglobal.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-cyan-400" />
              Patna, Bihar, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nirmala Global Corporate IT Solutions Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
