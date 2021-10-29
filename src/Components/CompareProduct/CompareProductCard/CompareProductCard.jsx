import React from "react";
import { PriceSign } from "../../MetaData/PriceSign";
import { Link } from "react-router-dom";
const CompareProductCard = ({ item, deleteCompareProductlistItems }) => {
  return (
    <>
      {/* <div className="card mt-5"> */}
        <img
          src={item.image}
          alt={item.name}
          style={{ width: "100%" ,height:"300px"}}
        />
        <h4>{item.name}</h4>
        <p className="price">
          {PriceSign}
          {item.price}
        </p>
        <p>{item.description}</p>
        <br />
        <p>
          <Link to={`/product/${item.product}`}>
            <button type="button" className="btn btn-dark">
              View Product
            </button>
          </Link>
        </p>

        <p>
          <button
            type="button"
            className="btn btn-danger mt-2"
            onClick={() => deleteCompareProductlistItems(item.product)}
          >
            Remove
          </button>
        </p>
      {/* </div> */}
    </>
  );
};

export default CompareProductCard;
