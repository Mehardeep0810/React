import React,{useEffect,useState} from 'react'

const  UseEff= () => {
    //let count=0;
    const [count,setCount]=useState(10)

    /*  useEffect(() => {
    //       console.log("working")
          }) //it will show undefined
    */

    //runs one time
    /* useEffect(() => {
         console.log("working")
     },[]) //when the array is empty then it will be undefined
    */
   
    useEffect(() => {
        console.log("working")
    },[count])
  return (
    <div>
        <h1>
            Count is: {count}   
        </h1>
        <button onClick={()=>setCount(count-1)}>Decrease Counter</button>
    </div>
  )
}

export default UseEff