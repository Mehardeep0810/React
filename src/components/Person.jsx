import React from 'react'
import "./Person.css"
const Person = (props) => {
  return (
    <article class="person">
        <h1>Name:{props.Name}</h1>
        <h2>Age:{props.Age}</h2>
        <p>Favcolor: {props.Favcolor}</p>
    </article>
  )
}

export default Person