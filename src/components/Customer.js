import React from 'react'


const Customer=(props)=>{

    console.log(props.customer)
    console.log("child component")
 
    console.log(`${props.customer.customerID}...${props.customer.name}....${props.customer.clearBalance}`)
   const message= <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Customer Details</th>  
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Name</th>
      <td>{props.customer.name}</td>
    </tr>
    <tr>
      <th scope="row">ID</th>
      <td>{props.customer.customerID}</td>
    </tr>
    <tr>
      <th scope="row">Balance</th>
      <td colspan="2"> {props.customer.clearBalance}</td>
    </tr>
  </tbody>
</table>
    </div>
   
    console.log(props.status)
    if(props.status===14)
    return <div>{message}</div>
    else return <div></div>

}
export default Customer;