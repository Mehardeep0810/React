import React from 'react'
import "./Form.css"
const Form = () => {
  return (
  <article>
    <h2>Registration Form</h2>
    
    <form action="/submit_form" method="post">
    <label for="fname">First name:</label><br></br>
    <input type="text" id="fname" name="fname"/><br></br>
    <label for="lname">Last name:</label><br></br>
    <input type="text" id="lname" name="lname"/><br></br>
    <label for="lname">Address:</label><br></br>
    <input type="text" id="address" name="address"/><br></br>
    <label for="lname">Contact Number:</label><br></br>
    <input type="number" id="num" name="num"/><br></br>
    <label for="my-dropdown">Semester: </label>
    <select id="my-dropdown">
        <option value="option1">1</option>
        <option value="option2">2</option>
        <option value="option3">3</option>
    </select><br></br>
    <input type="submit" value="Submit"/>
    </form> 
    </article>
    
  )
}

export default Form
