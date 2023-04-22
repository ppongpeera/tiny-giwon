import React from 'react'
import Navbar from './Navbar'
import './style/Dashboard.css'
import UserProfile from './UserProfile'
import GoalProgess from './GoalProgress'

const Dashboard = ({children}) => {
  return (
    <div className='dashboard'>

      <Navbar />

      <div class='row' >

        <div className="userAndGoal" class='col-3'>
          <UserProfile  />
          <GoalProgess  />
        </div>
        
        <div className='rightContainer' class='col-9'>
          {children}
        </div>

      </div>
      <br></br>
    </div>
  )
}

export default Dashboard