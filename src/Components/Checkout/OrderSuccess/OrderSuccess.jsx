import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";

const OrderSuccess = () => {
  return (
    <>
      {/* AiOutlineCheckCircle */}
      <div className="d-flex justify-content-center mt-5">
        <AiOutlineCheckCircle
          style={{
            fontSize: "10em",
            color: "crimson",
          }}
        />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <h1 className="text-center">Your Order has been Placed successfully </h1>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button type="button" class="btn btn-danger">
          {" "}
          <Link to="/orders" color="white">
            View Orders
          </Link>
        </button>
      </div>
    </>
  );
};

export default OrderSuccess;
