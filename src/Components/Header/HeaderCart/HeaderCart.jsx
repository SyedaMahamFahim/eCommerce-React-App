import React from "react";
import { BiBasket } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItemsFromCart } from "../../../actions/cartAction";
import HeaderCartItem from "./HeaderCartItem";
const HeaderCart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const deleteCartItems = (id) => {
    const confirmationRemoveItem = window.confirm(
      "Do you want to remove the item?"
    );
    if (confirmationRemoveItem) {
      dispatch(removeItemsFromCart(id));
    }
  };
  return (
    <>
      <div className="col-1">
        <div className="dropdown">
          <button
            className="header-drop-down"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <BiBasket />
            <span className="cartitem-lenght">{cartItems.length}</span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h3 className="header-cart-title">Cart</h3>

              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            {cartItems.length === 0 ? (
              <>
                <div className="container">
                  <div className="row">
                    <p className="lead">No Product Found in your cart</p>
                    <div className="d-grid gap-2 mt-3">
                      <button
                        className="btn btn-dark header-cart-btn"
                        type="button"
                      >
                        <Link to="/shop" className="header-btn-links">
                          {" "}
                          View Shop{" "}
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="offcanvas-body">
                  {cartItems &&
                    cartItems.map((item, index) => (
                      <>
                        <HeaderCartItem
                          key={index}
                          item={item}
                          deleteCartItems={deleteCartItems}
                        />
                      </>
                    ))}
                  <div className="header-cart-total-div">
                    <p className="header-cart-subtotal">
                      <span className="header-subtotal-title">Subtotal:</span>
                      <span className="header-subtotal-amount">$15.30</span>
                    </p>
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-dark header-cart-btn"
                      type="button"
                    >
                      <Link to="/cart"> View Cart </Link>
                    </button>
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <button
                      className="btn btn-dark header-cart-btn"
                      type="button"
                    >
                      <Link to="/shipping" className="header-btn-links">
                        {" "}
                        View Checkout{" "}
                      </Link>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCart;
