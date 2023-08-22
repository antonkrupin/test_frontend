import React from 'react';

import i18next from '../../assets/i18next';

import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="logo.png"
          alt={i18next.t('Header.logoImgAlt')}
          title={i18next.t('Header.logoImgAlt')}
        />
      </div>
      <div className="assets">
        <h4>{i18next.t('Header.contactsBtn')}</h4>
        <button>{i18next.t('Header.enterBtn')}</button>
      </div>
    </div>
  )
};

export default Header;