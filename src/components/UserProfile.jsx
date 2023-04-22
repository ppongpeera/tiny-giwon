import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style/UserProfile.css'

const UserProfile = () => {

    const [weight, setWeight] = useState(95)


  return (
    <div className='userProfile'>
        <img src='http://placekitten.com/200/200' alt=''/>
        <h2>DisplayName</h2>
        <p>
            Current Weight : <strong>{weight}</strong> kg
        </p>
        <FontAwesomeIcon className="editIcon" icon="fa-regular fa-pen-to-square" />

    </div>
  )
}

export default UserProfile