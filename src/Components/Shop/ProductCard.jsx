import React from "react";
import "./shop.css";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";
import {GoGitCompare} from 'react-icons/go'
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import { PriceSign } from "../MetaData/PriceSign";
import { addItemsToCart } from "../../actions/cartAction";
import { addItemsToWishlist } from "../../actions/wishlistAction";
import {addItemsToCompareProductlist } from "../../actions/compareProductAction";
import { useDispatch} from "react-redux";
import { useAlert } from "react-alert";

const ProductCard = ({ product}) => {
  const dispatch=useDispatch()
   const alert = useAlert();
  const addToCartHandler = () => {
    if(product.Stock>0){
      dispatch(addItemsToCart(product._id,1));
      alert.success("Item Added To Cart");
    }
    if (product.Stock===0) return alert.info("Out Of Stock") 
  };

  const addToWishlistHandler = () => {
      dispatch(addItemsToWishlist(product._id));
      alert.success("Item Added To Wishlist"); 
      
  };
 
  const addToCompareProductlistHandler = () => {
    // if(compareProductListItems.length <4){
    dispatch(addItemsToCompareProductlist(product._id));
    alert.success("Item Added To Compare List"); 
    // }
};

  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <>
   
        <div className="shop-card">
          <div className="imgBx">
            <img src={product.images[0].url} alt={product.name} />
            <ul className="shop-action">
              <li onClick={addToWishlistHandler} >
                <AiOutlineHeart />
                <span>Add To The Wishlist</span>
              </li>
              <li onClick={addToCartHandler}>
                <BsCartPlus />
                <span>Add To The Cart</span>
              </li>
              <li>
              <Link className="productCard" to={`/product/${product._id}`}>
                <AiOutlineZoomIn />
                </Link>
                <span>View Detail</span>
              </li>
              <li onClick={addToCompareProductlistHandler}>
                <GoGitCompare />
                <span>Add to Compare</span>
              </li>
            </ul>
          </div>
          <div className="content">
            <div className="productName">
              <h3>{product.name}</h3>
            </div>
            <div className="price-rating">
              <h2>{`${PriceSign} ${product.price}`}</h2>
            </div>
            <div className="rating">
            <Rating {...options} />
              {product.numOfReviews}
            </div>
          </div>
        </div>

   
      
    </>
  );
};

export default ProductCard;
