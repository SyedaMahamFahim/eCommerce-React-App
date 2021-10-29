import React, { useState, useEffect } from "react";
import ProductBreadcrumbs from "./ProductBreadcrumbs";
import { BsHeart } from "react-icons/bs";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetails,
  clearErrors,
  newReview,
} from "../../actions/productActions";
import { addItemsToCart } from "../../actions/cartAction";
import { addItemsToWishlist } from "../../actions/wishlistAction";
import { PriceSign } from "../MetaData/PriceSign";
import ReviewCard from "./ReviewCard/ReviewCard";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";
import ImageGallery from "react-image-gallery";

const Product = (props) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  var qty = 0;

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const keyword = props.match.params.keyword;
  let sliderImage = [];

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  const [quantity, setQuantity] = useState(0);
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [avatar] = useState("");

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return alert.info("Out Of Stock");
    qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (0 >= quantity) return alert.info("Can't be less than 0");

    const qty = quantity - 1;

    setQuantity(qty);
  };
  const addToCartHandler = () => {
    if (product.Stock > 0) {
      dispatch(addItemsToCart(props.match.params.id, quantity));
      alert.success("Item Added To Cart");
    }
    if (product.Stock === 0) return alert.info("Quantity is zero");
  };

  const addToWishlistHandler = () => {
    dispatch(addItemsToWishlist(props.match.params.id));
    alert.success("Item Added To Wishlist");
  };
  if (loading === false) {
    product.images.map((image) => {
      sliderImage = [
        ...sliderImage,
        {
          original: image.url,
          thumbnail: image.url,
        },
      ];
    });
    
  }

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("title", title);
    myForm.set("avatar", avatar);
    myForm.set("productId", props.match.params.id);

    dispatch(newReview(myForm));
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }

    dispatch(getProductDetails(props.match.params.id));
  }, [
    dispatch,
    props.match.params.id,
    keyword,
    reviewError,
    success,
    alert,
    error,
  ]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ProductBreadcrumbs category={"Men"} productTitle={"BLACK Suit"} />
          <section className="productpage">
            <div className="productpage-section">
              <div className="productpage-img">
                <div className="sale-new">
                  <span className="sale">Sale</span>
                  <span className="new">New</span>
                </div>

                <div className="productpage-allimg">
                  <ImageGallery items={sliderImage} />;
                </div>
              </div>
              <div className="productpage-desc">
                <div className="product-content">
                  <div className="productpage-product-rating">
                    <Rating {...options} />
                  </div>
                  <div className="productpage-customer-reviewer">
                    <h3 className="customer-reviewer">
                      ( {product.numOfReviews} customer reviews)
                    </h3>
                  </div>
                </div>
                <h1 className="productpage-product-title">{product.name}</h1>
                <h3 className="productpage-product-price">
                  {`${PriceSign} ${product.price}`}
                </h3>
                <p className="productpage-product-desc">
                  {product.description}
                </p>
                <div className="productpage-product-content">
                  <div class="productpage-content-title">Quantity</div>

                  <div className="cart-plus-minus">
                    <button className="qtybutton" onClick={decreaseQuantity}>
                      -
                    </button>
                    <input
                      readOnly
                      type="number"
                      value={quantity}
                      className="cartqty"
                    />
                    <button className="qtybutton" onClick={increaseQuantity}>
                      +
                    </button>
                  </div>
                </div>
                <div className="productpage-add-to-cart-btn">
                  <button className="add-to-cart" onClick={addToCartHandler}>
                    Add To Cart
                  </button>
                  <button id="add-to-wishlist" onClick={addToWishlistHandler}>
                    <BsHeart maham="maham" />
                  </button>
                </div>
                <hr />

                <div className="productpage-product-content">
                  <div className="productpage-content-title">Stock</div>
                  <div className="productpage-content-desc-info">
                    {product.Stock}
                  </div>
                </div>
                <div className="productpage-product-content">
                  <div className="productpage-content-title">Tag</div>
                  <div className="productpage-content-desc-info">
                    {product.category}
                  </div>
                </div>
                <div className="productpage-product-content">
                  <div className="productpage-content-title">Category</div>
                  <div className="productpage-content-desc-info">
                    {product.category}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="reviews">
            <div className="container">
              <div className="row">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Descriptions
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Write A Review
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      All Reviews
                    </button>
                  </li>
                </ul>
                <div className="tab-content mt-5" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h1>Description</h1>
                    <p>{product.description}</p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="container mt-3">
                      <div className="row">
                        <h3 className="text-center">Add a review</h3>

                        <div
                          className="mb-3 pe-3 ps-3"
                          style={{ display: "inline-block", width: "50%" }}
                        >
                          <label className="form-label">Title</label>
                          <input
                            className="form-control"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                        <div
                          className="mb-3 pe-3 ps-3"
                          style={{ display: "inline-block", width: "50%" }}
                        >
                          <label className="form-label">Rating</label>
                          <br />
                          <Rating
                            onChange={(e) => setRating(e.target.value)}
                            value={rating}
                            size="large"
                          />
                        </div>
                        <div className="mb-3 pe-3 ps-3">
                          <label className="form-label">Review</label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="5"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          ></textarea>
                        </div>
                        <div className="mb-3 pe-3 ps-3">
                          <button
                            className="btn btn-primary"
                            onClick={reviewSubmitHandler}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="container mt-5">
                      <div className="row">
                        <h3 className="text-center">
                          ( {product.numOfReviews} customer reviews) on{" "}
                          {product.name}
                        </h3>
                        {product.reviews && product.reviews[0] ? (
                          <div className="reviews">
                            {product.reviews &&
                              product.reviews.map((review, index) => (
                                <ReviewCard review={review} key={index} />
                              ))}
                          </div>
                        ) : (
                          <p className="noReviews">No Reviews Yet</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      )}
    </>
  );
};

export default Product;
