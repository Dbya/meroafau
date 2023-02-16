import React from "react";
import Featureproduct from "../featureproduct/Featureproduct";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Grid.css";
const Gridproduct = ({ productss }) => {
  console.log("grid prod", productss);

  return (
    <div className="gridproducts">
      <div className="grid-products-container">
        {productss.map((curElem) => {
          const { id, title, thumbnail, price } = curElem;
          return (
            <div className="my">
              <div className="feproducts" key={curElem.id}>
                <Link to={`/singleproduct/${id}`}>
                  <Card className="grid-card">
                    <Card.Img variant="top" src={thumbnail} className="grid-image" />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>Rs. ${price}</Card.Text>
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

export default Gridproduct;
