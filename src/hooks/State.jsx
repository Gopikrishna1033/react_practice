import React, { useState } from 'react'

const State = () => {
    const[count,setcount]= useState(0)

    const updateHandler=()=>{
        setcount(count+1)
    }

    const decrementHandler=()=>{
        setcount(count-1)
    }
  return (
    <div>
        <pre>{count}</pre>
        <button onClick={updateHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
    </div>
  )
}

export default State