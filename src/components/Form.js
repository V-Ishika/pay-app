import axios from 'axios';
import React, { useEffect } from 'react';
import  {useState} from 'react'
import Customer from './Customer'
import Bank from './Bank'
import './form.css'
import Transaction from './Transaction'
import NameCheck from './NameCheck'


const Form=(props)=>{
  console.log("Parent Component")

const [customer,setCustomer]=useState({customerID: '', name: '', clearBalance: 0, overdraft: ''})
const [status,setStatus]=useState(0)
const [reciever,setReciever]=useState({bic: '', bankName: ''})// useState("")
const [bstatus,setBstatus]=useState(0)
const [nstatus,setNstatus]=useState(0)
const[request,setRequest]=useState("false")
const [cerror,setCerror]=useState(false)
const [berror,setBerror]=useState(true)
const [terror,setTerror]=useState(true)
const [value,setValue]=useState(false)
const [submit,setSubmit]=useState("false")
const [dateError,setDateError]=useState(null)
const [ciderror,setCiderror]=useState(null)
const [biderror,setBiderror]=useState(null)
const [nameerror,setNameerror]=useState(null)
const [accerror,setAccerror]=useState(null)
const [msgcerror,setMsgcerror]=useState(null)
const [transterror,setTransterror]=useState(null)
const [amterror,setAmterror]=useState(null)
const [btoberror,setBtoberror]=useState(null)



const [transaction,setTransaction]=useState({
  amount:0,
  message_code:"", 
  reciever_accnum:"",
  reciever_name:"",
  transaction_id:0,
  transfer_date:'',
  transfer_fee:0.0,
  transfer_type:""})

const customerIDHandler=(e)=>{
  //console.log(e.target.value)
//console.log(e.target.value.length)
setStatus(e.target.value.length)
if (e.target.value.length===14){
  axios.get(`http://localhost:8080/pay/getc/${e.target.value}`)
  .then((response) => {console.log(response.status)
  setCustomer(response.data)
  setCerror(false)
 })
  .catch((error)=> {
    setCerror(true)
   // console.log(cerror)
  });
 
  console.log(`length--${e.target.value.length}`)
}else {setCustomer({customerID:'',name:''})}
  console.log(status)
  
  
    
  }
  const bankIDHandler=(e)=>{
    //console.log(e.target.value)
  //console.log(e.target.value.length)
  setBstatus(e.target.value.length)
  if (e.target.value.length===11){
    axios.get(`http://localhost:8080/pay/get-BIC/${e.target.value}`)
    .then((response) => {
   // console.log(response.status)
    setReciever(response.data)
    setBerror(false)
   })
    .catch(error=>{
     // console.log(error)
     setBerror(true)
   // console.log(berror)})
   // console.log(`length--${e.target.value.length}`)
  })
   // console.log(bstatus) 
    }
  }
  
 const nameHandler=()=>{
     // console.log(transaction.reciever_name)
      axios.get(`http://localhost:8080/pay/name-check/${transaction.reciever_name}`)
    .then((response) => {
      console.log(response.data)
      setNstatus(1)
      setValue(response.data)
   })
    .catch(error=>{
      console.log(error)})
    }

useEffect(()=>{
  setTransaction({...transaction,reciever})
},[reciever])
useEffect(()=>{
  setTransaction({...transaction,customer})
},[customer])

useEffect(()=>{
  console.log("request sending")
  axios.post("http://localhost:8080/transaction/newtransaction",transaction).
  then(response=>{setTransaction(response.data)
  setTerror(false)}).catch(error=>{console.log(error)
  setTerror(true)})
  console.log(terror)
}
,[request])

const addTransaction=(e)=>{

  e.preventDefault()
 
 const valid= validateForm()
 if (!valid) return false;
  setRequest("true")
  if(valid===true)
  setSubmit("true")

}





const submitHandler=(submit,status,bstatus,nstatus)=>
{

  setSubmit(submit)
  setStatus(status)
  setBstatus(bstatus)
  setNstatus(nstatus)
  window.location.reload()
  
  
}

const validateForm=()=>{

  let valid=true;
if( customer.customerID==='' || customer.customerID<14){
  setCiderror("enter valid customer id with 14 characters")
  valid=false;
}
console.log(cerror)
if(cerror){
  setCiderror("invalid")
  valid=false;
}
console.log(berror)
if(berror){
  setBiderror("invalid")
  valid=false;
}


if(reciever.bic===''){
  setBiderror("Bank BIC is required")
  valid=false;
}
if(reciever.bic<11){
  setBiderror("enter valid bic with 11 characters")
  valid=false;
}
if(transaction.reciever_name===''){
  setNameerror("Name is required")
  valid=false;
}
if (nstatus===0){
  setNameerror("Name Verification is required")
  valid=false;
}
if(value){
  setNameerror("Enter Valid Name")
  valid=false;
}
if(transaction.transfer_date==='')
{
  setDateError("Date is required")
  valid=false;
}
if(transaction.transfer_type==='' || transaction.transfer_type==='-select-')
{
  setTransterror("Transaction Type is Required")
  valid=false;
}
if(transaction.message_code==='' || transaction.message_code==='-select-'){
  setMsgcerror("Message code is required")
  valid=false;
}
if(transaction.reciever_accnum==='')
{
  setAccerror("A/c num is required")
  valid=false;
}
if(transaction.amount===0){
  setAmterror("please enter the amount")
  valid=false;

}
if(customer.name.startsWith("HDFC")  )
{
  
  if(!(customer.customerID==="27216037942722" ||customer.customerID==="42895235807723" || customer.customerID==="69652133523248"||customer.customerID==="45002608912874"))
    {  setAccerror("enter HDFC a/c number")
    valid=false;
  }
if (reciever.bankName!="HDFC BANK LIMITED") 
{
     setBiderror("enter HDFC bank ID")
     valid=false;

}
   if (!transaction.reciever_name.startsWith("HDFC") || (customer.name).toUpperCase()===(transaction.reciever_name).toUpperCase())
   {
  setNameerror("enter HDFC a/c name")
  valid=false;
   }
  if(!(transaction.reciever_accnum==="27216037942722" ||transaction.reciever_accnum==="42895235807723" || transaction.reciever_accnum==="69652133523248"||transaction.reciever_accnum==="45002608912874"))
    {  setAccerror("enter HDFC a/c number")
    valid=false;
  }
  
  console.log(transaction.transfer_type)
  if(transaction.transfer_type!="Bank Transfer"){
    
  setBtoberror("select bank transfer")
  valid =false;
  }
}
if(customer.customerID===transaction.reciever_accnum){
  setAccerror("customer ID and reciever ID cannot be Same!")
  valid=false;
}
if((transaction.reciever_accnum==="27216037942722" ||transaction.reciever_accnum==="42895235807723" || transaction.reciever_accnum==="69652133523248"||transaction.reciever_accnum==="45002608912874")
&& (!(customer.name).startsWith("HDFC")))
    {  setAccerror("enter valid a/c number")
    valid=false;
  }


 return valid;  
}
if (submit==="false")


    return <div className="row" style={{marginLeft:50, marginRight:50}} >
               <div >
                     
                <div className="col-6" >
                <form className="row g-3">
                             <div className="mb-3">
                                         <label for="customerID" className="form-label">Date</label>
                                         <input type="date" className="form-control" required id="date" required placeholder="enter customer ID" onChange={e=>setTransaction({...transaction,transfer_date:e.target.value})} />
                                         <label style={{color:'red'}}>{dateError}</label>
                                         
                             </div>
                             <div className="mb-3">
                                         <h4 style={{marginBottom:20}}>Transfer from</h4>
                                         <label for="customerID" className="form-label">Customer ID</label>
                                         <input type="text" required className="form-control" id="customerID" placeholder="enter customer ID" onChange={customerIDHandler}/>
                                         <label style={{color:'red'}}>{ciderror}</label>
                                         <div><Customer cerror={cerror} status={status} customer={customer}/></div>
                             </div>
                            
               
                            <div className="mb-3">
                                           <h4 style={{marginBottom:20}}>Transfer To</h4>
                                           <label for="BIC" className="form-label">BIC</label>
                                           <input type="text" required className="form-control" id="BIC" placeholder="enter BIC" onChange={bankIDHandler}/>
                                           <label style={{color:'red'}}>{biderror}</label>
                                           <div><Bank berror={berror} bstatus={bstatus} bank={reciever}/></div>
                            </div>
                            <div className="mb-3">
                                           <label  className="form-label">Name</label>
                                           
                                           <input type="text" required className="form-control" id="name" placeholder="enter Name" onChange={(e)=>setTransaction({...transaction,reciever_name:e.target.value})}/>
                                           <label style={{color:'red'}}>{nameerror}</label>
                                           <br/>
                                           <br/>
                                           <button type="button" onClick={nameHandler} class="btn btn-outline-danger">Verify Name</button>
                                          
                                           <div><NameCheck value={value} nstatus={nstatus}/></div>
                             </div>
                             <div className="mb-3">
                                           <label for="BIC" className="form-label">A/c Number</label>
                                          <input type="text" required className="form-control" id="accnum" placeholder="enter A/c Number" onChange={e=>setTransaction({...transaction,reciever_accnum:e.target.value})}/>
                                          <label style={{color:'red'}}>{accerror}</label>
      </div>
    <div className="mb-3">  
      <label for="BIC" className="form-label">Transfer Type</label>

      <select class="form-select form-select-sm" id="transfertype" onChange={e=>setTransaction({...transaction,transfer_type:e.target.value})} aria-label=".form-select-lg example">
  <option selected value="-select-">-select-</option>
  <option value="Customer Transfer">Customer Transfer</option>
  <option value="Bank Transfer">Bank Transfer</option>
</select> <label style={{color:'red'}}>{transterror}</label>
<label style={{color:'red'}}>{btoberror}</label>

      </div>
      <div className="mb-3">  
      <label for="BIC" className="form-label">Message Code</label>
      <select class="form-select form-select-sm" id="messagecode" aria-label=".form-select-lg example" onChange={e=>setTransaction({...transaction,message_code:e.target.value})}>
  <option selected value="-select-">-select-</option>
  <option value="beneficiary customer must be">CHQB</option>
  <option value="Paymnent is made in settlement">CORT</option>
  <option value="Payment Between Two">INTC</option>
  <option value="beneficiary customer or">HOLD</option>
  <option value="Paymnent advice the intermediary">PHOB</option>
  <option value="please advice the account with">PHOI</option>
  <option value="Paymnents has a related e-">REPA</option>
  <option value="payment must be executed with">SDVA</option>
</select>
 <label style={{color:'red'}}>{msgcerror}</label>


      </div>
      <div className="mb-3">
                            <label for="BIC" className="form-label">Amount</label>
                           <input type="number" className="form-control" id="num" placeholder="enter Amount" onChange={e=>setTransaction({...transaction,amount:e.target.value,transfer_fee:0.0025*e.target.value})}/>
                           <label style={{color:'red'}}>{amterror}</label>
      </div>
      <div className="mb-3">
      
      <button class="btn btn-danger" type="button" onClick={addTransaction}>Submit</button>                 


      </div>
      </form>
      </div>

      </div>
      </div>
      if(submit==="true") return <div><Transaction terror={terror} submitHandler={submitHandler}  transaction={transaction}/></div>

     
 
 
}

export default Form;