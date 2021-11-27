import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ShowTransactions=()=>{


    const [transactionlist,setTransactionlist]=useState([])


    useEffect(()=>{
        console.log("Show Transactions")
        axios.get("http://localhost:8080/transaction/listtransactions").then(response=>setTransactionlist(response.data)).
        catch(error=>console.log(error.data))
        console.log(transactionlist)
        


    },[])
    return <div><table class="table table-dark table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>

    </div>
}
export default ShowTransactions