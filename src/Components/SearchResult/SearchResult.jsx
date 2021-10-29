import React, { useEffect } from "react";

import { getProducts } from '../../actions/productActions'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../Loader/Loader'
import {useAlert} from 'react-alert'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ProductCard from "../Shop/ProductCard";
import MetaData from "../MetaData/MetaData";

const SearchResult = ({match}) => {
    const alert=useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);
    
const keyword=match.params.keyword
    useEffect(() => {
        if(error){
            return alert.error(error)
        }
        dispatch(getProducts(keyword));

    }, [dispatch,error,alert,keyword])
    return (
        <>
            {
                loading ? (<Loader />) : (
                    <>
                        <MetaData title="Shop" />
                        <Breadcrumbs pageName={"Shop"} />

                        <div className="container shop-page">
                            <div className="row">
                                <div className="col-2">
                                    
                                </div>
                                <div className="col-8 shop-page-container">
                                    {products &&
                                        products.map((product,index) => (
                                            <ProductCard key={product._id} product={product}/>
                                        ))}
                                </div>
                                <div className="col-2">
                                    
                                    </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default SearchResult
