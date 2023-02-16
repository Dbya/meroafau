import React from "react";
import Table from "react-bootstrap/Table";
import { useGlobalcartContext } from "../../context/Cartcontext";
import Cartamount from "../singleproduct/Cartamount";

const Cartitems = ({ id, title, thumbnail, amount, price }) => {
  const { removeProduct } = useGlobalcartContext();
  const increase = () => {
    // amount < stock ? setAmount(amount + 1) : setAmount(stock)
  };
  const decrease = () => {
    //   amount >1 ? setAmount(amount -1 ) : setAmount (1)
  };
  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          <tr className="cart-row">
            <td className="cart-img">
              <img src={thumbnail} alt="" />
            </td>
            <td className="cart-title ">{title}</td>
            <td>Rs.{price}</td>
            <td>
              {
                <Cartamount
                  amount={amount}
                  increase={increase}
                  decrease={decrease}
                />
              }
            </td>
            <td>total Rs:{price * amount}</td>
            <td>
              <button className="cart-delete" onClick={() => removeProduct(id)}>delete</button>{" "}
            </td>
          </tr>
        </tbody>
      </Table>
      <hr />
    </div>
  );
};

export default Cartitems;
