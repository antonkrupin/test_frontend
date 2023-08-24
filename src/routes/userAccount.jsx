import React from 'react';
import { useSelector } from 'react-redux';
import { fetchAuthorizedUser } from '../slices/selectors';

import Button from '../components/Button/Button';

const UserAccount = () => {
  const userName = useSelector(fetchAuthorizedUser);
  return (
    <div className="title">
      <h1>
        Привет, {userName[0]}
      </h1>
      <div className="interactionButtons">
        <Button text="userAccountPage.exitBtn" styling="filled w228" id="enterBtn"/>
        <Button text="userAccountPage.enterContactsBtn" styling="outlined w239" id="contactsBtn"/>
      </div>
    </div>
  )
};

export default UserAccount;