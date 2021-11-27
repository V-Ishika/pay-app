import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Transactioncard from './Transactioncard'

const ShowTransactions=()=>{


    const [transactionlist,setTransactionlist]=useState([])


    useEffect(()=>{
        console.log("Show Transactions")
        axios.get("http://localhost:8080/transaction/listtransactions").then(response=>setTransactionlist(response.data)).
        catch(error=>console.log(error.data))
        console.log(transactionlist)
        


    },[])
    const header=<div><table class="table table-dark table-striped table-hover">

    <thead>
    
      <tr>
        <th scope="col" class="col-4 col-lg-2" >ID-DATE </th>
        <th  scope="col" class="col-4 col-lg-2" >AMOUNT</th>
        <th scope="col"  class="col-4 col-lg-2" >CUSTOMER ID</th>
        <th scope="col"  class="col-4 col-lg-2"  >RECIEVER BIC</th>
        <th scope="col" class="col-4 col-lg-2"> RECIEVER A/C</th>
        <th scope="col"  class="col-4 col-lg-2"  >TRANSFER TYPE</th>
      </tr>
      
    </thead>
    </table>
    
    </div>

    const renderlist =transactionlist.map((transaction)=>  {
        return(<Transactioncard key={transaction.transaction_id} transaction={transaction}/>)
    })  
if (transactionlist.length>0)
   return  <div><div>{header}</div><div>{renderlist}</div></div>
   else return <div><h1>No Transactions</h1></div>

   
}
export default ShowTransactions