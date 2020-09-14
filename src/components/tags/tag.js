import React from "react";

import { TAGS } from "../data/data";
import "./tag.css";

const click = (e, id) => {
  if (e.target === id) {
    e.target.classList.toggle("current");
  }
};

const Tag = () => {
  return (
    <ul className="tag__list">
      {TAGS.map((tag, i) => {
        return (
          <li className="tag__list-item" key={i} onClick={click}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
};

export default Tag;
