import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/navbar/navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import baseURL from './api/baseURL';
import Home from './pages/home/home';
import Products from './pages/products/products';
import Footer from './components/footer/footer';
import Product from './pages/product/product';
import Checkout from './pages/checkout/checkout';

function App() {
  const [products, setProducts] = useState([]);
  const [loaded, setIsLoaded] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseURL}/products`);
        if (response.status === 200) {
          setIsLoaded(true);
          setProducts(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const cartCount = cart.length;

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path='/' element={<Home products={products} loaded={loaded} />} />
        <Route path='/home' element={<Home products={products} loaded={loaded} />} />
        <Route path='/products' element={<Products products={products} />} />
        <Route path='/products/:id' element={<Product addToCart={addToCart} />} />
        <Route path='/checkout' element={<Checkout cart={cart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
