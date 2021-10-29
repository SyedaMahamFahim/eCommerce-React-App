import React from "react";
import "../cart.css";
import { PriceSign } from "../../MetaData/PriceSign";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";


const CartItem = ({ item, increaseQuantity,decreaseQuantity,deleteCartItems }) => {
  return (
    <>
    <tr>
      <td data-th="Product">
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
            <Link to={`/product/${item.product}`}>
              <h6 className="nomargin">{item.name}</h6>
            </Link>
          </div>
        </div>
      </td>
      <td data-th="Price">{`Price: ${PriceSign}${item.price}`}</td>
      <td data-th="Quantity" >
        <div className="cart-plus-minus">
          <button
            className="qtybutton"
            onClick={() => decreaseQuantity(item.product, item.quantity)}
          >
            -
          </button>
          <input
            type="number"
            value={item.quantity}
            readOnly
            className="cart-qty"
          />

          <button
            className="qtybutton"
            onClick={() =>
              increaseQuantity(item.product, item.quantity, item.stock)
            }
          >
            +
          </button>
        </div>
      </td>
      <td data-th="Subtotal" className="text-center" >
        {item.price * item.quantity}
      </td>
      <td className="actions" data-th >
        <button className="btn btn-danger btn-sm"  onClick={()=>deleteCartItems(item.product)}>
          <BsTrash  />
        </button>
      </td>
      </tr>
    </>
  );
};

export default CartItem;
