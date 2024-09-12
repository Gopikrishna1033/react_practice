import React, { useState } from 'react'

function State2() {
    let [state,setstate] = useState("hello")   
    let value=(msg)=>{
        setstate(msg)
    }
    /* let valuee=()=>{
        setstate("hii")
    } */
  return (
    <div>

        <h2>Event Binding</h2>
        <pre>{state}</pre>
        <button onClick={value.bind(null,"hii")}>click</button>
        <button onClick={value.bind(null,"ge")}>Click</button>
    </div>
  )
}

export default State2