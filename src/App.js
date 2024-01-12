import './App.css';
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact';
import Header from './components/Header';
import { requestApi, authToken } from './utils/ApiRequest';
import { useEffect, useState } from 'react';


export default function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  const userCartEndpoint = "http://localhost:8000/api/v1/user_cart/"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await requestApi(userCartEndpoint, {
          method: 'GET',
          headers: {
            'Authorization': authToken,
          },  
        });
        setShoppingCart(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchData();
  }, [userCartEndpoint]);
    
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
