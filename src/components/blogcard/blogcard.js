import React from "react";
import { Link } from "react-router-dom";

import "./blogcard.css";

const Blogcard = ({ blog }) => {
  return (
    <Link to={`blogs/${blog.id}`} className="blog__link">
      <div className="blog__card" key={blog.id}>
        <img src={blog.image} alt="Blog" className="blog__image" />
        <div className="blog__content">
          <h3 className="blog__title">{blog.title}</h3>
          <div className="blog__details">
            <p className="blog__owner">{blog.writer}</p>
            <span className="dot"></span>
            <p className="blog__card-date">{blog.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Blogcard;
