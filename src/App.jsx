import {Routes, Route} from 'react-router-dom';

import Homepage from './pages/Homepage';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import UserDashboard from './pages/UserDashboard';
import MedicalReportForm from './pages/Report';
import HealthPlanDashboard from './pages/HealthcareReport';
import ErrorBoundary from './components/ErrorBoundary';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/dashboard' element={<UserDashboard />} />
      <Route path='/medicalreport' element={<MedicalReportForm />} />
      <Route path='/healthcareplan' element={<ErrorBoundary><HealthPlanDashboard /></ErrorBoundary>} />
    </Routes>
  )
}

export default App;
