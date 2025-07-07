import React from 'react';
import {
  Server,
  Network,
  ShieldCheck,
  Settings,
  Building,
  Cloud
} from 'lucide-react';

const serverServices = [
  {
    title: "On-Premise Server Setup",
    icon: <Server size={32} className="text-cyan-600" />,
    description:
      "Reliable physical server setup in your office or data center, including rack, power, and cooling configuration.",
  },
  {
    title: "Network & Domain Configuration",
    icon: <Network size={32} className="text-cyan-600" />,
    description:
      "Custom configuration of LAN, DHCP, DNS, Active Directory, and VPN for secure and seamless networking.",
  },
  {
    title: "Firewall & Security Integration",
    icon: <ShieldCheck size={32} className="text-cyan-600" />,
    description:
      "Protect your server infrastructure with enterprise-grade firewall, IDS/IPS, and endpoint security solutions.",
  },
  {
    title: "Server Maintenance & Monitoring",
    icon: <Settings size={32} className="text-cyan-600" />,
    description:
      "24/7 performance monitoring, automatic backups, and proactive maintenance to prevent downtime.",
  },
  {
    title: "Enterprise Server Solutions",
    icon: <Building size={32} className="text-cyan-600" />,
    description:
      "Design and deployment of high-availability enterprise-grade server architecture for businesses of all sizes.",
  },
  {
    title: "Cloud & Hybrid Integration",
    icon: <Cloud size={32} className="text-cyan-600" />,
    description:
      "Integrate AWS, Azure, or private cloud environments with your on-prem server for a scalable hybrid setup.",
  },
];

const ServerSetup = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Server Setup & Deployment Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We specialize in designing and deploying server infrastructure tailored to your organization's needs, with a focus on performance, scalability, and security.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serverServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-cyan-100 rounded-full mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerSetup;
