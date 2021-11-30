import React, {useEffect,useState} from 'react'


//const [transactionlist,setTransactionList]=useState([])

const Transaction=(props)=>{

  const [balance,setBalance]=useState(props.transaction.customer.clearBalance-props.transaction.amount-props.transaction.amount*0.0025)
  console.log(props.transaction)
 
  
   

  
  
   const message = <div className="col-6 " style={{margin:"auto"}}>
       <table className="table table-Light table-borderless">
  <thead>
    <tr>
      <th scope="col"><h2 style={{color:'green'}}>TRANSACTION SUCCESSFULL!!!</h2></th>
      <th scope="col"></th>
     
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Transfer Type</th>
      <td><h6>{props.transaction.transfer_type}</h6></td>
     
  
    </tr> <tr>
      <th scope="row">Debited From</th>
      <td>{props.transaction.customer.name}</td>
     
  
    </tr>
    <tr>
      <th scope="row"></th>
      <td>{`ID : ${props.transaction.customer.customerID}`}</td>
  
    </tr>

    <tr>
      <th scope="row">Credited To</th>
      <td>{props.transaction.reciever_name}</td>
    </tr>
    <tr>
      <th scope="row"></th>

      <td>{` A/c - ${props.transaction.reciever_accnum}`}</td>
   
    </tr> <tr>
      <th scope="row"></th>

      <td>{` BIC - ${props.transaction.reciever.bic}`}</td>
   
    </tr>

 
    <tr>
      <th scope="row">Amount Transfered</th>
      <td colspan="2">{props.transaction.amount}</td>
   
    </tr><tr>
      <th scope="row">Transaction charges</th>
      <td colspan="2">{props.transaction.transfer_fee}</td>n
   
    </tr>

<tr>
      <th scope="row">Balance Amount</th>
      <td colspan="2">{balance}</td>
   
    </tr>
    


  </tbody>
</table>
<div style={{marginLeft:10,marginTop:60}}><button type="button" class="btn btn-danger" onClick={()=>{props.submitHandler("false",0,0,0)}}>Go Back</button></div>
       
   </div>
 const error=<div><h3 style={{color:'red',textAlign:'center'}}>Transaction failed due to insufficient funds</h3>
                 <div style={{marginLeft:10,marginTop:60}}><button type="button" class="btn btn-danger" onClick={()=>{props.submitHandler(false,0,0,0)}}>Go Back</button></div>
              </div>
  
 
    return <div>{message}</div>
  


  }

export default Transaction;
    
