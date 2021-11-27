import axios from 'axios';
import React, { useEffect } from 'react';
import  {useState} from 'react'
import Customer from './Customer'
import Bank from './Bank'
import './form.css'
import Transaction from './Transaction'


const Form=(props)=>{
  console.log("Parent Component")

const [customer,setCustomer]=useState({customerID: '', name: '', clearBalance: 0, overdraft: ''})
const [status,setStatus]=useState(0)
const [reciever,setReciever]=useState({bic: '', bankName: ''})// useState("")
const [bstatus,setBstatus]=useState(0)
const [transaction,setTransaction]=useState({
  amount:0,
  message_code:"", 
  reciever_accnum:"",
  reciever_name:"",
  transaction_id:0,
  transfer_date:undefined,
  transfer_fee:0.0,

  transfer_type:""})
 // useEffect(()=>{
 //console.log(transaction)
 //  if (transaction.amount!=""){
  //   props.addTransactionHandler(transaction)
  // }
 // },[transaction])



 
  


  



const customerIDHandler=(e)=>{
  console.log(e.target.value)

 // setVal(e.target.value)
console.log(e.target.value.length)
setStatus(e.target.value.length)
if (e.target.value.length===14){
  axios.get(`http://localhost:8080/pay/getc/${e.target.value}`)
  .then((response) => {console.log(response.status)
  setCustomer(response.data)
 })
  .catch(error=>console.log(error))
 
  console.log(`length--${e.target.value.length}`)
}
  console.log(status)
  
  
    
  }
  const bankIDHandler=(e)=>{
    console.log(e.target.value)
  
   //   setVal(e.target.value)
  console.log(e.target.value.length)
  setBstatus(e.target.value.length)
  if (e.target.value.length===11){
    axios.get(`http://localhost:8080/pay/get-BIC/${e.target.value}`)
    .then((response) => {
    console.log(response.status)
    setReciever(response.data)
  
    

  
   })
    .catch(error=>console.log(error))
   
    console.log(`length--${e.target.value.length}`)
  }
    console.log(bstatus)
    
    
      
    }

useEffect(()=>{
  setTransaction({...transaction,reciever})
},[reciever])
useEffect(()=>{
  setTransaction({...transaction,customer})
},[customer])
const [submit,setSubmit]=useState("false")


const addTransaction=(e)=>{

  
  e.preventDefault()
  console.log("CHECKING ERROR")
  console.log(transaction)
  axios.post("http://localhost:8080/transaction/newtransaction",transaction).
  then(response=>console.log(response.data)).catch(error=>console.log(error))
  
   
  setSubmit("true")

}
const submitHandler=(submit,status,bstatus)=>

{

  setSubmit(submit)
  setStatus(status)
  setBstatus(bstatus)
}


    if (submit==="false")


    return <div className="row" style={{marginLeft:50, marginRight:50}} >
               <div style={{borderWidth:2,borderColor:"#FF0000",borderStyle:"solid",padding:50}}>
                     
                <div className="col-6" >
                <form className="row g-3">
                             <div className="mb-3">
                                         <label for="customerID" className="form-label">Date</label>
                                         <input type="date" className="form-control" required id="date" required placeholder="enter customer ID" onChange={e=>setTransaction({...transaction,transfer_date:e.target.value})} />
                                         <div id="customerDetails"></div>
                             </div>
                             <div className="mb-3">
                                         <h4 style={{marginBottom:20}}>Transfer from</h4>
                                         <label for="customerID" className="form-label">Customer ID</label>
                                         <input type="text" required className="form-control" id="customerID" placeholder="enter customer ID" onChange={customerIDHandler}/>
                                         <div><Customer status={status} customer={customer}/></div>
                             </div>
                            
               
                            <div className="mb-3">
                                           <h4 style={{marginBottom:20}}>Transfer To</h4>
                                           <label for="BIC" className="form-label">BIC</label>
                                           <input type="text" required className="form-control" id="BIC" placeholder="enter BIC" onChange={bankIDHandler}/>
                                           <div><Bank bstatus={bstatus} bank={reciever}/></div>
                            </div>
                            <div className="mb-3">
                                           <label for="BIC" className="form-label">Name</label>
                                           <input type="text" required className="form-control" id="name" placeholder="enter Name" onChange={e=>setTransaction({...transaction,reciever_name:e.target.value})}/>
                             </div>
                             <div className="mb-3">
                                           <label for="BIC" className="form-label">A/c Number</label>
                                          <input type="text" required className="form-control" id="accnum" placeholder="enter A/c Number" onChange={e=>setTransaction({...transaction,reciever_accnum:e.target.value})}/>
                           


      </div>
     
                                         

    <div className="mb-3">  
      <label for="BIC" className="form-label">Trasfer Type</label>

      <select class="form-select form-select-sm" id="transfertype" onChange={e=>setTransaction({...transaction,transfer_type:e.target.value})} aria-label=".form-select-lg example">
  <option selected>-select-</option>
  <option value="Customer Transfer">Customer Transfer</option>
  <option value="Bank Transfer">Bank Transfer</option>
</select>
                           


      </div>
    
      <div className="mb-3">  
      <label for="BIC" className="form-label">Message Code</label>

      <select class="form-select form-select-sm" id="messagecode" aria-label=".form-select-lg example" onChange={e=>setTransaction({...transaction,message_code:e.target.value})}>
  <option selected>-select-</option>
  <option value="beneficiary customer must be">CHQB</option>
  <option value="Paymnent is made in settlement">CORT</option>
  <option value="Payment Between Two">INTC</option>
  <option value="beneficiary customer or">HOLD</option>
  <option value="Paymnent advice the intermediary">PHOB</option>
  <option value="please advice the account with">PHOI</option>
  <option value="Paymnents has a related e-">REPA</option>
  <option value="payment must be executed with">SDVA</option>
</select>
                           


      </div>
      <div className="mb-3">
                            <label for="BIC" className="form-label">Amount</label>
                           <input type="number" className="form-control" id="num" placeholder="enter Amount" onChange={e=>setTransaction({...transaction,amount:e.target.value,transfer_fee:0.0025*e.target.value})}/>
                           


      </div>
      <div className="mb-3">
      
      <button class="btn btn-danger" type="button" onClick={addTransaction}>Submit</button>                 


      </div>
      </form>
      </div>

      </div>
      </div>
      if(submit==="true") return <div><Transaction submitHandler={submitHandler}  transaction={transaction}/></div>

     
 
 
}

export default Form;