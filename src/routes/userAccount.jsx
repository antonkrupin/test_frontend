import React from 'react';

import Button from '../components/Button/Button';

const UserAccount = () => {
  return (
    <div className="title">
      <h1>
        Привет, Сергей
      </h1>
      <div className="interactionButtons">
        <Button text="userAccountPage.exitBtn" styling="filled w228" id="enterBtn"/>
        <Button text="userAccountPage.enterContactsBtn" styling="outlined w239" id="contactsBtn"/>
      </div>
    </div>
  )
};

export default UserAccount;