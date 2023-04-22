import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Doughnut } from 'react-chartjs-2';
import { ArcElement,Chart as ChartJS } from "chart.js";
import './style/GoalProgress.css'
import Dashboard from './Dashboard';
ChartJS.register(ArcElement);


const GoalProgess = () => {
  const [goal, setGoal] = useState(70);

  const chartData = {
    datasets: [
      {
        data: [goal, 100 - goal],
        backgroundColor: ['#58B90A', '#FF0046'],
        borderWidth: 0,
      },
    ],
  };

  return (

        <div className="goalProgress">
          <h2>
            Goal : <strong>{goal}</strong> kg <FontAwesomeIcon className="editIcon" icon="fa-regular fa-pen-to-square" />
          </h2>
          <Doughnut class='w-75 h-75'data={chartData} />
        </div>
  )
}

export default GoalProgess