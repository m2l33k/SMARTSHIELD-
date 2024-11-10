

import React from 'react';
import './Dashboard.css'; 
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Welcome to the Cybersecurity Dashboard. Below are the tools and their descriptions that have been implemented:</p>

      {/* Tools Section */}
      <section className="tools-section">
        <div className="tool">
          <h2>Real-Time Threat Detection</h2>
          <p>
            This tool monitors your system in real-time for any suspicious activity. 
            Using machine learning and pattern recognition, it identifies potential threats and alerts the user immediately.
          </p>
        </div>

        <div className="tool">
          <h2>Incident Response Management</h2>
          <p>
            This tool helps in managing cybersecurity incidents efficiently. 
            It allows you to track the progress of responses to incidents, assign tasks, and generate reports for future analysis.
          </p>
        </div>

        <div className="tool">
          <h2>Data Processing Pipeline</h2>
          <p>
            The data pipeline is responsible for processing large volumes of cybersecurity data. 
            It cleans, analyzes, and transforms raw data into actionable insights for threat analysis and modeling.
          </p>
        </div>

        <div className="tool">
          <h2>AI-Powered Threat Prediction Models</h2>
          <p>
            This tool leverages machine learning algorithms to predict potential threats based on historical data, trends, and user behavior.
            It helps anticipate possible breaches before they occur, improving proactive measures.
          </p>
        </div>

        <div className="tool">
          <h2>Analytics and Reporting</h2>
          <p>
            This tool provides visualizations and analytics for cybersecurity data. 
            It allows you to generate reports, visualize trends, and analyze the effectiveness of security measures over time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
