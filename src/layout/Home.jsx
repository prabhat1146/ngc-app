import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nirmala Global Corporate IT Solutions</h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
          Delivering excellence in IT, Networking, Hardware, Security, Survey, and Infrastructure Services.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
        <p className="text-lg text-center max-w-4xl mx-auto">
          Nirmala Global is a comprehensive solutions provider specializing in IT services, computer hardware, 
          camera security setups, survey and route mapping, and property or pipeline infrastructure planning. 
          Our team of certified professionals brings reliability, innovation, and scalability to every project.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            { title: "Networking", desc: "LAN/WAN design, network setup, firewall security", link: "/services/networking" },
            { title: "IT Services", desc: "IT consulting, server maintenance, software solutions", link: "/services/it" },
            { title: "Hardware Solutions", desc: "PCs, laptops, custom builds, repair & AMC", link: "/services/hardware" },
            { title: "Surveillance", desc: "Camera installations, remote monitoring, DVR solutions", link: "/services/security" },
            { title: "Survey & GIS", desc: "Land surveys, route mapping, GIS integrations", link: "/services/survey" },
            { title: "Pipeline", desc: "Pipeline layout, property planning & monitoring", link: "/services/pipeline" },
          ].map((service) => (
            <div key={service.title} className="bg-white p-6 rounded shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{service.desc}</p>
              <Link to={service.link} className="text-cyan-600 hover:underline">Learn More →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nirmala Global?</h2>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 list-disc list-inside text-lg text-gray-700">
          <li>Certified and Experienced Technicians</li>
          <li>End-to-End IT and Infrastructure Solutions</li>
          <li>Customized Plans Based on Business Needs</li>
          <li>Timely Delivery & 24x7 Support</li>
          <li>Modern Technology with Future-Ready Solutions</li>
          <li>Transparent Pricing and Reporting</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-14 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to elevate your IT and infrastructure?</h2>
        <p className="mb-6">Get in touch with our team to learn how we can support your goals.</p>
        <Link
          to="/contact"
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          Get a Free Consultation
        </Link>
      </section>
    </div>
  );
};

export default Home;
