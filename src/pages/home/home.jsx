import React, { useState, useEffect } from 'react';
import background from "../../images/background.jpg"
import "./home.css";
import CardRow from '../../components/card-row/card-row';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import cart from "../../images/cart.png"

const Home = ({ products,loaded }) => {
    const limit = 8;
    const [scrollPosition, setScrollPosition] = useState(0);


    return (
        <>  
           {loaded? <div className='page-wrapper'>
                <div className='header-wrapper' style={{ transform: `translateY(${scrollPosition}px)` }}>
                    <img className='background-image' src={background} alt="" />

                    <div className='title-wrapper'>
                        <h1>NEW <br></br>COLLECTION</h1>
                        <h3>SPRING/SUMMER 2024</h3>
                        <Link className='shop-now' to="/products"><h1>SHOP NOW</h1> <img className='cart' src={cart} alt="" /></Link>
                    </div>
                </div>
                
                <div className='message-parent'>
                        <h1 className='message'>NEW ARRIVALS</h1>
                </div>

                <div className='page-content'>
                

                    <div>
                        <CardRow products={products} limit={limit}></CardRow>
                    </div>
                </div>
            </div> : 
            <div className='circular'><CircularProgress/>
           </div>}
        </>
    );
};

export default Home;
