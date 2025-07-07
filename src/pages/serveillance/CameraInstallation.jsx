import React from 'react';
import {
  Camera,
  ShieldCheck,
  Video,
  Wifi,
  Building2,
  MonitorSmartphone
} from 'lucide-react';

const cameraServices = [
  {
    title: "HD CCTV Camera Setup",
    icon: <Camera size={28} className="text-indigo-600" />,
    description: "Install high-resolution indoor and outdoor CCTV cameras for homes, offices, and public spaces with DVR/NVR integration.",
  },
  {
    title: "Smart Surveillance Systems",
    icon: <MonitorSmartphone size={28} className="text-indigo-600" />,
    description: "Enable real-time remote monitoring through mobile apps and cloud platforms using IoT-enabled smart surveillance.",
  },
  {
    title: "Motion Detection & Alerts",
    icon: <ShieldCheck size={28} className="text-indigo-600" />,
    description: "Implement AI-based motion detection with instant alerting to your device when suspicious activity is detected.",
  },
  {
    title: "Video Door Phones & Intercom",
    icon: <Video size={28} className="text-indigo-600" />,
    description: "Install video door phones and audio/video intercom systems for residential apartments and commercial complexes.",
  },
  {
    title: "Wireless Camera Setup",
    icon: <Wifi size={28} className="text-indigo-600" />,
    description: "Deploy wireless IP camera systems for flexible and clutter-free surveillance with cloud backup.",
  },
  {
    title: "Office & Commercial Surveillance",
    icon: <Building2 size={28} className="text-indigo-600" />,
    description: "Customized security systems for warehouses, retail, schools, and factories with centralized monitoring.",
  },
];

const CameraInstallation = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Camera & Surveillance Installation
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We specialize in end-to-end surveillance solutions including CCTV, wireless IP cameras, remote monitoring systems, and security audits to ensure your premises are always protected.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cameraServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-100 rounded-full mr-4">
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

export default CameraInstallation;
