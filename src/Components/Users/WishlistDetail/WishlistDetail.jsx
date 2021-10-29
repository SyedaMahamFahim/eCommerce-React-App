import React from "react";
import "../Wishlists/myWishlist.css";
import { PriceSign } from "../../MetaData/PriceSign";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { MdOutlineLaunch } from "react-icons/md";

const WishlistDetail = ({item,deleteWishlistItems}) => {
  return (
    <>
      <tr>
        <td data-th="Product">
        <Link to={`/product/${item.product}`}>

          <div className="row">
            <div className="col-sm-2 hidden-xs">
              <img
                src={item.image}
                alt={item.name}
                className="img-responsive"
                width="100%"
              />
            </div>
            <div className="col-sm-10">
              <h6 className="nomargin">{item.name}</h6>
            </div>
            
          </div>
          </Link>
        </td>
        
        <td data-th="Price">{`${PriceSign}${item.price}`}</td>

        <td data-th="Price">
        <Link to={`/product/${item.product}`}>
            <MdOutlineLaunch />
          </Link>
        </td>

        <td className="actions" data-th>
          <button className="btn btn-danger btn-sm" onClick={()=>deleteWishlistItems(item.product)}>
            <BsTrash />
          </button>
        </td>
      </tr>
    </>
  );
};

export default WishlistDetail;
