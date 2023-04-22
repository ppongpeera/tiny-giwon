import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Test from './components/Test';


ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>
    <Dashboard />
    <Test />
  </React.StrictMode>
)
