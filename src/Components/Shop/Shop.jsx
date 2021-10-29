import React, { useState, useEffect } from "react";
import "./shop.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ProductCard from "./ProductCard";
import MetaData from "../MetaData/MetaData";
import { getProducts, clearErrors } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography"

const Shop = ({ match}) => {
    const categories = [
        "MEN",
        "WOMEN",
        "CHILDREN",
        "Tops",
        "Attire",
        "Camera",
        "SmartPhones",
      ];
  const alert = useAlert();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);


  const {
    loading,
    error,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
    
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProducts(keyword, currentPage, price,category ,ratings));
  }, [dispatch, keyword, currentPage, price,category, ratings ,error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Shop" />
          <Breadcrumbs pageName={"Shop"} />

          <div className="container shop-page">
            <div className="row">
              <div className="col-4">
              <fieldset>
              <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="on"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />
            </fieldset>
          
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
              </div>
              <div className="col-8 shop-page-container">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} loading={loading} 
                    error={error}/>
                  ))}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col align-self-end">
                {resultPerPage < count && (
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={productsCount}
                    onChange={setCurrentPageNo}
                    nextPageText="Next"
                    prevPageText="Prev"
                    firstPageText="1st"
                    lastPageText="Last"
                    itemClass="page-item"
                    linkClass="page-link"
                    activeClass="pageItemActive"
                    activeLinkClass="pageLinkActive"
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Shop;
