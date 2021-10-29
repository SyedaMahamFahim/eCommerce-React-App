import React from 'react'
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { PriceSign } from "../../MetaData/PriceSign";

const HeaderCartItem = ({item,deleteCartItems}) => {
    return (
        <>
             <div className="header-cart-wrapper">
                 
                          <div className="header-cart-img">
                          <Link to={`/product/${item.product}`}>
                            <img
                              src={item.image}
                              alt={item.name}
                              width="100%"
                              height="auto"
                            />
                             </Link>
                          </div>
                          <div className="header-cart-content">
                            <Link to={`/product/${item.product}`}>
                              <h6 className="nomargin">{item.name}</h6>
                            </Link>
                            <p>
                              <span>{item.quantity} x </span> {PriceSign}
                              {item.price}
                            </p>

                            <button
                              className="btn btn-danger btn-sm"
                              key={item.product}
                              onClick={() => deleteCartItems(item.product)}
                            >
                              <BsTrash key={item.product} />
                            </button>
                          </div>
                        </div>
        </>
    )
}

export default HeaderCartItem
