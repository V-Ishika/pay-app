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


  
 const  [transactionlist, setTransactionlist]=useState([])   

    const addTransactionHandler=(trans_obj)=>{
      console.log("grandparent")
      console.log(trans_obj)
      setTransactionlist([...transactionlist,trans_obj])
      console.log(transactionlist)
  
    }

  
    
    
return (<div className="container">
      <Navbar  />
      <br/>
 {/*     <Routes>
        <Route path="/" element={<Form addTransactionHandler={addTransactionHandler}/>} />
        <Route path="showtransactions" element={<ShowTransactions
        ></ShowTransactions>}/> 
        <Route path="logout" element={<Logout />} />


 
        </Routes>*/}
        <ShowTransactions/>
        </div>)
        


  
    
        }  


export default App
