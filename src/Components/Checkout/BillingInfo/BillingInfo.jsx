import React, { useRef,useEffect } from "react";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { createOrder,clearErrors } from "../../../actions/orderAction";
import {PriceSign} from '../../MetaData/PriceSign'
import { useHistory } from "react-router-dom";

const BillingInfo = () => {
  const history=useHistory()
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const dispatch = useDispatch();
  const alert = useAlert();
  const payBtn = useRef(null);


  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { error } = useSelector((state) => state.newOrder);

  const order = {
    shippingInfo,
    orderItems: cartItems,
    paymentInfo:{
      id: "new-order",
      status:"success"
    },
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  
  };

  
  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;
    dispatch(createOrder(order));
    history.push("/order/success");
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);
  return (
    <div
      className="container   mt-5 "
      width="50%"
      style={{ margin: "auto" }}
    >
      <h4 className="mb-3 text-center">Payment</h4>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="d-flex justify-content-center">
          <div className="col-md-4">
            <label htmlFor="cc-name" className="form-label">
              Name on card
            </label>
            <input type="text" className="form-control" id="cc-name" required />
            <div className="invalid-feedback">Name on card is required</div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <div className="col-md-4">
            <label htmlFor="cc-number" className="form-label">
              Credit card number
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-number"
              placeholder
              required
            />
            <div className="invalid-feedback">
              Credit card number is required
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="col-md-4">
            <label htmlFor="cc-expiration" className="form-label">
              Expiration
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-expiration"
              placeholder
              required
            />
            <div className="invalid-feedback">Expiration date required</div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <div className="col-md-4">
            <label htmlFor="cc-number" className="form-label">
              Pin code number
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-number"
              placeholder
              required
            />
            <div className="invalid-feedback">
              Credit card number is required
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <div className="col-md-4">
            <div className="d-grid gap-2">
              <button className="btn btn-danger" type="submit"  ref={payBtn}>
              {`Pay - ${PriceSign} ${orderInfo && orderInfo.totalPrice}`}
              </button>
            </div>
          </div>
        </div>
       
      </form>
    </div>
  );
};

export default BillingInfo;
