import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header>
      <nav>
        <Link to='/'>Home</Link> | <Link to='/movies'>Movies</Link> | <Link to='/contact'>Contact</Link> | <Link to='/about'>About Us</Link>
      </nav>
    </header>
  );
}

export default Header;
