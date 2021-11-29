import React,{useEffect, useState} from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import Form from './components/Form.js'
import ShowTransactions from './components/ShowTransactions'




function App() {


  


  
    
    
return (<div className="container">
      <Navbar  />
      <br/>
    <Routes>
        <Route path="/" element={<Form />} />
        <Route path="showtransactions" element={<ShowTransactions
        ></ShowTransactions>}/>
         
        </Routes>
        
      
        </div>)
        


  
    
        }  


export default App
