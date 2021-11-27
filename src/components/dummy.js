import React, { useEffect,useState } from 'react'
import axios from 'axios'

const Dummy =()=>{
    //const [customer,setCustomer]=useState({customerID: '', name: '', clearBalance: 0, overdraft: ''})

    const [transaction,setTransaction]= useState({
        amount: 500,
        customer: {
          clearBalance: 65000,
          customerID: "17308739433267",
          name:"AREEFIKBAL T F",
          overdraft: "No"
        }, reciever_name: "Suman",
        transaction_id: 0,
        transfer_date: "2021-11-27",
        transfer_fee: 1.25,
        transfer_type: "Customer Transfer",

        message_code: "BHOT",
        reciever: {
          bankName: "AB BANK LIMITED",
          bic: "ABBLINBBXXX"
        },
        reciever_accnum: "789065432254",
       
      })


      useEffect(()=>{
          console.log("request sending")
          axios.post("http://localhost:8080/transaction/newtransaction",transaction).
          then(response=>console.log(response.data)).catch(error=>console.log(error))
      }
,[])
return <div></div>
    }

    export default Dummy;