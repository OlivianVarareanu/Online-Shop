import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../../api/baseURL';
import { CircularProgress } from '@mui/material';
import "./product.css"

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loaded, setIsLoaded] = useState(false);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${baseURL}/products/${id}`);
        if (response.status === 200) {
          setIsLoaded(true);
          setProduct(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!loaded) {
    return <div className='circular'><CircularProgress /></div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='product-page-wrapper'>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Afișează alte detalii despre produs aici */}
    </div>
  );
}

export default Product;
