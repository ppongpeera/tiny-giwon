import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dashboard from './Dashboard';
import './style/test.css'

const Test = () => {
  return (
  <>
    <div class="container mt-5">
      <h1 class="mb-4">Activity Exercise Form</h1>
      <form>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="activityName" class="form-label">Activity Name</label>
              <input type="text" class="form-control" id="activityName" name="activityName" required />
            </div>
            <div class="mb-3">
              <label for="activityType" class="form-label">Activity Type</label>
              <select class="form-select" id="activityType" name="activityType" required>
                <option value="">-- Select Activity Type --</option>
                <option value="Aerobic">Aerobic</option>
                <option value="Strength">Strength</option>
                <option value="Flexibility">Flexibility</option>
                <option value="Balance">Balance</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="durationTime" class="form-label">Duration Time</label>
              <input type="number" class="form-control" id="durationTime" name="durationTime" required />
            </div>
            <div class="mb-3">
              <label for="userWeight" class="form-label">User Weight (in kg)</label>
              <input type="number" class="form-control" id="userWeight" name="userWeight" required />
            </div>
            <div class="mb-3">
              <label for="date" class="form-label">Date</label>
              <input type="date" class="form-control" id="date" name="date" required />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea class="form-control" id="description" name="description" rows="3" required></textarea>
        </div>
        <div class="d-flex justify-content-between">
          <button type="submit" class="btn btn-primary">Add</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        </div>
      </form>
    </div>
    </>

  )
}

export default Test