import React from 'react'
import "./products.css"
import CardRow from '../../components/card-row/card-row'

const Products = ({products}) => {
  return (
    <>
      <div className='products-page-title'>
        <h1 style={{textAlign:"center"}}>Let yourself be inspired by our entire new collection</h1>
      </div>

      <div>
        <CardRow products={products} limit={20}/>
      </div>
    </>

  )
}

export default Products
