/*import React from "react";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div className="min-h-screen">
      <LoginPage />
    </div>
  );
}

export default App;*/
/*import React from "react";
import styles from "./index.css"
import Layout from './Layout/Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Registeration from "./components/Registeration"; // Import the Registration component
import PlatformSetup from "./Layout/PlatformSetup";

function App() {
  return (
    <div className="min-h-screen">
      <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Registeration" element={<Registeration />} />
        <Route path="/PlatformSetup" element={<PlatformSetup/>} />
      </Routes>
      </Layout>
      </Router>
      </div>
  );
}

export default App;*/
import React from "react";
import "./index.css"; // Remove styles import, just import CSS directly
import Layout from './Layout/Layout';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"; // Add BrowserRouter
import LoginPage from "./components/LoginPage";
import Registeration from "./components/Registeration"; // Fix spelling
import PlatformSetup from "./Layout/PlatformSetup";

function App() {
  return (
    <div className="min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Registeration" element={<Registeration />} /> {/* Fix path case */}
          <Route path="/PlatformSetup" element={
            <Layout>
              <PlatformSetup/>
            </Layout>
          } />
        </Routes>
      </Router>
      </div>
  );
}

export default App;