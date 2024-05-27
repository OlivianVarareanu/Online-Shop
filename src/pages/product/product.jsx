import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../../api/baseURL';
import { CircularProgress } from '@mui/material';
import RatingReview from '../../components/rating-review/rating-review';
import Button from '../../components/button/button';
import "./product.css";

const Product = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loaded, setIsLoaded] = useState(false);
  const [rating, setRating] = useState(null);
  const navigate = useNavigate();

  const imageContainerRef = useRef(null);
  const productImageRef = useRef(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${baseURL}/products/${id}`);
        if (response.status === 200) {
          setIsLoaded(true);
          setProduct(response.data);
          setRating(response.data.rating.rate);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    const productImage = productImageRef.current;

    if (imageContainer && productImage) {
      const onZoom = (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        productImage.style.transformOrigin = `${x}px ${y}px`;
        productImage.style.transform = "scale(2)";
      };

      const offZoom = () => {
        productImage.style.transformOrigin = `center center`;
        productImage.style.transform = "scale(1)";
      };

      imageContainer.addEventListener("mousemove", onZoom);
      imageContainer.addEventListener("mouseover", onZoom);
      imageContainer.addEventListener("mouseleave", offZoom);

      return () => {
        imageContainer.removeEventListener("mousemove", onZoom);
        imageContainer.removeEventListener("mouseover", onZoom);
        imageContainer.removeEventListener("mouseleave", offZoom);
      };
    }
  }, [loaded]);

  if (!loaded) {
    return <div className='circular'><CircularProgress /></div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <div className='product-page-wrapper'>
      <div className='product-section'>
        <div id='imageContainer' ref={imageContainerRef}>
          <img className='product-image-separate' src={product.image} alt="" id='productImage' ref={productImageRef}/>
        </div>  
        <div>
          <h1>{product.title}</h1>
          <p>Based on {product.rating.count} reviews</p>
          <RatingReview rating={rating} setRating={setRating} />
          <br></br>
          <h2>Description</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <br></br>
          <Button text="BUY NOW" onClick={handleBuyNow} style={{ backgroundColor: "var(--buy)", marginRight: "1rem" }} />
          <Button text="ADD TO CART" onClick={handleAddToCart} style={{ backgroundColor: "transparent", outline: "3px solid var(--addToCart)", outlineOffset: "-3px", color: "var(--addToCart)" }} />
        </div>
      </div>
    </div>
  );
}

export default Product;
