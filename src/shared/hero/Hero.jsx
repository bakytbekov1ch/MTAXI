import React from "react";
import { HeroDataUrl } from "../../data/HeroData";

import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__content">
          {HeroDataUrl.map((item) => (
            <div key={item.id} className="hero__data">
              <h1>{item.number}</h1>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
