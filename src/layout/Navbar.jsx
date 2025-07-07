import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="/assets/logo/ngc.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-xl font-bold leading-5">
            Nirmala Global <br />
            <span className="text-sm font-normal">
              Corporate IT Solutions Pvt. Ltd.
            </span>
          </h1>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>{isOpen ? <X /> : <Menu />}</button>
        </div>

        <div
          className={`lg:flex ${
            isOpen ? "block" : "hidden"
          } w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <ul className="lg:flex space-y-4 lg:space-y-0 lg:space-x-8 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-cyan-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/pages/legal/about-us" className="hover:text-cyan-400">
                About Us
              </Link>
            </li>
            <li className="group relative">
              <button className="hover:text-cyan-400">IT Services</button>
              <ul className="absolute z-10 hidden group-hover:block bg-white text-black p-2 mt- space-y-1 rounded shadow-md">
                <li>
                  <Link to="/pages/it-and-services/computer-and-laptop" className="hover:text-cyan-600 whitespace-nowrap overflow-hidden text-ellipsis">
                    Computer & Laptop
                  </Link>
                </li>
                <li>
                  <Link to="/pages/it-and-services/hardware-maintenance" className="hover:text-cyan-600 whitespace-nowrap overflow-hidden text-ellipsis">
                    Hardware Maintenance
                  </Link>
                </li>
                <li>
                  <Link to="/pages/it-and-services/server-setup" className="hover:text-cyan-600 whitespace-nowrap overflow-hidden text-ellipsis">
                    Server Setup
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group relative">
              <button className="hover:text-cyan-400">Networking</button>
              <ul className="absolute z-10 hidden group-hover:block bg-white text-black p-2 space-y-1 rounded shadow-md">
                <li>
                  <Link
                    to="/pages/networking/lan-wan-setup"
                    className="block hover:text-cyan-600 whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    LAN / WAN Setup
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/networking/firewall-setup"
                    className="block hover:text-cyan-600 whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    Firewall & Security
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group relative">
              <button className="hover:text-cyan-400">Surveillance</button>
              <ul className="absolute z-10 hidden group-hover:block bg-white text-black p-2 mt- space-y-1 rounded shadow-md">
                <li>
                  <Link to="/pages/surveillance/camera-installation" className="hover:text-cyan-600 whitespace-nowrap overflow-hidden text-ellipsis">
                    Camera Installation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/surveillance/remote-monitoring"
                    className="hover:text-cyan-600 whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    Remote Monitoring
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group relative">
              <button className="hover:text-cyan-400">Survey</button>
              <ul className="absolute z-10 hidden group-hover:block bg-white text-black p-2 mt- space-y-1 rounded shadow-md">
                <li>
                  <Link to="/services/survey" className="hover:text-cyan-600 whitespace-nowrap overflow-hidden text-ellipsis">
                    Land/Route Survey
                  </Link>
                </li>
                <li>
                  <Link to="/services/property" className="hover:text-cyan-600 whitespace-nowrap overflow-hidden text-ellipsis">
                    Property Mapping
                  </Link>
                </li>
                <li>
                  <Link to="/services/pipeline" className="hover:text-cyan-600 whitespace-nowrap overflow-hidden text-ellipsis">
                    Pipeline Survey
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/pages/legal/contact-us" className="hover:text-cyan-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
