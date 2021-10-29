import React from "react";
import "./brands.css";
import { Link } from "react-router-dom";
const Brands = ({brand}) => {
  return (
    <>
      <div className="brand" key={brand.id}>
        <Link to={brand.url}>
          <img src={brand.img} alt={brand.brandName} />
        </Link>
      </div>
    </>
  );
};

export default Brands;
