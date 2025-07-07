import React from "react";
import { Wrench, Monitor, HardDrive, BatteryFull, Settings, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Monitor className="text-cyan-600 w-10 h-10" />,
    title: "Desktop & Laptop Repair",
    desc: "Component-level diagnosis and repair for desktops and laptops including screens, keyboards, and internals."
  },
  {
    icon: <HardDrive className="text-cyan-600 w-10 h-10" />,
    title: "Storage & RAM Upgrade",
    desc: "Boost your system performance with SSD installations, RAM upgrades, and optimization."
  },
  {
    icon: <BatteryFull className="text-cyan-600 w-10 h-10" />,
    title: "Battery & Adapter Replacement",
    desc: "Genuine battery replacements and adapter supplies for laptops of all major brands."
  },
  {
    icon: <Settings className="text-cyan-600 w-10 h-10" />,
    title: "Software & OS Setup",
    desc: "We install and troubleshoot Windows, Linux, drivers, and essential software."
  },
  {
    icon: <Wrench className="text-cyan-600 w-10 h-10" />,
    title: "Peripheral Devices",
    desc: "Printer, scanner, webcam, and accessories setup and troubleshooting."
  },
  {
    icon: <ShieldCheck className="text-cyan-600 w-10 h-10" />,
    title: "Annual Maintenance (AMC)",
    desc: "Tailored AMC plans for schools, offices, and hospitals with priority response."
  }
];

const ComputerAndLaptop = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-cyan-700 mb-10">
        Computer & Laptop Services
      </h1>

      <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-14">
        We specialize in computer and laptop repair, upgrades, maintenance contracts, and accessories setup for all major brands. Our services are trusted across industries for on-time delivery and expert support.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-center mb-4">
              {service.icon}
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-center text-gray-600 text-sm">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Our trained professionals ensure timely service, use authentic parts, and deliver hassle-free support. Whether you're a home user, startup, school, or enterprise—we provide tailored solutions and AMC plans to suit your needs.
        </p>
      </div>
    </div>
  );
};

export default ComputerAndLaptop;
