import {Routes, Route} from 'react-router-dom';

import Homepage from './pages/Homepage';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import UserDashboard from './pages/UserDashboard';



function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/dashboard' element={<UserDashboard />} />

    </Routes>
  )
}

export default App;
