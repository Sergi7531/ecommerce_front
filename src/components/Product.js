import React from "react";
import { Link } from "react-router-dom";
import '../styles/Product.css'; // Import the new CSS file

export default function Product({ product }) {
  return (
    <div className="product">
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.thumbnail_url} alt={product.name} />
        </div>
        <div>
          <h2 className="product-title">{product.name}</h2>
          <h2 className="product-price">{`${product.formatted_price} €`}</h2>
        </div>
      </Link>
    </div>
  );
}

