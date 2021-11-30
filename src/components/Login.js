
import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';


const Login = (props) => {
    const navigate = useNavigate();
   const [user,setUser]=useState('')
   const [password,setPassword]=useState('')
   const [loginError,setLoginError]=useState(false)
   useEffect(()=>{
     setUser('')
     setPassword('')
   },[])
   
const userHandler=(e)=>{
    setUser(e.target.value)
}
const pwdHandler=(e)=>{
    setPassword(e.target.value)
}
  

const formHandler = (e) => {
    e.preventDefault()
    console.log(user);
    console.log(password);
    if (user === "ishikav" && password === "1999") 
    {
                props.loginstatus(true)
                navigate('/formpage') 
         }
    else {
        setLoginError(true)
    }
        
}
const errormessage=<p style={{paddingTop:15, color:'red',marginLeft:270}}>invalid username or password</p>
const loginform=
        <div className="container" style={{marginTop:40}}>

            <div className="row col-6" style={{margin:'auto'}}>
                <form className="form form-group form-dark row mt-3" >
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="user"
                            id="user"
                            className="form-control mb-3"
                            placeholder="user"
                            value={user}
                            
                            onChange={userHandler}
                            required
                        />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Password"
                            value={password}
                        
                            
                            onChange={pwdHandler} />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-danger mb-3"
                            value="Login"
                            onClick={formHandler}
                        />
                    </div>
                </form>
            </div>
        </div >
    if (!loginError)
    return <div>{loginform}</div>
    else if (loginError)
    return <div><div>{loginform}</div>
                <div >{errormessage}</div></div>
}
export default Login;