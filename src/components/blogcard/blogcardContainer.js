import React from "react";
import { BLOGS } from "../data/data";
import Blogcard from "./blogcard";

const BlogList = () => {
   return BLOGS.map(blog => (<Blogcard blog={blog} />))
}

export default BlogList;