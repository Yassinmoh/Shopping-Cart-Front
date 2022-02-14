import React from 'react'

const Products = (props) => {
    return (
        <>
            <div className="products-wrapper">
                {props.products.map(product => <div key={Math.random()}>
                    <div className="product-item">
                        <img src={product.imageUrl} alt={product.title} />
                        <div className="product-desc">
                            <p>{product.title}</p>
                            <span>{product.price}</span>
                        </div>
                    </div>
                </div>)}
            </div>
        </>
    )
}

export default Products