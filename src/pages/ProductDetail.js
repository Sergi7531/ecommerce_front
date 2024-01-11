import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { requestApi } from "../utils/ApiRequest";

export default function ProductDetail() {
    const { product_id } = useParams()

    const [product, setProduct] = useState([]);

    const productsEndpoint = 'http://localhost:8000/api/v1/products/' + product_id

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await requestApi(productsEndpoint);
            setProduct(data);
          } catch (error) {
            console.error('Error fetching product:', error);
          }
        };
    
        fetchData();
    }, [productsEndpoint]);
        


    return (
        <div>
            <h1>
                {product.name}
            </h1>
        </div>
    )

}