import React from "react";
import './ProductCard.css';

function ProductCard({image, title, price}) {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <h2 className="product-title">{title}</h2>
            <p className="product-price">{price}</p>
            <button className="product-button">Add to Cart</button>
        </div>
    );
}
export default ProductCard;