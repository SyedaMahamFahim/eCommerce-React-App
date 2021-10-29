import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./compareproduct.css";
import { useDispatch, useSelector } from "react-redux";
import CompareProductCard from "./CompareProductCard/CompareProductCard";
import { removeItemsFromCompareProductlist } from "../../actions/compareProductAction";
import { Link } from "react-router-dom";
import {GoGitCompare} from 'react-icons/go'
const CompareProduct = () => {
  const dispatch = useDispatch();
  const { compareProductListItems } = useSelector(
    (state) => state.compareProductlist
  );

  const deleteCompareProductlistItems = (id) => {
    const confirmationRemoveItem = window.confirm(
      "Do you want to remove the item?"
    );
    if (confirmationRemoveItem) {
      dispatch(removeItemsFromCompareProductlist(id));
    }
  };

  return (
    <>
      <Breadcrumbs pageName={"Comparsion"} />
      {
        compareProductListItems.length===0?(
          <>
          <div className="container mt-5">
          <div className="row mt-5">
            <div className="emptyCart text-center">
              <GoGitCompare className="empty-cart-icon"/>

              <h1>No Product in Your Cart</h1>
              <button className="btn btn-dark header-cart-btn mt-3" type="button">
                <Link to="/shop" className="header-btn-links">
                  {" "}
                  View Shop{" "}
                </Link>
              </button>
            </div>
          </div>
        </div>
          </>
        ):(
          <>
           <div className="container mt-4">
        <div className="row gx-4">
        
        {compareProductListItems.map((item, index) => {
        return (
          <>
         <div className="col- col-sm-5 col-md-6 col-lg-4 compare-card mt-5 gx-4">
         <CompareProductCard
         
              item={item}
              key={index}
              deleteCompareProductlistItems={deleteCompareProductlistItems}
            />
         </div>
          

            
          </>
        );
      })}
        </div>
      </div>
          </>
        )
      }
     
      
    </>
  );
};

export default CompareProduct;
