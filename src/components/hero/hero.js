import React from "react";
import search from "../../img/search.svg";

import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <p className="hero__greeting">Hey, Mutale!</p>
      <h1 className="hero__heading">Discover The Latest Blogs </h1>
      <div className="hero__input-wrapper">
        <input
          type="text"
          placeholder="Search for blogs"
          className="hero__input"
        />
        <div className="hero__search-wrapper">
          <img src={search} alt="Search Icon" className="hero__search-icon" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
