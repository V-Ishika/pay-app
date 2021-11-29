import React,{useEffect, useState} from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import Form from './components/Form.js'
import ShowTransactions from './components/ShowTransactions'
import Login from './components/Login'
import Logout from './components/Logout'




function App() {
   
const [loginf,setLoginf]=useState(false)
  const loginstatus=(loginflag)=>{
    setLoginf(loginflag)
  }
return (<div className="container">
      <Navbar  loginf={loginf}/>
      <br/>
    <Routes>
        <Route path="/" element={<Login loginstatus={loginstatus} />}/>
        <Route path="/formpage" element={<Form />} />
        <Route path="/showtransactions" element={<ShowTransactions ></ShowTransactions>}/>
        <Route path="/logout" element={<Logout loginstatus={loginstatus}/>}/>
    </Routes>
        </div>)
    
        }  


export default App
