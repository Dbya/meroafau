import React from "react";
import { useGlobalContext } from "../../context/Productcontext";
import Card from "react-bootstrap/Card";
import "./feature.css";
import { Link } from "react-router-dom";
import { ArrowRightAltSharp } from "@mui/icons-material";

const Featureproduct = () => {
  const { isLoading, featureProduct } = useGlobalContext();
  console.log(featureProduct);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div className="feature-whole-container">
      <h2 className="feature-heading">Feature Products</h2>
      <p className="feature-paragraph">Find out what products are loved by all</p>
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
      <div className="feature-btn">
      <h6 className="hero-cta mt-1">
					<Link
						to="/product"
						className="btn btn-primary btn-text-icon py-0-25 px-0-5 mt-1"
					>
						Shop Now!
						<span className="icon">
							<ArrowRightAltSharp style={{ fontSize: "2rem" }} />
						</span>
					</Link>
				</h6>
    </div>
    </div>
  );
};

export default Featureproduct;
