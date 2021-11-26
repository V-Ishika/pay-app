import React, {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'


//const [transactionlist,setTransactionList]=useState([])

const Transaction=(props)=>{


 
 
   const navigate=useNavigate()
   const message = <div className="col-6 " style={{margin:"auto"}}>
       <table className="table table-Light table-borderless">
  <thead>
    <tr>
      <th scope="col">TRANSACTION SUCCESSFULL!!!</th>
      <th scope="col"></th>
     
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Name</th>
      <td>Ishika</td>
     
    </tr>
    <tr>
      <th scope="row">Transefred Amount</th>
      <td>50000</td>
   
    </tr>
    <tr>
      <th scope="row">Clear balance</th>
      <td colspan="2">3000</td>
   
    </tr>

  </tbody>
</table>
<div style={{marginLeft:10,marginTop:60}}><button type="button" class="btn btn-danger" onClick={()=>{props.submitHandler("false")}}>Go Back</button></div>
       
   </div>

    return <div>{message}</div>
}

export default Transaction;
    
