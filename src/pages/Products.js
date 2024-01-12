import { useEffect } from "react";
import { requestApi } from "../utils/ApiRequest";
import Product from "../components/Product";
import "../styles/Products.css"; // Import the new CSS file
import React from "react";
import { useProducts } from "../Context/ProductsContext";

export default function Products() {
  const { products, updateProducts } = useProducts();

  const productsEndpoint = "http://localhost:8000/api/v1/products/?format=json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (products.length === 0) {
          const data = await requestApi(productsEndpoint);
          updateProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [products, updateProducts]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
