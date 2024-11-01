// src/Collection/ProductSidebar.js
import React from 'react';

function ProductSidebar({ product, onClose, addToCart }) {
  return (
    <div className="product-sidebar">
      <button className="close-btn" onClick={onClose}>×</button>
      <div className="sidebar-content">
        <div className="product-info">
          <h2>{product.name}</h2>
          <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
          <p className="product-price">{product.price}</p>
          {product.reviews > 0 && (
            <div className="product-rating">
              {"⭐".repeat(product.rating)}
              <span>{product.reviews} review{product.reviews > 1 ? "s" : ""}</span>
            </div>
          )}
          <p className="product-description">{product.description}</p>
        </div>
      </div>
      <div className="sidebar-footer">
        <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductSidebar;
