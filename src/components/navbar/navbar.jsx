import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [startScrollPos, setStartScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // Dacă scrollezi în jos, ascunde navbar-ul
      if (currentScrollPos > prevScrollPos) {
        setVisible(false);
        setStartScrollPos(currentScrollPos);
      } else {
        // Dacă scrollezi înapoi în sus și te afli sub punctul de plecare, afișează navbar-ul
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
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/products">Products</Link>
        <Link className="nav-link" to="/checkout">Checkout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
