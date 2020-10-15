import React from "react";
import { Link } from "react-router-dom";
import dots from "../../img/dots.svg";

import "./blogcard.css";

const Blogcard = ({ blog }) => {
  return (
    <Link to={`blogs/${blog.id}`} className="blog__link">
      <div className="blog__card">
        <div className="blog__card-left">
          <img src={blog.image} alt="Blog" className="blog__card-img"/>
          <div className="blog__card-info">
            <h4 className="blog__card-title">
              {blog.title}
            </h4>
            <p className="blog__card-date">
              {blog.date}
            </p>
          </div>
        </div>
        <img src={dots} alt="dots"/>
      </div>
    </Link>
  );
};

export default Blogcard;
