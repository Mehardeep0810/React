/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import "./Form.css"

const Form = () => {

const [name,SetName] = useState('')
const [price,SetPrice] = useState(0)
const [img,SetImage] = useState('')

const nameChangeHandler = (event) => {
console.log("Name Changed")
}

const formSubmitHandler = (event) => {event.preventDefault()}

  return (
    <form onSubmit={formSubmitHandler}
    className='form'>
        <div>
            <label htmlFor=''>Name:</label>
            <input type='text' id='name' placeholder='Product Name'onChange={nameChangeHandler}/>
        </div>
        <div>
            <label htmlFor=''>Price:</label>
            <input type='text' id='name' placeholder='Product Price'/>
        </div>
        <div>
            <label htmlFor=''>Image Url:</label>
            <input type='text' id='img' placeholder='Product Img Url'/>
        </div>
        <button>Create Product</button>
    </form>
  )
}

export default Form  