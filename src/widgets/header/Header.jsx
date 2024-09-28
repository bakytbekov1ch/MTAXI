import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">MTAXI</div>

          <div className="header__buttons">
            <button className="header__btn">Войти</button>
            <button>Регистрация</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
