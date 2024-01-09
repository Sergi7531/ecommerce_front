import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="product">
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image_url} alt={product.name} />
        </div>
        <div>
          <p className="product-title">{product.name}</p>
          <p className="product-price">{`${product.formatted_price} €`}</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
