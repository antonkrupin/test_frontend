import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchIsAuthorized } from '../../slices/selectors';

import { setModalOpen, setIsAuthorized } from '../../slices/mainReducer';

import i18next from '../../assets/i18next';
import './Header.css';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthorized = useSelector(fetchIsAuthorized);

  const enterButtonHandler = () => {
    if (isAuthorized) {
      dispatch(setIsAuthorized());
      navigate('/');
    } else {
      dispatch(setModalOpen());
    }
  }

  const openContactsPage = () => {
    navigate('/contacts');
  }

  const btnText = isAuthorized ? i18next.t('Header.exitBtn') : i18next.t('Header.enterBtn');

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src="logo.png"
            alt={i18next.t('Header.logoImgAlt')}
            title={i18next.t('Header.logoImgAlt')}
          />
        </Link>
      </div>
      <div className="assets">
        <button
          id="headerContacts"
          onClick={openContactsPage}
        >
          {i18next.t('Header.contactsBtn')}
        </button>
        <button
          onClick={enterButtonHandler}
        >
          {btnText}
        </button>
      </div>
    </div>
  )
};

export default Header;