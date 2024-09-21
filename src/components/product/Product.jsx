/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, {useState} from 'react'
//hook is passed returns array->usetate
import '../product/Product.css'

const Product = (props) => {

 //let price = props.price
// eslint-disable-next-line react/prop-types
const [price,setPrice] = useState(props.price)

 const cardClickHandler = () => {//body of the callback function
 // console.log("clicked")
 setPrice(100)
 }

  return (
    // eslint-disable-next-line no-undef
    <figure onClick={cardClickHandler}//passing callbackfunctionto event handler
     className='product'>
        <img src= {props.imgUrl} alt={props.name}/>
        <h1>Name: {props.name}</h1>
        <h1>Price: Rs{price}</h1>
    </figure>
  )
}

export default Product