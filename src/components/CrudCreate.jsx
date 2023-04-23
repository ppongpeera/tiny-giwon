import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dashboard from './Dashboard';
import './style/CRUD.css';

const CrudCreate = () => {



    return (
        <div className="card-container">
            <div className="card-top">
                <div className="card-left">
                    <div className="add-image">
                    <FontAwesomeIcon className="imageIcon" icon="fa-regular fa-image" style={{color: "#b4bcca",}}/>
                    <FontAwesomeIcon className="plusIcon" icon="fa-solid fa-circle-plus" style={{color: "#b4bcca",}} />
                    </div>
                    <div className="name">
                        <label for="name">Activity Name</label>
                        <input type="text" className="fill"/>
                    </div>
                    <div className="duration">
                        <label for="duration">Activity Duration</label>
                        <input type="number" className="fill" min="0"/>
                    </div>
                </div>

                <div className="card-right">
                    <div className="type">
                        <label for="type">Activity Type</label>
                        <select name="act-type" id="act-type">
                            <option value="Running">Running</option>
                            <option value="Swimming">Swimming</option>
                            <option value="Hiking">Hiking</option>
                            <option value="Yoga">Yoga</option>
                            <option value="Sports">Sports</option>
                        </select>
                    </div>
                    
                    <div className="date">
                        <label for="date">Date</label>
                        <input type="date" className="fill" />    
                    </div>
                    <div className="weight">
                        <label for="weight">Your Weight (kg)</label>
                        <input type="number" className="fill" min="0" />    
                    </div>
                </div>

            </div>

            <div className="card-description">
                <label for="weight">Describe your journal</label>
                <input type="text" className="fill" />    
            </div>

            <div className="card-buttons">
                <button className="cancel">Cancel</button>
                <button className="add">Add</button>
            </div>
        </div>


    )
}

export default CrudCreate