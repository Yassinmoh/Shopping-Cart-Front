import React from 'react'
import '../../css/Products/products.css'
const Products = (props) => {
    return (
        <>
            <div className="products-wrapper">
                {props.products.map(product =>
                    <div className="product-item" key={Math.random()} >
                        <img src={product.imageUrl} alt={product.title} />
                        <div className="product-desc">
                            <p>{product.title}</p>
                            <span>{product.price}</span>
                        </div>
                        <button>Add to Cart</button>
                    </div>)}
            </div>
        </>
    )
}

export default Products