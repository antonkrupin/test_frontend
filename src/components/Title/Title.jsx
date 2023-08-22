import React from "react";

import i18next from "../../assets/i18next";

import "./Title.css";

const Title = () => {
  return (
    <div className="title">
      <h1>
        {i18next.t('Title.h1')}
      </h1>
      <div className="interactionButtons">
        <button className="enterButton">{i18next.t('Title.enterBtn')}</button>
        <button className="contactsButton">{i18next.t('Title.contactsBtn')}</button>
      </div>
    </div>
  )
};

export default Title