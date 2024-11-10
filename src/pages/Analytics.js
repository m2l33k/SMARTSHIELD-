import React, { useState, useEffect } from 'react';
import './Analytics.css';

const Analytics = () => {
  const [status, setStatus] = useState('Data Collection');
  const [progress, setProgress] = useState(0);
  const [showReport, setShowReport] = useState(false);
  const [reportData, setReportData] = useState(null);

  // Simulate data analytics steps
  useEffect(() => {
    const stages = ['Data Collection', 'Data Processing', 'Insights Generation', 'Report Creation'];
    let currentStage = 0;

    const interval = setInterval(() => {
      if (currentStage < stages.length) {
        setStatus(stages[currentStage]);
        setProgress((currentStage + 1) * 25);  // Update progress by 25% at each stage
        currentStage++;
      } else {
        clearInterval(interval);
        setShowReport(true);  // Show report button once analytics is complete
        generateReport();  // Fake report generation after completion
      }
    }, 2000); // Update every 2 seconds for simulation

    return () => clearInterval(interval);
  }, []);

  // Fake data report generation
  const generateReport = () => {
    const fakeReport = {
      totalUsers: 1050,
      conversionRate: 0.12,
      averageSessionTime: '2m 30s',
      insights: [
        'Increase traffic from social media channels.',
        'Improve conversion rate by 5% through targeted campaigns.',
        'Focus on reducing session bounce rates.',
      ],
    };
    setReportData(fakeReport);
  };

  const handleShowReport = () => {
    alert(`Analytics Report:
    \nTotal Users: ${reportData.totalUsers}
    \nConversion Rate: ${reportData.conversionRate * 100}%
    \nAverage Session Time: ${reportData.averageSessionTime}
    \nInsights: ${reportData.insights.join('\n')}`);
  };

  return (
    <div className="analytics-container">
      <h2>Data Analytics</h2>
      <div className="status">
        <h3>Current Stage: {status}</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <p>Progress: {progress}%</p>
      </div>
      <div className="stage-list">
        <div className={`stage ${progress >= 25 ? 'completed' : ''}`}>
          <span className="stage-title">Data Collection</span>
        </div>
        <div className={`stage ${progress >= 50 ? 'completed' : ''}`}>
          <span className="stage-title">Data Processing</span>
        </div>
        <div className={`stage ${progress >= 75 ? 'completed' : ''}`}>
          <span className="stage-title">Insights Generation</span>
        </div>
        <div className={`stage ${progress >= 100 ? 'completed' : ''}`}>
          <span className="stage-title">Report Creation</span>
        </div>
      </div>

      {/* Show the "Show Report" button after analytics is complete */}
      {showReport && (
        <div className="report-section">
          <button onClick={handleShowReport} className="report-btn">
            Show Analytics Report
          </button>
        </div>
      )}
    </div>
  );
};

export default Analytics;
