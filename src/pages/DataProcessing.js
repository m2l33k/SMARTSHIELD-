import React, { useState, useEffect } from 'react';
import './DataProcessing.css';

const DataProcessing = () => {
  const [status, setStatus] = useState('Data Ingestion');
  const [progress, setProgress] = useState(0);
  const [showResult, setShowResult] = useState(false);  // State to show the result button

  // Simulate data processing
  useEffect(() => {
    const stages = ['Data Ingestion', 'Data Cleaning', 'Data Analysis', 'Modeling', 'Result Generation'];
    let currentStage = 0;

    const interval = setInterval(() => {
      if (currentStage < stages.length) {
        setStatus(stages[currentStage]);
        setProgress((currentStage + 1) * 20);
        currentStage++;
      } else {
        clearInterval(interval);
        setShowResult(true);  // Show result button once processing is complete
      }
    }, 2000); // Update every 2 seconds for simulation

    return () => clearInterval(interval);
  }, []);

  const handleShowResult = () => {
    alert('Data processing completed. Here is the result:\n\nPrediction: 85% accuracy on test data!');
  };

  return (
    <div className="data-processing-container">
      <h2>Data Processing </h2>
      <div className="status">
        <h3>Current Stage: {status}</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <p>Progress: {progress}%</p>
      </div>
      <div className="stage-list">
        <div className={`stage ${progress >= 20 ? 'completed' : ''}`}>
          <span className="stage-title">Data Ingestion</span>
        </div>
        <div className={`stage ${progress >= 40 ? 'completed' : ''}`}>
          <span className="stage-title">Data Cleaning</span>
        </div>
        <div className={`stage ${progress >= 60 ? 'completed' : ''}`}>
          <span className="stage-title">Data Analysis</span>
        </div>
        <div className={`stage ${progress >= 80 ? 'completed' : ''}`}>
          <span className="stage-title">Modeling</span>
        </div>
        <div className={`stage ${progress >= 100 ? 'completed' : ''}`}>
          <span className="stage-title">Result Generation</span>
        </div>
      </div>

      {/* Show the "Show Result" button after data processing is complete */}
      {showResult && (
        <div className="result-section">
          <button onClick={handleShowResult} className="result-btn">
            Show Final Result
          </button>
        </div>
      )}
    </div>
  );
};

export default DataProcessing;
