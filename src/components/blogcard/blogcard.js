import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./blogcard.css";

const Blogcard = ({ blog }) => {
  return (
    <Link to={`blogs/${blog.id}`} className="blog__link">
      <motion.div
        className="blog__card"
        key={blog.id}
        layout
        initial={{ opacity: 0, y: "-5vh" }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.img src={blog.image} alt="Blog" className="blog__image" />
        <div className="blog__content">
          <h3 className="blog__title">{blog.title}</h3>
          <div className="blog__details">
            <p className="blog__owner">{blog.writer}</p>
            <span className="dot"></span>
            <p className="blog__card-date">{blog.date}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Blogcard;
