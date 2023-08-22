import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="logo.png" alt="Логотип"/>
      </div>
      <div className="assets">
        <h4>Контакты</h4>
        <button>Войти</button>
      </div>
    </div>
  )
};

export default Header;