import React,{useState} from 'react'
import Form from './components/Form.js'
import Header from './components/Header'
import Customer from './components/Customer'



function App() {


  const [transaction,setTransaction]=useState({
    cust_id:"",
    bank_bic:"",
    amount:0,
    rec_name:"",
    rec_ac_num:"",
    trans_date:undefined,
    trans_fee:0.0,
    message_code:"",
    transfer_type:""})
   

    const addTransactionHandler=(trans_obj)=>{
      console.log("grandparent")
      console.log(trans_obj)
    }


  return (
  
    <div>
      <div style={{marginLeft:50,marginRight:50}}>
    <Header/>
    </div>
    <div  style={{marginLeft:100,marginRight:100}}>
    <Form  addTransactionHandler={addTransactionHandler}/>
    </div>
     
    </div>
  );
}

export default App;
