import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './IncidentResponse.css';
import { v4 as uuidv4 } from 'uuid';

const IncidentResponse = () => {
  const [incidents, setIncidents] = useState([]);

  // Memoize responsePhases to avoid unnecessary re-render
  const responsePhases = useMemo(() => [
    'detected', 
    'investigation', 
    'containment', 
    'eradication', 
    'recovery', 
    'closed'
  ], []);

  // Function to generate fake incidents
  const generateFakeIncidents = useCallback(() => {
    const fakeIncidents = [
      {
        id: uuidv4(),
        title: 'Phishing Email Detected',
        description: 'A phishing email was detected targeting multiple employees.',
        status: 'detected',
        history: ['Incident detected at 10:30 AM'],
      },
      {
        id: uuidv4(),
        title: 'Ransomware Alert',
        description: 'A ransomware alert has been triggered by the endpoint protection system.',
        status: 'detected',
        history: ['Incident detected at 11:00 AM'],
      },
      {
        id: uuidv4(),
        title: 'Unauthorized Access Attempt',
        description: 'An unauthorized access attempt was detected on the server.',
        status: 'detected',
        history: ['Incident detected at 12:15 PM'],
      },
    ];
    setIncidents(fakeIncidents);
  }, []);

  // Function to simulate status updates in a realistic incident response cycle
  const simulateIncidentStatusUpdate = useCallback(() => {
    const updatedIncidents = incidents.map((incident) => {
      // Get the current phase of the incident
      const currentPhaseIndex = responsePhases.indexOf(incident.status);
      
      // If the incident is not yet closed, move to the next phase
      if (currentPhaseIndex < responsePhases.length - 1) {
        const nextStatus = responsePhases[currentPhaseIndex + 1];
        const timestamp = new Date().toLocaleTimeString();
        const newHistoryEntry = `Status updated to '${nextStatus}' at ${timestamp}`;
        
        return {
          ...incident,
          status: nextStatus,
          history: [...incident.history, newHistoryEntry], // Add to the incident's history
        };
      } else {
        // If the incident is closed, do not update it
        return incident;
      }
    });

    setIncidents(updatedIncidents);
  }, [incidents, responsePhases]);

  useEffect(() => {
    generateFakeIncidents(); // Generate fake incidents on mount
    const interval = setInterval(simulateIncidentStatusUpdate, 5000); // Update every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [generateFakeIncidents, simulateIncidentStatusUpdate]);

  return (
    <div className="incident-response-container">
      <h2>Incident Response </h2>
      <div className="incident-list">
        <h3>Active Incidents</h3>
        <ul>
          {incidents.map((incident) => (
            <li key={incident.id} className="incident-item">
              <div>
                <strong>{incident.title}</strong> - {incident.description}
              </div>
              <div className={`status-badge status-${incident.status}`}>
                Current Status: {incident.status}
              </div>
              <div className="incident-history">
                <h4>History:</h4>
                <ul>
                  {incident.history.map((entry, index) => (
                    <li key={index}>{entry}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IncidentResponse;
