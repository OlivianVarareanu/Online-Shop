import React from 'react'
import "./product-card.css"


const ProductCard = ({category,description,id,image,price,title}) => {



  return (
    <div className='card-wrapper' >
        <div className='header-wrapper'>
            <img className='product-image' src={image} alt="" />
        </div>
        <div className='details-wrapper'>
            <h2>{title}</h2>
            <br></br>
            {/* <h6>{description}</h6> */}
            <h4>{price} €</h4>
        </div>
        
        
    </div>
  )
}

export default ProductCard
