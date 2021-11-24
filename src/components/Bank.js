import React from 'react'


const Bank=(props)=>{

    console.log(props.bank)
    console.log("child component")
 
    console.log(`${props.bank.bic}...${props.bank.bankName}`)
   const message= <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Bank Details</th>  
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Name</th>
      <td>{props.bank.bankName}</td>
    </tr>
    <tr>
      <th scope="row">BIC</th>
      <td>{(props.bank.bic).toUpperCase()}</td>
    </tr>
    
  </tbody>
</table>
    </div>
   
    console.log(props.bstatus)
    if(props.bstatus===11)
    return <div>{message}</div>
    else return <div></div>

}
export default Bank;