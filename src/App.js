import React,{useEffect, useState} from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import Form from './components/Form.js'
import Header from './components/Header'
import Customer from './components/Customer'
import Transaction from './components/Transaction'
import Logout from './components/Logout'
import ShowTransactions from './components/ShowTransactions'




function App() {


  


  
    
    
return (<div className="container">
      <Navbar  />
      <br/>
    <Routes>
        <Route path="/" element={<Form />} />
        <Route path="showtransactions" element={<ShowTransactions
        ></ShowTransactions>}/> 
        <Route path="logout" element={<Logout />} />


 
        </Routes>
      
        </div>)
        


  
    
        }  


export default App
