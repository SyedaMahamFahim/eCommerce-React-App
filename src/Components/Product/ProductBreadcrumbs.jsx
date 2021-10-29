import React from "react";
import { Link } from "react-router-dom";
const ProductBreadcrumbs = ({ category, productTitle }) => {
  return (
    <>
      <div className="container mt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              {category}
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {productTitle}
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default ProductBreadcrumbs;
