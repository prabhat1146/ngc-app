import React from 'react';
import {
  ShieldCheck,
  Lock,
  AlertCircle,
  GlobeLock,
  ScanLine,
  ServerCog
} from 'lucide-react';

const firewallServices = [
  {
    title: "Firewall Installation",
    icon: <ShieldCheck size={28} className="text-red-600" />,
    description: "Install and configure next-gen firewalls (NGFW) for on-premise and cloud networks including Fortinet, Sophos, SonicWall, and others.",
  },
  {
    title: "Network Access Control",
    icon: <Lock size={28} className="text-red-600" />,
    description: "Implement access policies to control who accesses your network, including VLAN segmentation and device-level restrictions.",
  },
  {
    title: "Threat Monitoring",
    icon: <AlertCircle size={28} className="text-red-600" />,
    description: "24/7 threat monitoring and alerting using IDS/IPS systems to detect and respond to attacks in real-time.",
  },
  {
    title: "Secure Remote Access",
    icon: <GlobeLock size={28} className="text-red-600" />,
    description: "Set up VPNs and secure tunnels to allow your employees to safely connect to internal systems from anywhere.",
  },
  {
    title: "Firewall Audit & Hardening",
    icon: <ScanLine size={28} className="text-red-600" />,
    description: "Regular audits to verify rules, remove vulnerabilities, and strengthen configurations against evolving threats.",
  },
  {
    title: "Server Protection & DDoS Prevention",
    icon: <ServerCog size={28} className="text-red-600" />,
    description: "Protect business-critical servers from intrusion attempts and prevent downtime from DDoS attacks.",
  },
];

const FirewallSetup = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Firewall & Security Setup
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Our firewall and cybersecurity solutions protect your infrastructure from internal and external threats. We ensure compliance, scalability, and uninterrupted network performance.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {firewallServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-red-100 rounded-full mr-4">
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

export default FirewallSetup;
