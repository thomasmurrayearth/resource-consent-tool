import React, { useState } from 'react';
import TestResearch from './TestResearch';

function App() {
  const [showTests, setShowTests] = useState(false);

  if (showTests) {
    return (
      <div>
        <button 
          onClick={() => setShowTests(false)}
          style={{
            margin: '10px', 
            padding: '10px 20px',
            backgroundColor: '#2196f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          ← Back to Main
        </button>
        <TestResearch />
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">🏠 Resource Consent Tool</h1>
      <p className="subtitle">New Zealand's first AI-powered consent checking tool</p>
      
      <div className="card">
        <h2>Development Progress 🎉</h2>
        <p>Your MVP development environment is ready!</p>
        <div>
          <p>✅ Node.js v22.17.1</p>
          <p>✅ React Working</p>
          <p>✅ PostgreSQL 16.9</p>
          <p>✅ GitHub Repository</p>
          <p>✅ Planning Rules Research (35 activities across 7 zones)</p>
        </div>
      </div>

      <div style={{margin: '20px 0'}}>
        <button className="b