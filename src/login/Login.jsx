import React, { useState } from 'react'


function Login() {
    let[user,setuser] = useState({email:"",password:""})
    let Handler = (event)=>{
        setuser({...user,[event.target.name]:event.target.value})
    }
   

    let formcheck = (event)=>{
        event.preventDefault();  
           alert("Please enter the required feilds")
    } 

    

  return (
    <div>
        <pre>{JSON.stringify(user)}</pre>
        <h1>{user.email}</h1>
        <div className="container">
            <div className="row">
                <div className="card">
                    <div className="card-header">
                        <h1 style={{textAlign:'center'}}>Login</h1>
                    </div>
                    <div className="card-body">
                        <form action="" onSubmit={formcheck} >
                            <div className="form-group">
                            <label htmlFor="" className='col-form-label'>Username</label>
                            <input type="text" className='form-control ' name='email' onChange={Handler} value={user.email} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className='col-form-label'>Password</label>
                            <input type="password" className='form-control' name='password' onChange={Handler} value={user.password}required/>
                        </div>
                        <div className="form-group">
                            <button className='btn btn-primary form-control'  type='submit'>Login</button>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </div>    
        </div> 
    </div>
  )
}

export default Login