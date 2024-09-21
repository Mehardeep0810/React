import React,{useState} from 'react'

const  Decrease= () => {
    //let count=0;
    const [count,setCount]=useState(10)
    let cardClickHandler=()=>{
        // count = count+1;
        // console.log(count)
        setCount(count-1)
    }
  return (
    <div>
        <h1>
            Count is: {count}
        </h1>
        {/* two ways */}
        <button onClick={cardClickHandler}>Decrease Counter</button>
        {/* <button onClick={()=>setCount(count-1)}>Decrease Counter</button> */}
    </div>
  )
}

export default Decrease