import React from 'react'

const ProductBreadcrumbs = ({category,productTitle}) => {
    return (
        <>
            <div className="container mt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">{category}</a></li>
            <li className="breadcrumb-item active" aria-current="page">{productTitle}</li>
          </ol>
        </nav>
      </div>
        </>
    )
}

export default ProductBreadcrumbs
