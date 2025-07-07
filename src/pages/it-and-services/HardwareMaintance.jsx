import React from 'react';
import { Wrench, HardDrive, ShieldCheck, AlertTriangle, Settings2, CheckCircle } from 'lucide-react';

const services = [
  {
    title: "Preventive Maintenance",
    icon: <ShieldCheck size={32} className="text-cyan-600" />,
    description: "Regular checks to ensure your hardware is running smoothly and avoid unexpected failures.",
  },
  {
    title: "Hardware Repair",
    icon: <Wrench size={32} className="text-cyan-600" />,
    description: "Expert repair services for desktops, laptops, and servers, including component replacements.",
  },
  {
    title: "Data Recovery",
    icon: <HardDrive size={32} className="text-cyan-600" />,
    description: "Recover lost or corrupted data from damaged hard drives or storage systems.",
  },
  {
    title: "Diagnostics & Troubleshooting",
    icon: <AlertTriangle size={32} className="text-cyan-600" />,
    description: "Identify and fix hardware malfunctions with detailed diagnostics and reporting.",
  },
  {
    title: "Custom Build & Setup",
    icon: <Settings2 size={32} className="text-cyan-600" />,
    description: "Tailored PC/server builds and configuration to meet specific performance needs.",
  },
  {
    title: "AMC & Support Plans",
    icon: <CheckCircle size={32} className="text-cyan-600" />,
    description: "Annual Maintenance Contracts and priority tech support for businesses and individuals.",
  },
];

const HardwareMaintenance = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Hardware Maintenance Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We provide comprehensive hardware maintenance services to ensure the smooth operation and longevity of your IT infrastructure. Our certified technicians ensure maximum uptime, reduced risk, and complete reliability.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-cyan-100 rounded-full mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HardwareMaintenance;
