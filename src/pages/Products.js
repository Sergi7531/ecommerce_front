import { useEffect, useState } from 'react';
import { requestApi } from '../utils/ApiRequest';
import Product from '../components/Product';
import '../styles/Products.css'; // Import the new CSS file

export default function Products() {
    const [products, setProducts] = useState([]);

    const productsEndpoint = 'http://localhost:8000/api/v1/products/?name=cult&format=json'

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await requestApi(productsEndpoint);
            setProducts(data);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchData();
    }, [productsEndpoint]);

    return (
        <div className="product-list">
            {products.map((product) => (
            <Product key={product.id} product={product} />
            ))}
        </div>
    )
}