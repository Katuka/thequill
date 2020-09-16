import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Useanimations from "react-useanimations";

import arrow from "../../img/arrow-left.svg";
import b from "../../img/b.png";
import heart from "../../img/heart.svg";
import share from "../../img/share.svg";
import bookmark from "../../img/bookmark.svg";
import { BLOGS } from "../data/data";
import "./blog.css";

const Blog = () => {
  const path = useParams().id;
  const history = useHistory();
  return BLOGS.filter((blog) => blog.id === parseInt(path)).map((blog) => (
    <React.Fragment key={blog.id}>
      <div className="blog">
        <img
          src={arrow}
          alt="Go back"
          className="go__back"
          onClick={() => history.goBack()}
        />
        <div className="blog__header">
          <img src={b} alt="Logo" className="blog__logo" />
          <div className="blog__header-dets">
            <p className="blog__date">{blog.date}</p>
            <h3 className="blog__author">{blog.writer}</h3>
          </div>
        </div>
        <h1 className="blog__title-dets">{blog.title}</h1>
        <p className="blog__content">
          The first thing you need to do is determine what type of content the
          font will be used for.
        </p>
        <img src={blog.image} alt="Android" className="blog__img" />
        <p className="blog__content">
          The first thing you need to do is determine what type of content the
          font will be used for. Decide if the fonts are for your blog,
          homepage, landing page, product description, or navigation menu.
        </p>
        <p className="blog__content">{blog.blog}</p>
        <p className="blog__content">{blog.blog}</p>
      </div>
      <footer className="blog__footer">
        <div className="blog__footer-item">
          <img src={heart} alt="Heart" />
          <p>32</p>
        </div>
        <div className="blog__footer-item">
          <img src={share} alt="Heart" />
          <p>5</p>
        </div>
        <div className="blog__footer-item">
          <img src={bookmark} alt="Heart" />
          <p>15</p>
        </div>
      </footer>
    </React.Fragment>
  ));
};

export default Blog;
