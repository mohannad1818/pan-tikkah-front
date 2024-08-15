import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import background from '../images/back.jpg';
import logo from '../images/logo.jpg';

const Header = () => {
  return (
    <header className="menu-header">
      <img src={background} alt="Background" className="background-image" />
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <div className="icons-container">
          <a href="tel:+966533259414" className="icon-item">
            <FontAwesomeIcon icon={faPhone} size="2x" style={{ color: 'red' }} />
            <p className="icon-text"></p>
          </a>
          {/* أيقونات أخرى يمكن إضافتها هنا */}
        </div>
      </div>
    </header>
  );
};

export default Header;
