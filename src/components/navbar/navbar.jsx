import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [startScrollPos, setStartScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // Hide navbar on scroll down
      if (currentScrollPos > prevScrollPos) {
        setVisible(false);
        setStartScrollPos(currentScrollPos);
      } else {
        // Show navbar on scroll up
        if (currentScrollPos <= startScrollPos) {
          setVisible(true);
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, startScrollPos]);

  return (
    <nav className={`navbarContainer ${visible ? 'visible' : 'hidden'}`}>
      <div className="logoContainer">
        <Link className="nav-link" to="/">ONLINE SHOP</Link>
      </div>
      <div className="navLinks">
        <Link className="nav-link" to="/">HOME</Link>
        <Link className="nav-link" to="/products">PRODUCTS</Link>
        <Link className="nav-link" to="/checkout">CART {cartCount}</Link>
      </div>
    </nav>
  );
}

export default Navbar;
