// ProductDetail.js

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestApi, authToken } from "../utils/ApiRequest";
import "../styles/ProductDetail.css"; // Import the new CSS file

export default function ProductDetail() {
  const { product_id } = useParams();

  const [product, setProduct] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);

  const productsEndpoint =
    "http://localhost:8000/api/v1/products/" + product_id;
  const addToCartEndpoint = "http://localhost:8000/api/v1/cart/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await requestApi(productsEndpoint);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [productsEndpoint]);

  const handleSizeClick = (size) => {
    // Update the selectedSize state when a size is clicked
    setSelectedSize(size);
  };

  const handleAddToCart = async () => {
    // Check if a size is selected
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    console.log(selectedSize);
    // Prepare payload
    const payload = {
      product_id: product_id.replace(/-/g, ""),
      sizing_id: selectedSize.id.replace(/-/g, ""),
      amount: 1,
    };

    await requestApi(addToCartEndpoint, {
      method: "POST",
      headers: {
        Authorization: authToken,
        "Content-Type": "application/json",
      },
      data: JSON.stringify(payload),
    });
  };

  return (
    <div className="product-detail-view">
      <div>
        {product.images && product.images.length > 0 && (
          <div className="row">
            {product.images.map((image, index) => (
              <div key={index} className="col-md-6">
                <img
                  src={image.url}
                  alt={`${product.name}-${index}`}
                  className="carousel-image"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h2 className="product-title">{product.name}</h2>
        <p className="product-price">{product.formatted_price_with_currency}</p>
        <p className="product-description">{product.description}</p>

        <div className="product-sizes">
          <strong>Sizes:</strong>
          <ul>
            {product.sizes && product.sizes.length > 0 ? (
              product.sizes.map((size, index) => (
                <li key={index} className={selectedSize === size ? "selected" : ""}onClick={() => handleSizeClick(size)}>
                  {size.size_short}
                </li>
              ))
            ) : (
              <p>No sizes available for this product.</p>
            )}
          </ul>
        </div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
