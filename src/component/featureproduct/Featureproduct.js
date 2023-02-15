import React from "react";
import { useGlobalContext } from "../../context/Productcontext";
import Card from "react-bootstrap/Card";
import "./feature.css";
import { Link } from "react-router-dom";

const Featureproduct = () => {
  const { isLoading, featureProduct } = useGlobalContext();
  console.log(featureProduct);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <h2 className="feature-heading">Feature Products</h2>
      <div className="feature-grid">
        {featureProduct.map((curElem) => {
          const { id, title, thumbnail, price } = curElem;
          return (
            <div className="feature-container">
              <div className="feature-product" key={curElem.id}>
                <Link to={`/singleproduct/${id}`}>
                  <Card className="feature-product-container">
                    <div className="feature-image-container">
                    <Card.Img variant="top" src={thumbnail} className="feature-image"/>
                    </div>
                    <Card.Body className="feature-description-container">
                      <Card.Title className="feature-desc-title">{title}</Card.Title>
                      <Card.Text className="feature-desc-price">${price}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featureproduct;
