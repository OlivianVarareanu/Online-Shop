import React from 'react';
import "./card-row.css";
import ProductCard from '../product-card/product-card';

const CardRow = ({products,limit}) => {
  return (
    <div className='cards-wrapper'>
      <div className='card-wrapper-row'>
      {products.slice(0,limit).map( (product) => {
        
        return ( 
        <ProductCard 
        key={product.id}
        id={product.id} 
        category={product.category}
        description={product.description}
        image={product.image}
        price={product.price}
        rating={product.rating}
        title={product.title}
        />)
      })}
        </div>
    </div>
  )
}

export default CardRow
