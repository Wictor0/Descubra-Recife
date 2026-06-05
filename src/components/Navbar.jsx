import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import SearchBar from './SearchBar';
import logo from '../assets/logo.png';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar-organic">
        
        {/* Lado ESQUERDO - 3 itens */}
        <div className="nav-group links-left">
          <Link to="/destinos" style={{ color: '#00A859' }}>DESTINOS</Link>
          <Link to="/experiencias" style={{ color: '#005BB5' }}>EXPERIÊNCIAS</Link>
          <Link to="/gastronomia" style={{ color: '#F26522' }}>GASTRONOMIA</Link>
        </div>
        
        {/* Logo CENTRAL */}
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} className="logo-img" alt="Descubra Recife" />
          </Link>
        </div>

         <div className="nav-group links-right">
          <Link to="/cultura" style={{ color: '#ED1C24' }}>CULTURA</Link>
          <Link to="/arte" style={{ color: '#9C27B0' }}>ARTE</Link>
          <Link to="/faq" style={{ color: '#EC008C' }}>FAQ</Link>
          <SearchBar /> 
        </div>

      </nav>
    </div>
  );
};

export default Navbar;