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


  const [transaction,setTransaction]=useState({
  
    amount:0,
    rec_name:"",
    rec_ac_num:"",
    trans_date:undefined,
    trans_fee:0.0,
    message_code:"",
    transfer_type:""})
 const  [transactionlist, setTransactionlist]=useState([])   

    const addTransactionHandler=(trans_obj)=>{
      console.log("grandparent")
      console.log(trans_obj)
      setTransaction(trans_obj)
    }
    useEffect(()=>{setTransactionlist([...transactionlist,transaction])},[transaction])
    {/*  <div style={{marginLeft:50,marginRight:50}}>
   <Header/>
    </div>
   <div  style={{marginLeft:100,marginRight:100}}>
    <Form  addTransactionHandler={addTransactionHandler}/>
  </div>
 <div style={{marginTop:100}}><Transaction transaction={transaction}/></div>*/}


  return (
  
    
    
<div className="container">
      <Navbar  />
      <br/>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="showtransactions" element={<ShowTransactions  />} />
        <Route path="logout" element={<Logout />} />


 
      </Routes>
    </div>


  
    
  )
}

export default App;
