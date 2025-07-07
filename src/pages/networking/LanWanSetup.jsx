import React from 'react';
import {
  Router,
  Cable,
  Network,
  Wifi,
  ShieldCheck,
  Building2
} from 'lucide-react';

const lanWanServices = [
  {
    title: "Office LAN Installation",
    icon: <Cable size={28} className="text-cyan-600" />,
    description:
      "Structured cabling and LAN setup for offices, including switches, patch panels, and access points.",
  },
  {
    title: "WAN Connectivity Solutions",
    icon: <Network size={28} className="text-cyan-600" />,
    description:
      "Wide Area Network setup for multiple location connectivity using MPLS, VPNs, or leased lines.",
  },
  {
    title: "Router & Switch Configuration",
    icon: <Router size={28} className="text-cyan-600" />,
    description:
      "Installation and configuration of enterprise routers, Layer 2/3 switches, and network segmentation.",
  },
  {
    title: "Wireless Networking (Wi-Fi)",
    icon: <Wifi size={28} className="text-cyan-600" />,
    description:
      "Indoor and outdoor wireless access point deployment with centralized Wi-Fi controller configuration.",
  },
  {
    title: "Firewall & Network Security",
    icon: <ShieldCheck size={28} className="text-cyan-600" />,
    description:
      "Secure your network with firewalls, intrusion detection systems, and role-based access control.",
  },
  {
    title: "Enterprise Network Architecture",
    icon: <Building2 size={28} className="text-cyan-600" />,
    description:
      "Design and implementation of scalable network infrastructure for data centers and enterprise campuses.",
  },
];

const LanWanSetup = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          LAN / WAN Setup & Networking Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We provide complete solutions for LAN and WAN networking, from small offices to multi-branch enterprises. Our services are designed to ensure high performance, security, and scalability.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {lanWanServices.map((service, idx) => (
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

export default LanWanSetup;
