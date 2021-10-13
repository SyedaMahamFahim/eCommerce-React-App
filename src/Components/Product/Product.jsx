import React,{useState} from 'react'
import ProductBreadcrumbs from './ProductBreadcrumbs'
import { BsHeart } from 'react-icons/bs';
import {RiStarSFill} from 'react-icons/ri'
import './product.css'
const Product = () => {
    const [addToWishList, setAddToWishList] = useState(true)
    const [cartQty, setCartQty] = useState(0)
    return (
        <>
            <ProductBreadcrumbs category={"Men"} productTitle={"BLACK Suit"}/>
            <section className="productpage">
                <div className="productpage-section">
                    <div className="productpage-img">
                        <div className="sale-new">
                            <span className="sale">Sale</span>
                            <span className="new">New</span>
                        </div>

                        <div className="productpage-allimg">
<img src="https://wokiee.reactdemo.hasthemes.com/assets/images/promo/index-promo-img-02.jpg" alt="" className="productpage-product-img" width ="600px"/>
                        </div>
                    </div>
                    <div className="productpage-desc">
                        <div className="product-content">
                            <div className="productpage-product-rating">
                            <RiStarSFill/>
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/>
                            </div>
                            <div className="productpage-customer-reviewer">
                                <h3 className="customer-reviewer">(25 customer reviews)</h3>
                            </div>
                        </div>
                        <h1 className="productpage-product-title">
                        Blue T-Shirt
                        </h1>
                        <h3 className="productpage-product-price">
                        34$
                        </h3>
                        <p className="productpage-product-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis repellat vitae, velit soluta accusantium iusto sunt veniam iure illo, sequi fuga expedita error quis laboriosam quo, libero dolores est! Magni.

                        </p>
                        <div className="productpage-product-content">
                            <div class="productpage-content-title">Quantity</div>

                            <div className="cart-plus-minus">
                                <button className="qtybutton"
                                    onClick={() => setCartQty(cartQty - 1)}
                                >-</button>
                                <span className="cartqty">
                                    {
                                        (cartQty < 0) ? "0" : cartQty
                                    } </span>
                                <button className="qtybutton" onClick={() => setCartQty(cartQty + 1)}>+</button></div>
                        </div>
                        <div className="productpage-add-to-cart-btn">
                            <button className="add-to-cart" >
                                Add To Cart
                            </button>
                            <button id="add-to-wishlist" onMouseOver={() => setAddToWishList(!addToWishList)} className={addToWishList ? "wishlistblack" : "wishlistwhite"}>
                                <BsHeart />

                            </button>

                        </div>
                        <hr />

                        <div className="productpage-product-content">
                            <div class="productpage-content-title">SKU</div>
                            <div className="productpage-content-desc-info">
                            GK-W23
                            </div>
                        </div>
                        <div className="productpage-product-content">
                            <div class="productpage-content-title">Tag</div>
                            <div className="productpage-content-desc-info">
                            Women
                            </div>
                        </div>
                        <div className="productpage-product-content">
                            <div class="productpage-content-title">Category</div>
                            <div className="productpage-content-desc-info">
                            Women
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Product
