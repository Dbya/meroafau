import React from 'react'
import { Link } from 'react-router-dom';
import './Grid.css'

const Listproduct = ({productss}) => {
  return (
    <div className="listproduct">
    <div className="listitems">
    {productss.map((curElem)=>{
      const{id,title,thumbnail,price,description } = curElem;
      return <div className="returnlist" key={curElem.id}>
           <div className="listimage">
           <img src={thumbnail} alt="" />
           </div>
           <div className="listcontent">
           <h2>{title}</h2>
           <p>{price}</p>
           <p>{description.slice(0 ,20)}...</p>
           <Link to={`/singleproduct/${id}`}>
           <button>See More</button>
           </Link>
           </div>
      </div>
    })}
    </div>
    </div>
  )
}

export default Listproduct
