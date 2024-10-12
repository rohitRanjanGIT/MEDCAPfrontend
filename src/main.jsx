import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './pages/Homepage';
import UserDashboard from './pages/UserDashboard';
import HealthPlanDashboard from './pages/HealthcareReport';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HomePage/> */}
    <    HealthPlanDashboard />
  </React.StrictMode>,
);
