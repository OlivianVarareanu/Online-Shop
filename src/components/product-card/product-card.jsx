import React, { useState } from 'react';
import './product-card.css';
import RatingReview from '../rating-review/rating-review';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ category, description, id, image, price, title, ratingCount, ratingStars }) => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(ratingStars);

  return (
    <div className='card-wrapper' onClick={() => navigate(`/products/${id}`)}>
      <div className='header-wrapper'>
        <img className='product-image' src={image} alt="" />
      </div>
      <div className='details-wrapper'>
        <h2>{title}</h2>
        <br />
        <p>{ratingCount} reviews</p>
        <RatingReview rating={rating} setRating={setRating} />
        <h4>{price} €</h4>
      </div>
    </div>
  );
}

export default ProductCard;
