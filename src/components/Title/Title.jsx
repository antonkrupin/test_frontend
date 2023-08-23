import React from "react";

import i18next from "../../assets/i18next";

import Button from "../Button/Button";

import "./Title.css";

const Title = () => {
  return (
    <div className="title">
      <h1>
        {i18next.t('Title.h1')}
      </h1>
      <div className="interactionButtons">
        <Button styling="filled w128" text="Title.enterBtn" id="enterBtn"/>
        <Button styling="outlined w155" text="Title.contactsBtn" id="contactsBtn"/>
      </div>
    </div>
  )
};

export default Title