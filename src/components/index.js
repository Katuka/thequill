import React from "react";
import Bloglist from "./bloglist/bloglist";
import Fab from "./fab/fab";
import Hero from "./hero/hero";
import Tag from "./tags/tag";

function Home() {
  return (
    <main>
      <Hero />
      <Tag />
      <Bloglist />
      <Fab />
    </main>
  );
}

export default Home;
