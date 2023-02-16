import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalcartContext } from "../../context/Cartcontext";
import "./addtocart.css";
import Cartamount from "./Cartamount";
const Addtocart = ({ myproducts }) => {
  const { Addingtocart } = useGlobalcartContext();

  const { id, stock } = myproducts;

  const [amount, setAmount] = useState(2);

  const increase = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  const decrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  return (
    <div className="addtocart">
      <Cartamount amount={amount} increase={increase} decrease={decrease} />
      <NavLink to="/cart" onClick={() => Addingtocart(id, amount, myproducts)}>
        <button className="btn btn-primary btn-text-icon py-0-25 px-0-5 mt-1">Add to Cart</button>
      </NavLink>
    </div>
  );
};

export default Addtocart;
