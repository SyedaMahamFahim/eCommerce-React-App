import React from "react";
import "./cart.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import CartItem from "./CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { Link, useHistory } from "react-router-dom";
import { PriceSign } from "../MetaData/PriceSign";
import { MdRemoveShoppingCart } from "react-icons/md";

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    const confirmationRemoveItem = window.confirm(
      "Do you want to remove the item?"
    );
    if (confirmationRemoveItem) {
      dispatch(removeItemsFromCart(id));
    }
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <>
      <Breadcrumbs pageName={"Cart"} />
      {cartItems.length === 0 ? (
        <div className="container mt-5">
          <div className="row mt-5">
            <div className="emptyCart text-center">
              <MdRemoveShoppingCart className="empty-cart-icon"/>

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
      ) : (
        <>
          <div className="container mt-5">
            <table id="cart" className="table table-hover table-condensed">
              <thead>
                <tr>
                  <th style={{ width: "50%" }}>Product</th>
                  <th style={{ width: "10%" }}>Price</th>
                  <th style={{ width: "8%" }}>Quantity</th>
                  <th style={{ width: "22%" }} className="text-center">
                    Subtotal
                  </th>
                  <th style={{ width: "10%" }}>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems &&
                  cartItems.map((item, index) => (
                    <>
                      <CartItem
                        key={index}
                        item={item}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        deleteCartItems={deleteCartItems}
                      />
                    </>
                  ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <Link to="/shop" className="btn btn-dark">
                      Continue Shopping{" "}
                    </Link>
                  </td>
                  <td colSpan={2} className="hidden-xs" />
                  <td className="hidden-xs text-center">
                    <strong>
                      Total{" "}
                      {`${PriceSign}${cartItems.reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      )}`}
                    </strong>
                  </td>
                  <td>
                    <button
                      onClick={checkoutHandler}
                      className="btn btn-danger btn-block"
                    >
                      Check Out
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
