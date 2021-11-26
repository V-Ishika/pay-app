import React from 'react'
import { Link } from 'react-router-dom'


const Navbar=()=>{
const navbar=<nav className="navbar navbar-expand-lg navbar-dark bg-danger" style={{height:70,marginTop:20}}>
<div className="container-fluid">
  <a className="navbar-brand"  ><h3>PAYAPP</h3></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">New Transaction</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/showtransactions">Show Transactions</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/logout">Logout</Link>
      </li>
      
    </ul>
  </div>
</div>
</nav>
    return <div>
{navbar}
    </div>

}
export default Navbar