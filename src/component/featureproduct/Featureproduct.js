import React from 'react'
import { useGlobalContext } from '../../context/Productcontext';
import Card from 'react-bootstrap/Card';
import './feature.css'
import { Link } from 'react-router-dom';

const Featureproduct = () => {
 const {isLoading ,featureProduct} = useGlobalContext();
 console.log(featureProduct);
 
 if (isLoading)
 {
    return <div>...Loading</div>
 }

  return (
    <div>
      <h2>Feature Products</h2>
      <div className="p">
      {featureProduct.map((curElem)=>{
       const{id,title,thumbnail,price } = curElem;
        return(
          <div className="my">
          <div className="feproducts" key={curElem.id}>
          <Link to={`/singleproduct/${id}`}>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={thumbnail} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              ${price}
            </Card.Text>
            
          </Card.Body>
        </Card>
        </Link>
       
          </div>
          </div> )
      })}
      </div>

    </div>
  )
}

export default Featureproduct
