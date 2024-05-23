import React from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/navbar/navbar';
import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter, Link ,useNavigate} from 'react-router-dom';
import baseURL from './api/baseURL';
import Home from './pages/home/home';
import Products from './pages/products/products';
import Footer from './components/footer/footer';
import Product from './pages/product/product';

function App() {
  const [products, setProducts] = useState([]);
  const [loaded, setIsLoaded] = useState(false);

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

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home products={products} loaded={loaded} />} />
          <Route path='/home' element={<Home products={products} loaded={loaded} />} />
          <Route path='/products' element={<Products products={products}/>} />
          <Route path='/products/:id' element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
