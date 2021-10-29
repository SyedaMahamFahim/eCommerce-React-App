import React from "react";
import { useSelector } from "react-redux";
import MetaData from "../../MetaData/MetaData";
import { Link } from "react-router-dom";
import './confirmOrder.css'
import { PriceSign } from "../../MetaData/PriceSign";
const ConfirmOrder = ({ history }) => {
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);
  
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
  
    const shippingCharges = subtotal > 1000 ? 0 : 200;
  
    const tax = subtotal * 0.18;
  
    const totalPrice = subtotal + tax + shippingCharges;
  
    const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;
  
    const proceedToPayment = () => {
      const data = {
        subtotal,
        shippingCharges,
        tax,
        totalPrice,
      };
  
      sessionStorage.setItem("orderInfo", JSON.stringify(data));
  
      history.push("/process/payment");
    };
  
    return (
      <>
        <MetaData title="Confirm Order" />
        <div className="confirmOrderPage">
          <div>
            <div className="confirmshippingArea">
              <h1>Shipping Info</h1>
              <div className="confirmshippingAreaBox">
                <div>
                  <p>Name:</p>
                  <span>{user.name}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>{shippingInfo.phoneNo}</span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>{address}</span>
                </div>
              </div>
            </div>
            <div className="confirmCartItems">
              <h1>Your Cart Items:</h1>
              <div className="confirmCartItemsContainer">
                {cartItems &&
                  cartItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X {PriceSign}{item.price} ={" "}
                        <b>
                          {item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/*  */}
          <div>
            <div className="orderSummary">
              <h1>Order Summery</h1>
              <div>
                <div>
                  <p>Subtotal:</p>
                  <span>{ PriceSign } {subtotal}</span>
                </div>
                <div>
                  <p>Shipping Charges:</p>
                  <span>{ PriceSign } {shippingCharges}</span>
                </div>
                <div>
                  <p>GST:</p>
                  <span>{ PriceSign } {tax}</span>
                </div>
              </div>
  
              <div className="orderSummaryTotal">
                <p>
                  <b>Total:</b>
                </p>
                <span>{ PriceSign }{totalPrice}</span>
              </div>
  
              <button onClick={proceedToPayment}>Proceed To Payment</button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default ConfirmOrder;