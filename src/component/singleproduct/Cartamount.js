import React from 'react'

const Cartamount = ({amount,decrease,increase}) => {
  return (
    <div>
      <div className="amount">
      <button onClick={()=>decrease()}>-</button>
      {amount}
      <button onClick={()=>increase()}>+</button>
      </div>
    </div>
  )
}

export default Cartamount
