import './App.css';
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact';
import Header from './components/Header';
import { requestApi } from './utils/ApiRequest';
import { useEffect, useState } from 'react';


export default function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  const authToken = 'Token 7d64ceca1d9d7cad45c8d20611ae9a778c8a7dac9a653a2ba83dad94d5e783b7'; // Replace with your actual authorization token

  const endpoint = "http://localhost:8000/api/v1/user_cart/"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await requestApi(endpoint, {
          Authorization: `${authToken}`
        });
        console.log('API Response:', data);
        setShoppingCart(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchData();
  }, [endpoint, authToken]);
    
  return (
    <div className="App">
        <Router>
          <Header productsInCart={shoppingCart.total_products_amount}/>
          <Routes>
            <Route path='/products' element={<Products />} />
            <Route path='/products/:product_id' element={<ProductDetail />} />
            {/* TODO: <Route path='/cart/:shopping_cart_id' element={<ShoppingCart />} /> */}
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
    </div>
  );
}
