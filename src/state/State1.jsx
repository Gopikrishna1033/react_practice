import React, { useState } from 'react'

function State1() {
    let [state,setstate] = useState(0)
    let inHandler = ()=>{
        setstate(value=>value+1)
    }

    let deHandler = ()=>{
      setstate(value=>value-1)
    }
  return (
    <div>
      <pre>{state}</pre>
        <button onClick={inHandler}>+</button>{state}
        <button onClick={deHandler}>-</button>
    </div>
  )
}

export default State1