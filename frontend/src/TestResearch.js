import React, { useState } from 'react';
import { aucklandPlanningRules, checkConsentRequired } from './data/planning-rules';

function TestResearch() {
  const [selectedZone, setSelectedZone] = useState('H1');
  const [selectedActivity, setSelectedActivity] = useState('houseExtension');
  const [testResult, setTestResult] = useState(null);

  const testCases = {
    compliant: {
      height: 6,
      frontSetback: 15,
      sideSetback: 3,
      rearSetback: 8,
      buildingCoverage: 15
    },
    nonCompliant: {
      height: 12,
      frontSetback: 3,
      sideSetback: 0.5,
      rearSetback: 2,
      buildingCoverage: 30
    }
  };

  const runTest = (testType) => {
    const testData = testCases[testType];
    const result = checkConsentRequired(selectedZone, selectedActivity, testData);
    setTestResult({ type: testType, data: testData, result });
  };

  const zones = Object.keys(aucklandPlanningRules.zones);
  const activities = ['houseExtension', 'newDwelling', 'minorDwelling', 'swimmingPool', 'largeShed'];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>🧪 Research Data Test Suite</h2>
      
      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h3>Test Configuration</h3>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Zone: </label>
          <select value={selectedZone} onChange={(e) => setSelectedZone(e.target.value)}>
            {zones.map(zone => (
              <option key={zone} value={zone}>
                {zone} - {aucklandPlanningRules.zones[zone].name}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Activity: </label>
          <select value={selectedActivity} onChange={(e) => setSelectedActivity(e.target.value)}>
            {activities.map(activity => (
              <option key={activity} value={activity}>
                {activity.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button 
            onClick={() => runTest('compliant')}
            style={{ 
              marginRight: '10px', 
              padding: '8px 15px', 
              backgroundColor: '#4CAF50', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Test Compliant Project
          </button>
          <button 
            onClick={() => runTest('nonCompliant')}
            style={{ 
              padding: '8px 15px', 
              backgroundColor: '#f44336', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Test Non-Compliant Project
          </button>
        </div>
      </div>

      {testResult && (
        <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3>Test Results - {testResult.type === 'compliant' ? '✅ Compliant Test' : '❌ Non-Compliant Test'}</h3>
          
          <div style={{ marginBottom: '15px' }}>
            <h4>Test Data Used:</h4>
            <ul>
              <li>Height: {testResult.data.height}m</li>
              <li>Front setback: {testResult.data.frontSetback}m</li>
              <li>Side setback: {testResult.data.sideSetback}m</li>
              <li>Rear setback: {testResult.data.rearSetback}m</li>
              <li>Building coverage: {testResult.data.buildingCoverage}%</li>
            </ul>
          </div>

          <div style={{ 
            padding: '10px', 
            backgroundColor: testResult.result.consentRequired ? '#ffebee' : '#e8f5e8',
            borderRadius: '4px',
            marginBottom: '15px'
          }}>
            <h4>🎯 Decision: {testResult.result.consentRequired ? 'CONSENT REQUIRED' : 'NO CONSENT NEEDED'}</h4>
            <p><strong>Confidence:</strong> {testResult.result.confidence}</p>
            <p><strong>Reasoning:</strong> {testResult.result.reasoning}</p>
          </div>

          {testResult.result.issues && testResult.result.issues.length > 0 && (
            <div>
              <h4>⚠️ Issues Found:</h4>
              <ul>
                {testResult.result.issues.map((issue, index) => (
                  <li key={index} style={{ color: '#d32f2f' }}>{issue}</li>
                ))}
              </ul>
            </div>
          )}

          {testResult.result.applicableRules && (
            <div style={{ marginTop: '15px' }}>
              <h4>📋 Applicable Rules for {selectedZone}:</h4>
              <ul>