import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
// import {
//   MdDashboard,
//   MdProductionQuantityLimits,
//   MdOutlinePostAdd,
// } from "react-icons/md";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Link to="/">
          <h1>ShopCorner</h1>
        </Link>

        <Link to="/admin/products">
        All products
        </Link>
        <Link to="/admin/product">
        Create product
        </Link>
        <Link to="/admin/orders">
        All Orders
        </Link>
        <Link to="/admin/users">
        All Users
        </Link>
        <Link to="/admin/reviews">
        All Reviews
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
