import React from 'react'
import Table from 'react-bootstrap/Table';
import { useGlobalcartContext } from '../../context/Cartcontext'
import Cartamount from '../singleproduct/Cartamount';
import Cartitems from './Cartitems';

const Mycarts = () => {
  const { cart }=useGlobalcartContext();
  console.log("my acrt product" , cart)


  return (
    <div>
      <h1>My products are:</h1>
      <div className="cartitem">
      <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      {cart.map((curElem)=>{
        
        return <div className="cartinner" >
        <Cartitems key={curElem.id} {...curElem} />
        </div>
      })}
      </Table>
      </div>
    </div>
  )
}

export default Mycarts
