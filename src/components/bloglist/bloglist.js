import React from "react";
// import Blogcard from "../blogcard/blogcard";
import Card from "../blogcard/card";

import { BLOGS } from "../data/data";
import "./bloglist.css";

const Bloglist = () => {
  return (
    <div className="bloglist">
      {BLOGS.map((blog) => (
        <Card blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default Bloglist;
