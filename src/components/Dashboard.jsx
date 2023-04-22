import React from 'react'
import Navbar from './Navbar'
import UserProfile from './UserProfile';
import GoalProgess from './GoalProgess';
import './style/Dashboard.css'


const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div class='col-3'>
        <UserProfile />
        <GoalProgess />
      </div>
    </>
  )
}

export default Dashboard