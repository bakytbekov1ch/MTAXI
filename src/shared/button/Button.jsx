import React from "react";
import { MdContentCopy } from "react-icons/md";

import "./Button.scss";

const Button = () => {
  return (
    <div className="button">
      <div className="container">
        <div className="button___content">
          <div className="button__block">
            <div className="button__buttons">
              <button>История</button>
              <button className="button__color">Контакт</button>
            </div>

            <select className="button__translate" name="#">
              <option value="#">RUB</option>
              <option value="#">ENG</option>
            </select>
          </div>

          <div className="button__slka">
            <div className="button__input">
              https://react-icons.github.io/react-icons
            </div>
            <MdContentCopy className="button__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
