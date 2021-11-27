import React from 'react'


const Transactioncard=(props)=>{
    const amount = props.transaction.amount+props.transaction.transfer_fee

    return (
<div><table class="table table-dark table-striped table-hover">

<tbody>

  <tr>
    <th scope="row" class="col-4 col-lg-2" >{`${props.transaction.transaction_id} - ${props.transaction.transfer_date} `}  </th>
    <td class="col-4 col-lg-2" >{amount}</td>
    <td class="col-4 col-lg-2" >{props.transaction.customer.customerID}</td>
    <td class="col-4 col-lg-2"  >{props.transaction.reciever.bic}</td>
    <td class="col-4 col-lg-2">  {props.transaction.reciever_accnum}</td>
    <td class="col-4 col-lg-2"  >{props.transaction.transfer_type}</td>
  </tr>
  
</tbody>
</table>

</div>
    )

}
export default Transactioncard