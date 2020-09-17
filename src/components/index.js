import React from "react";
import Bloglist from "./bloglist/bloglist";
import Fab from "./fab/fab";
import Hero from "./hero/hero";
import Navigation from "./navigation/navigation";
import Tag from "./tags/tag";

function Home() {
  return (
    <main>
      {/* <Navigation /> */}
      <Hero />
      <Tag />
      <Bloglist />
      <Fab />
    </main>
  );
}

export default Home;
