import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dashboard from './Dashboard';
import './style/Success.css';
import Congrats from './style/Congrats.json'
import Lottie from 'lottie-react'


const Success = () => {
  
  return (
    <div className="congrats">
        <p className='congratsText'>Congratulations!</p>
        <p>You've Reached Your Goal</p>
        
        <Lottie animationData={Congrats} className='congratsGIF'/>

        <button className='newGoal'>Start New Goal</button>
    </div>
  );
}


export default Success