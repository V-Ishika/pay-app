import React,{useEffect, useState} from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import Form from './components/Form.js'
import ShowTransactions from './components/ShowTransactions'
import Login from './components/Login'
import Logout from './components/Logout'
import Transaction from './components/Transaction'
import Insufficientfunds  from './components/Insufficientfunds'



function App() {
   
const [loginf,setLoginf]=useState(false)
const [transaction,setTransaction]=useState({})
  const loginstatus=(loginflag)=>{
    setLoginf(loginflag)
  }
const setNewTransaction=(transobj)=>{
  setTransaction(transobj)

}

return (<div className="container">
      <Navbar  loginf={loginf}/>
      <br/>
    <Routes>
        <Route path="/" element={<Login loginstatus={loginstatus} />}/>
        <Route path="/formpage" element={<Form loginstatus={loginstatus} setNewTransaction={setNewTransaction}/>} />
        <Route path="/showtransactions" element={<ShowTransactions loginstatus={loginstatus} ></ShowTransactions>}/>
        <Route path="/logout" element={<Logout loginstatus={loginstatus}/>}/>
        <Route path="/transactionerror" element={<Insufficientfunds/>}/>
        <Route path="/invoice" element={<Transaction transaction={transaction}/>}/>
    </Routes>
        </div>)
    
        }  


export default App
