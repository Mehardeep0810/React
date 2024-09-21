import React,{useState} from 'react'

const StateDemo = () => {
    //let count=0;
    const [count,setCount]=useState(0)
    let cardClickHandler=()=>{
        // count = count+1;
        // console.log(count)
        setCount(count+1)
    }
  return (
    <div>
        <h1>
            Count is: {count}
        </h1>
        <button onClick={cardClickHandler}>Increase Counter</button>
    </div>
  )
}

export default StateDemo