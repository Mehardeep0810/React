/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import '../homework/Work.css'
const TodoList = () => {
  // Initialize state for the list of activities
  const [activities, setActivities] = useState([]);
  // Initialize state for the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle adding a new activity
  const handleAddActivity = () => {
    if (inputValue.trim() !== '') {
      setActivities([...activities, inputValue]);
      setInputValue('');
    }
  };

  // Function to handle removing an activity
  const handleRemoveActivity = (index) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter an activity"
      />
      <button className='add' onClick={handleAddActivity}>Add</button>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity}
            <button onClick={() => handleRemoveActivity(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
