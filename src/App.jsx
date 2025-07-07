import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./layout/Home";
import AboutUs from "./pages/legal/AboutUs";
import ContactUs from "./pages/legal/ContactUs";
import ComputerAndLaptop from "./pages/it-and-services/ComputerAndLaptop";
import HardwareMaintenance from "./pages/it-and-services/HardwareMaintance";
import ServerSetup from "./pages/it-and-services/ServerSetup";
import LanWanSetup from "./pages/networking/LanWanSetup";
import FirewallSetup from "./pages/networking/FirewallSetup";
import CameraInstallation from "./pages/serveillance/CameraInstallation";
import RemoteMonitoring from "./pages/serveillance/RemoteMonitoring";
import Error from "./layout/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="pages" element={<Outlet />}>
          <Route path="it-and-services" element={<Outlet />}>
            <Route path="computer-and-laptop" element={<ComputerAndLaptop />} />
            <Route
              path="hardware-maintenance"
              element={<HardwareMaintenance />}
            />
            <Route path="server-setup" element={<ServerSetup />} />
          </Route>
          <Route path="networking" element={<Outlet />}>
            <Route path="lan-wan-setup" element={<LanWanSetup />} />
            <Route path="firewall-setup" element={<FirewallSetup />} />
            <Route
              path="camera-installation"
              element={<CameraInstallation />}
            />
          </Route>
          <Route path="surveillance" element={<Outlet />}>
            <Route
              path="camera-installation"
              element={<CameraInstallation />}
            />
            <Route path="remote-monitoring" element={<RemoteMonitoring />} />
          </Route>
          <Route path="legal" element={<Outlet />}>
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
  );
}

export default App;
