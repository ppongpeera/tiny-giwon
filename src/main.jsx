import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import GoalProgess from './components/GoalProgress';
import Test from './components/Test';



ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>
    <Dashboard>
      <Test />
    </Dashboard>    
  </React.StrictMode>
)

library.add(fab, fas, far)
