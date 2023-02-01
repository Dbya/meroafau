import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import './addtocart.css'
const Addtocart = ({ myproducts}) => {
 const {stock }= myproducts;

const [amount,setAmount]=useState(1);

const increase =()=>{
 amount < stock ? setAmount(amount + 1) : setAmount(stock)
}
const decrease =()=>{
   amount >1 ? setAmount(amount -1 ) : setAmount (1)
}

  return (
    <div className="addtocart">
    <div className="addsub">
    <button onClick={decrease} > - </button>
    <p>{amount}</p>
    <button onClick={increase} > + </button>
    </div>
    <NavLink to="/cart" onClick={()=> Addingtocart(id , amount , myproducts)} >
     <button>ADD to Cart</button>
    </NavLink>
    
    </div>
  )
}

export default Addtocart
