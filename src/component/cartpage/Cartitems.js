import React from 'react'
import Table from 'react-bootstrap/Table';
import Cartamount from '../singleproduct/Cartamount'; 

const Cartitems = ({id,title,thumbnail,amount,price}) => {

    const increase =()=>{
        // amount < stock ? setAmount(amount + 1) : setAmount(stock)
       }
       const decrease =()=>{
        //   amount >1 ? setAmount(amount -1 ) : setAmount (1)
       }
  return (
    <div>
    <Table striped bordered hover>
    <tbody>
    <tr>
      <td><img src={thumbnail} alt="" /></td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{ <Cartamount amount={amount} increase={increase} decrease={decrease} />}</td>
      <td>total rs:{price*amount}</td>
      <td><button>delete</button> </td>
    </tr>
    </tbody>
    </Table>
    </div>
  )
}

export default Cartitems
