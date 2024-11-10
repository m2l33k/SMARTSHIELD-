import React, { useState, useCallback } from 'react';

import './AIModels.css';

const AIModels = () => {
  // States for tracking progress, model status, and the final results
  const [modelType, setModelType] = useState('Image Classification');
  const [status, setStatus] = useState('Data Collection');
  const [progress, setProgress] = useState(0);
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [modelOutput, setModelOutput] = useState(null);
  const [simulationHistory, setSimulationHistory] = useState([]);
  
  const models = ['Image Classification', 'Text Classification', 'Regression Model'];

  // Simulation steps for different models
  const simulationSteps = {
    'Image Classification': ['Data Collection', 'Data Preprocessing', 'Model Training', 'Model Evaluation', 'Model Deployment'],
    'Text Classification': ['Text Data Collection', 'Data Tokenization', 'Model Training', 'Model Evaluation', 'Model Deployment'],
    'Regression Model': ['Data Collection', 'Feature Engineering', 'Model Training', 'Model Evaluation', 'Model Deployment']
  };

  // Start the simulation
  const startSimulation = () => {
    setIsSimulationRunning(true);
    setProgress(0);
    setStatus(simulationSteps[modelType][0]);
    setSimulationHistory([]); // Reset history each time we start the simulation
    
    simulateModel();
  };

  // Simulate the model training process step by step
  const simulateModel = useCallback(() => {
    let currentStep = 0;
    const steps = simulationSteps[modelType];

    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setStatus(steps[currentStep]);
        setProgress(((currentStep + 1) / steps.length) * 100);
        setSimulationHistory(prevHistory => [...prevHistory, steps[currentStep]]);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsSimulationRunning(false);
        setShowReport(true); // Show report when simulation finishes
        generateModelOutput();
      }
    }, 2000); // Change every 2 seconds for each step
  }, [modelType]);

  // Generate fake output for the model simulation
  const generateModelOutput = () => {
    const output = {
      modelName: modelType,
      accuracy: `${(Math.random() * (99 - 85) + 85).toFixed(2)}%`,
      precision: `${(Math.random() * (95 - 80) + 80).toFixed(2)}%`,
      recall: `${(Math.random() * (95 - 80) + 80).toFixed(2)}%`,
      inferenceTime: `${(Math.random() * (500 - 100) + 100).toFixed(2)}ms`,
      loss: `${(Math.random() * (1 - 0) + 0).toFixed(3)}`,
      topPredictions: [
        `${modelType === 'Image Classification' ? 'Cat' : 'Positive'} - 90%`,
        `${modelType === 'Image Classification' ? 'Dog' : 'Neutral'} - 5%`,
        `${modelType === 'Text Classification' ? 'Spam' : 'Negative'} - 3%`,
      ]
    };
    setModelOutput(output);
  };

  // Handle showing the detailed model report
  const handleShowModelReport = () => {
    alert(`
      AI Model Output:
      \nModel: ${modelOutput.modelName}
      \nAccuracy: ${modelOutput.accuracy}
      \nPrecision: ${modelOutput.precision}
      \nRecall: ${modelOutput.recall}
      \nInference Time: ${modelOutput.inferenceTime}
      \nLoss: ${modelOutput.loss}
      \nTop Predictions: ${modelOutput.topPredictions.join('\n')}
    `);
  };

  // Handle model type selection
  const handleModelChange = (e) => {
    setModelType(e.target.value);
    setProgress(0);
    setStatus('Data Collection');
    setShowReport(false);
    setSimulationHistory([]);
  };

  return (
    <div className="ai-models-container">
      <h2>Comprehensive AI Model Simulation</h2>
      
      <div className="model-selection">
        <label htmlFor="model-type">Select Model: </label>
        <select id="model-type" value={modelType} onChange={handleModelChange}>
          {models.map(model => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
      </div>
      
      <div className="simulation-progress">
        <h3>Current Stage: {status}</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <p>Progress: {progress}%</p>
      </div>

      <div className="simulation-history">
        <h4>Simulation History</h4>
        <ul>
          {simulationHistory.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>

      <div className="control-buttons">
        {!isSimulationRunning ? (
          <button onClick={startSimulation} className="start-btn">Start Simulation</button>
        ) : (
          <button className="start-btn" disabled>Simulation Running...</button>
        )}
      </div>

      {/* Show the "Show Report" button after simulation completion */}
      {showReport && (
        <div className="report-section">
          <button onClick={handleShowModelReport} className="report-btn">Show AI Model Report</button>
        </div>
      )}
    </div>
  );
};

export default AIModels;
