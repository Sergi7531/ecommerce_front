import './App.css';
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact';
import Header from './components/Header';
import axios from 'axios';

export async function requestApi(endpoint) {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error making request:', error);
    throw error; // Optionally rethrow the error for the caller to handle
  }
}

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
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

export default App;
