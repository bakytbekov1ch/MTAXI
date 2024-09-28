import React from "react";
import { ProductData } from "../../data/Product";

import "./Product.scss";

const Product = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="product__content">
          {ProductData.map((item) => (
            <div key={item.id} className="product__data">
              <img src={item.image} alt="" />

              <div className="product__text">
                <h1>{item.name}</h1>
                <h2>MIN: {item.price} ₽</h2>

                <div className="product__time">
                  <h3>{item.time} час</h3>
                  <h3>{item.number} %</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
