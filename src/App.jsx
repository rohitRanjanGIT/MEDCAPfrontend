import {Routes, Route} from 'react-router-dom';

import Homepage from './pages/Homepage';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';



function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />

    </Routes>
  )
}

export default App;
