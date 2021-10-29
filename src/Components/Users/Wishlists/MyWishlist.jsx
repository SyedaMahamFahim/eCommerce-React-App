import React from "react";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import { removeItemsFromWishlist } from "../../../actions/wishlistAction";
import WishlistDetail from "../WishlistDetail/WishlistDetail";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// IoIosHeartEmpty
import { IoIosHeartEmpty } from "react-icons/io";

const MyWishlist = () => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const deleteWishlistItems = (id) => {
    const confirmationRemoveItem = window.confirm(
      "Do you want to remove the item?"
    );
    if (confirmationRemoveItem) {
      dispatch(removeItemsFromWishlist(id));
    }
  };
  return (
    <>
      <Breadcrumbs pageName={"Wishlist"} />

      {wishlistItems.length === 0 ? (
        <>
      

          <div className="container mt-5">
          <div className="row mt-5">
            <div className="emptyCart text-center">
              <IoIosHeartEmpty className="empty-cart-icon"/>

              <h1>No Product in Your Wishlist</h1>
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
      ) : (
        <>
          

          <div className="container mt-5">
            <table id="cart" className="table table-hover table-condensed">
              <thead>
                <tr>
                  <th style={{ width: "70%" }}>Product</th>
                  <th style={{ width: "10%" }}>Price</th>
                  <th style={{ width: "10%" }}>Link</th>
                  <th style={{ width: "10%" }}>Remove</th>
                </tr>
              </thead>
              <tbody>
                {wishlistItems.map((item, index) => {
                  return (
                    <>
                      <WishlistDetail
                        item={item}
                        key={index}
                        deleteWishlistItems={deleteWishlistItems}
                      />
                    </>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <Link to="/shop" className="btn btn-dark">
                      Continue Shopping
                    </Link>
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

export default MyWishlist;
