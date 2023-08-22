import React from "react";

import "./Title.css";

const Title = () => {
  return (
    <div className="title">
      <h1>
        Место для получения медицинской помощи
      </h1>
      <div className="interactionButtons">
        <button className="enterButton">Войти</button>
        <button className="contactsButton">Контакты</button>
      </div>
    </div>
  )
};

export default Title