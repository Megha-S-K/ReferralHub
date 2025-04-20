import React from "react";
import "./index.css"; // Remove styles import, just import CSS directly
import Layout from './Layout/Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Registeration from "./components/Registeration"; // Fix spelling
import PlatformSetup from "./Layout/PlatformSetup";
import Dashboard from "./Layout/Dashboard";

function App() {
  return (
    <div className="min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Registeration" element={<Registeration />} /> {/* Fix path case */}
          <Route path="/PlatformSetup" element={<PlatformSetup />} />
          <Route path="/Dashboard" element={<Layout><Dashboard /></Layout>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
