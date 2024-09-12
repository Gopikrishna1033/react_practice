import React, { useState } from 'react'

function State() {
    let[user,setuser] = useState({email:"",password:""})

    let Handler=(event)=>{
        setuser({...user,[event.target.name]:event.target.value})
    }
    
  return (
    <div>
        <pre>{JSON.stringify(user)}</pre>
        <input type="email" name="email" placeholder='email@gmail.com' onChange={Handler}/>
        <input type="password" name="password" placeholder='password'onChange={Handler}/>
    </div>
  )
}

export default State