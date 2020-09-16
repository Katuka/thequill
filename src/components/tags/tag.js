import React from "react";

import { TAGS } from "../data/data";
import "./tag.css";

const click = (e, tag) => {
  if (e.target.textContent === tag) {
    e.target.classList.add("current");
  }
};

const Tag = () => {
  return (
    <ul className="tag__list">
      {TAGS.map((tag, i) => (
        <li className="tag__list-item" key={i} onClick={click}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tag;
