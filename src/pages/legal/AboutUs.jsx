import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>

      <p className="text-lg mb-8 text-center max-w-4xl mx-auto">
        <strong>Nirmala Global Corporate IT Solutions Private Limited</strong> is a leading provider of integrated
        technology and infrastructure services. With a strong presence across IT, Networking, Surveillance, and
        Property Infrastructure, we aim to deliver high-quality, cost-effective, and scalable solutions to businesses
        and government clients.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-cyan-700">Our Mission</h2>
          <p className="text-gray-700 text-base">
            To empower enterprises and individuals by delivering reliable IT infrastructure and secure digital
            ecosystems. We aim to bridge the gap between technology and real-world challenges with precision-driven
            services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-cyan-700">Our Vision</h2>
          <p className="text-gray-700 text-base">
            To become a trusted name in IT and infrastructure services, known for innovation, ethics, and long-term
            partnerships across industries and regions.
          </p>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Expertise</h2>
        <ul className="grid gap-4 md:grid-cols-2 list-disc list-inside text-gray-700 text-base">
          <li>IT Solutions – Servers, Software, Maintenance, and Support</li>
          <li>Networking – LAN, WAN, Fiber Optics, and Firewall Configuration</li>
          <li>Computer & Laptop Hardware Services and AMC</li>
          <li>Security Surveillance – CCTV, DVR, Remote Monitoring</li>
          <li>Survey & Route Planning – GIS, Topography, Mapping</li>
          <li>Pipeline & Property Layout – Design, Drafting, Supervision</li>
        </ul>
      </div>

      <div className="mt-14 text-center">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <p className="text-base text-gray-700 max-w-3xl mx-auto">
          With a team of certified professionals and a client-first approach, we guarantee timely delivery, technical
          excellence, and complete transparency. From concept to execution, your vision is our blueprint.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
