import React from 'react';
import {
  Monitor,
  Smartphone,
  Eye,
  Cloud,
  SatelliteDish,
  AlertCircle
} from 'lucide-react';

const monitoringServices = [
  {
    title: "Live Camera Feed Access",
    icon: <Eye size={28} className="text-blue-600" />,
    description: "Monitor all your camera feeds live from anywhere in the world via a secure web or mobile app interface.",
  },
  {
    title: "Cloud-Based Storage",
    icon: <Cloud size={28} className="text-blue-600" />,
    description: "Store surveillance footage securely on cloud platforms to ensure accessibility and data safety.",
  },
  {
    title: "Multi-Device Monitoring",
    icon: <Smartphone size={28} className="text-blue-600" />,
    description: "Access surveillance systems across multiple devices like smartphones, tablets, and laptops.",
  },
  {
    title: "Remote Configuration",
    icon: <Monitor size={28} className="text-blue-600" />,
    description: "Adjust camera angles, zoom levels, and settings remotely without needing on-site presence.",
  },
  {
    title: "Alert & Notification System",
    icon: <AlertCircle size={28} className="text-blue-600" />,
    description: "Get real-time alerts for motion detection, system failures, or unauthorized access attempts.",
  },
  {
    title: "Satellite Internet Surveillance",
    icon: <SatelliteDish size={28} className="text-blue-600" />,
    description: "Monitor cameras in remote or rural areas using satellite internet connectivity with low latency.",
  },
];

const RemoteMonitoring = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Remote Monitoring Solutions
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We offer advanced remote monitoring systems to keep your properties, offices, and critical infrastructures safe — even when you're miles away.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {monitoringServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
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

export default RemoteMonitoring;
