import React from "react";
import Blogcard from "../blogcard/blogcard";

import { BLOGS } from "../data/data";
import "./bloglist.css";

const Bloglist = () => {
  return (
    <div className="bloglist">
      {BLOGS.map((blog) => (
        <Blogcard blog={blog} />
      ))}
    </div>
  );
};

export default Bloglist;
