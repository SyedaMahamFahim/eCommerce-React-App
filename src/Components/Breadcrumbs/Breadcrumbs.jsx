import React from 'react'
import './breadcrumbs.css'
const Breadcrumbs = (props) => {
    return (
        <>
            <div className="breadcrumb-bg_img">

                <h1 className="breadcrumb-title">
                  {props.pageName}
                </h1>
                <h5 className="breadcrumb-links">
                    <a href="/"> Home</a>
                   / <span>{props.pageName}</span> </h5>
            </div>
        </>
    )
}
export default Breadcrumbs
