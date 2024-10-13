import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Report from './pages/Report.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <App /> */}
    <Report/>
  </BrowserRouter>
);
