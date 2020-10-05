import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./card.css";
import blogImage from "../../img/blogImage.svg";

const Card = ({ blog }) => {
  return (
    <Link to={`blogs/${blog.id}`} className="blog__link">
      <motion.div
        className="card"
        key={blog.id}
        layout
        initial={{ opacity: 0, y: "-5vh" }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="card__img-wrapper">
          <motion.img src={blog.image} alt="Akakope" className="card__img" />
        </div>
        <div className="card__info">
          <h2 className="card__title">{blog.title}</h2>
          <p className="card__intro">{blog.intro}</p>
          <div className="card__dets">
            <motion.img src={blogImage} alt="Ichikope" />
            <div className="card__dets-1">
              <p className="card__writer">{blog.writer}</p>
              <span className="card__hyphen">-</span>
              <p className="card__date">{blog.date}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
