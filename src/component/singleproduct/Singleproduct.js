import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/Productcontext";
import "./singleproduct.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Replay30Icon from "@mui/icons-material/Replay30";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Myimage from "./Myimage";
import { Star } from "./Star";
import Addtocart from "./Addtocart";

const API = "https://dummyjson.com/products";

const Singleproduct = () => {
  const { getsingleProduct, isSingleloading, singleproduct } =
    useGlobalContext();
  console.log("are", singleproduct);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getsingleProduct(`${API}/${id}`);
    console.log("id is " + id);
  }, []);

  const {
    id: dibbya,
    title,
    price,
    rating,
    stock,
    description,
    images,
    brand,
  } = singleproduct;

  if (isSingleloading) {
    return (
      <>
        <h3>Loading.....</h3>
      </>
    );
  }

  return (
    <div>
      <div className="mysingleproduct">
        <div className="mysingleimages">
          <Myimage imagess={images} />
        </div>
        <div className="mysinglecontent">
          <h4 className="product-title">{title}</h4>
          <Star stars={rating} /> <p>({rating * 100}) customer reviews</p>
          <del className="product-prev">MRP: Rs.{price + 122}</del>
          <p className="product-price">Price of day :Rs.{price}</p>
          <p>{description}</p>
          <div className="othercontent">
            <div className="shipping">
              <LocalShippingIcon />
              <p>Free delivery</p>
            </div>
            <div className="replace">
              <Replay30Icon />
              <p>30 days replacement</p>
            </div>
            <div className="warranty">
              <VerifiedUserIcon />
              <p>Warranty</p>
            </div>
          </div>
          <hr />
          <div className="morecontent">
            <p>Brand: {brand}</p>
            <div className="stockcon">
              <p>Available: {stock > 0 ? "In stock" : "Sorry out of stock"}</p>
            </div>
          </div>
          <div className="cart">
            {stock > 0 && <Addtocart myproducts={singleproduct} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
