import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import IncidentResponse from './pages/IncidentResponse';
import DataProcessing from './pages/DataProcessing';
import AIModel from './pages/AIModel';
import Analytics from './pages/Analytics';
import Settings from './pages/CyberChatbot';
import ThreatNews from './pages/ThreatNews'; // Import the new ThreatNews component
import './App.css'; // Importing the CSS for styles

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* App Description Section */}
        <section className="app-description">
          <h1>Welcome to SMARTSHIELD</h1>
          <p>
            This app provides a comprehensive cybersecurity monitoring and incident response platform.
            It includes real-time threat detection, data processing, AI-powered models for threat prediction,
            and an easy-to-use interface for incident management and analytics.
          </p>
        </section>

        {/* Navigation Links */}
        <nav className="button-container">
          <Link to="/" className="nav-button">Dashboard</Link>
          <Link to="/incident-response" className="nav-button">Incident Response</Link>
          <Link to="/data-processing" className="nav-button">Data Processing</Link>
          <Link to="/ai-model" className="nav-button">AI Models</Link>
          <Link to="/analytics" className="nav-button">Analytics</Link>
          <Link to="/settings" className="nav-button">CyberChatbot</Link>
          <Link to="/threat-news" className="nav-button">Threat News</Link> {/* New Threat News Button */}
        </nav>

        {/* Set up Routes for Pages */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/incident-response" element={<IncidentResponse />} />
          <Route path="/data-processing" element={<DataProcessing />} />
          <Route path="/ai-model" element={<AIModel />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/threat-news" element={<ThreatNews />} /> {/* New Route for Threat News */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
